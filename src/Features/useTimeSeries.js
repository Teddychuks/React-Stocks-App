import { useQuery } from "@tanstack/react-query";
import { getTimeSeries } from "../Services/apiStocks";

export function useTimeSeries() {
  const { isLoading, data: timeseries } = useQuery({
    queryKey: ["timeseries"],
    queryFn: getTimeSeries,
  });
  return { isLoading, timeseries };
}
