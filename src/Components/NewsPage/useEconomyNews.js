import { useQuery } from "@tanstack/react-query";
import { getEconomyNews } from "../../Services/apiNews";

export function useEconomyNews() {
  const { isLoading, data: economynews } = useQuery({
    queryKey: ["economynews"],
    queryFn: getEconomyNews,
  });

  return { isLoading, economynews };
}
