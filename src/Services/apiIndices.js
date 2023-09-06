export async function getIndices() {
  const filterData = ["price", "performance", "technical"];
  const headers = {
    "X-RapidAPI-Key": "fd86c3858fmshb58043ce044d11dp1b9995jsn9ed0cddde1ed",
    "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
  };

  const fetchFilteredData = async (filter) => {
    const url = `https://global-stock-market-api-data.p.rapidapi.com/major_global_indices_by_${filter}`;

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
