import { useQuery } from "@tanstack/react-query";
import { getGreedIndex } from "../Services/apiStocks";

export function useGreedIndex() {
  const { isLoading, data: greedindex } = useQuery({
    queryKey: ["greedindex"],
    queryFn: getGreedIndex,
  });

  return { isLoading, greedindex };
}
