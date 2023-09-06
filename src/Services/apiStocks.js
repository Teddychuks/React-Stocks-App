/*{Live prices}*/
export async function getLivePriceArray() {
  const stockSymbols = ["AAPL", "GOOGL", "MSFT", "NVDA"];
  const headers = {
    "X-RapidAPI-Key": "fd86c3858fmshb58043ce044d11dp1b9995jsn9ed0cddde1ed",
    "X-RapidAPI-Host": "get-live-stock-price-by-symbol.p.rapidapi.com",
  };

  const stockPriceArray = async (symbol) => {
    const url = `https://get-live-stock-price-by-symbol.p.rapidapi.com/api/stocks?input=${symbol}`;

    try {
      const response = await fetch(url, { method: "GET", headers });
      const result = await response.json();
      return { symbol, data: result }; // Return symbol along with the data
    } catch (error) {
      throw new Error(error);
    }
  };

  try {
    const dataPromises = stockSymbols.map(async (symbol) => {
      return await stockPriceArray(symbol);
    });

    const data = await Promise.all(dataPromises);

    // Extract symbols and data
    const symbols = data.map((item) => item.symbol);
    const responseData = data.map((item) => item.data);

    return { symbols, price: responseData };
  } catch (error) {
    console.error(error);
  }
}

/*{Time series}*/
const stockSymbols = ["AAPL", "GOOGL", "MSFT", "NVDA"];
const TIME_SERIES_URL = "https://api.twelvedata.com/time_series?";
const INTERVAL = "&interval=5min";
const SOURCE = "&source=docs";
const TIME_SERIES = import.meta.env.VITE_TWELVE_BACKUP;

export async function getTimeSeries() {
  const promises = stockSymbols.map(async (symbol) => {
    const response = await fetch(
      `${TIME_SERIES_URL}symbol=${symbol}${INTERVAL}&apikey=${TIME_SERIES}${SOURCE}`
    );

    if (!response.ok) {
      throw new Error(
        `Something went wrong with request for time series ${symbol}`
      );
    }

    const data = await response.json();

    const extractedData = data.values.map((entry) => ({
      volume: entry.volume,
      datetime: entry.datetime,
      close: entry.close,
    }));
    return extractedData;
  });

  const timeseriesArray = await Promise.all(promises);
  return timeseriesArray;
}

export async function getGreedIndex() {
  const url = "https://fear-and-greed-index.p.rapidapi.com/v1/fgi";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fd86c3858fmshb58043ce044d11dp1b9995jsn9ed0cddde1ed",
      "X-RapidAPI-Host": "fear-and-greed-index.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const specificData = data.fgi;
    return specificData;
  } catch (error) {
    console.error(error);
  }
}

export async function getMostActiveStocks() {
  const filterData = ["price", "performance", "technical", "fundamental"];
  const headers = {
    "X-RapidAPI-Key": "fd86c3858fmshb58043ce044d11dp1b9995jsn9ed0cddde1ed",
    "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
  };

  const fetchFilteredData = async (filter) => {
    const url = `https://global-stock-market-api-data.p.rapidapi.com/most_active_countrywise_by_${filter}/usa`;

    try {
      const response = await fetch(url, { method: "GET", headers });
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  try {
    const dataPromises = filterData.map(async (filter) => {
      return fetchFilteredData(filter);
    });

    const data = await Promise.all(dataPromises);

    return data;
  } catch (error) {
    console.error(error);
  }
}
