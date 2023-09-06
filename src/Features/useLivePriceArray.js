import { useQuery } from "@tanstack/react-query";
import { getLivePriceArray } from "../Services/apiStocks";

export function useLivePricesArray() {
  const { isLoading, data: livepricesarray } = useQuery({
    queryKey: ["livepricesarray"],
    queryFn: getLivePriceArray,
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
  });
  return { isLoading, livepricesarray };
}
