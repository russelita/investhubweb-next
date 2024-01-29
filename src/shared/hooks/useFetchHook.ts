import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';

type useFetchHookProps = {
	keys: QueryKey;
	api: QueryFunction<any, QueryKey>;
	initialData: any;
	options?: Omit<
		UseQueryOptions<any, unknown, any, QueryKey>,
		'initialData' | 'queryKey'
	>;
};

const useFetchHook = ({
  keys,
  api,
  initialData,
  options
}: useFetchHookProps) => {
  const fetchQuery = useQuery(keys, api, {
    ...(initialData && { initialData }),
    ...options,
  });

  return fetchQuery;
};

export default useFetchHook;
