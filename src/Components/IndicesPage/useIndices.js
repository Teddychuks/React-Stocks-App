import { useQuery } from "@tanstack/react-query";
import { getIndices } from "../../Services/apiIndices";

export function useIndices() {
  const { isLoading, data: indices } = useQuery({
    queryKey: ["indices"],
    queryFn: getIndices,
  });

  return { isLoading, indices };
}
