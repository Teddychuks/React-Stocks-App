import { useQuery } from "@tanstack/react-query";
import { getMostActiveStocks } from "../Services/apiStocks";

export function useMostActiveStocks() {
  const { isLoading, data: mostactivestocks } = useQuery({
    queryKey: ["mostactivestocks"],
    queryFn: getMostActiveStocks,
  });

  return { isLoading, mostactivestocks };
}
