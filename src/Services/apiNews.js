export async function getLatestNews() {
  const url =
    "https://global-stock-market-api-data.p.rapidapi.com/news/latest_news";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fd86c3858fmshb58043ce044d11dp1b9995jsn9ed0cddde1ed",
      "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getEconomyNews() {
  const url =
    "https://global-stock-market-api-data.p.rapidapi.com/news/economy_news/1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fd86c3858fmshb58043ce044d11dp1b9995jsn9ed0cddde1ed",
      "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
