import { fetchColors } from "@/shared/api/fetch/colors";
import useFetchHook from "@/shared/hooks/useFetchHook";
import { Colors } from "@/shared/types/colors";
import { DehydratedState, QueryClient, UseQueryResult, dehydrate } from "@tanstack/react-query";

/**
 *
 * @param queryClient
 * @param params // the optional params
 */
export const prefetchListQuery = async (
  queryClient: QueryClient,
  // eslint-disable-next-line no-unused-vars
  params?: any,
): Promise<DehydratedState> => {
  const fetchDataColors = fetchColors();
	
  await queryClient.prefetchQuery(
    fetchDataColors.key,
    fetchDataColors.api,
  );

  return dehydrate(queryClient);
};

/**
 * the optional initial data used for SSR
 * @param initialData
 */
const useGetList = (initialData?: any) => {
  const fetchDataColors = fetchColors();

  const fetchQuery: UseQueryResult<Colors> = useFetchHook({
    keys: fetchDataColors.key,
    api: fetchDataColors.api,
    initialData,
  });

  return {
    fetchQuery
  };
};

export default useGetList;