import type { GetStaticProps } from 'next';
import SectionData from '@/features/colors/ui/SectionData';
import { DehydratedState, QueryClient } from '@tanstack/react-query';
import { prefetchListQuery } from '@/features/colors/hooks/useGetList';
import withPrivateRoute from '@/shared/lib/withPrivateRoute';

export const getStaticProps: GetStaticProps<{ dehydratedState: DehydratedState }> = async () => {
  const queryClient = new QueryClient();

  const dehydratedState = await prefetchListQuery(queryClient);

  return {
    props: {
      dehydratedState,
    }
  };
};

function Colors() {
  return <SectionData />;
}

export default Colors;