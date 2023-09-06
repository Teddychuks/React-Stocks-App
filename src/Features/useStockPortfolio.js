import { useQuery } from "@tanstack/react-query";
import { getIBM } from "../Services/apiStocks";

export function useStockPortfolio() {
  const { isLoading, data: stockportfolio } = useQuery({
    queryKey: ["stockportfolio"],
    queryFn: getIBM,
  });

  console.log(stockportfolio);
  return { isLoading, stockportfolio };
}
