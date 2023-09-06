import { useQuery } from "@tanstack/react-query";
import { getLatestNews } from "../../Services/apiNews";

export function useLatestNews() {
  const { isLoading, data: latestnews } = useQuery({
    queryKey: ["latestnews"],
    queryFn: getLatestNews,
  });

  return { isLoading, latestnews };
}
