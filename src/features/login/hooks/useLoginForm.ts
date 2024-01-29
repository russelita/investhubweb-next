import Cookies from 'js-cookie';
import { logIn } from "@/shared/api/mutation/login";
import useMutationHook from "@/shared/hooks/useMutationHook";
import { useRouter } from 'next/router';
import { DASHBOARD_HOME } from '@/shared/constants/path';
import { notification } from 'antd';

const useLoginForm = () => {
  const router = useRouter();

  const mutationQuery = useMutationHook({
    api: logIn,
    options: {
      // eslint-disable-next-line no-unused-vars
      onError(error: any, variables, context) {
        notification.error({
          message: error?.response?.data?.error,
          description: error?.message
        });
      },
  
      // eslint-disable-next-line no-unused-vars
      onSuccess(data: any, variables, context) {
        // Create Token cookie
        Cookies.set('token', data.token);
        Cookies.set('user', JSON.stringify(variables));
        
        router.replace(DASHBOARD_HOME);
      },
    }
  });

  const handleOnSubmit = (email: string, password: string) => {
    mutationQuery.mutate({
      email,
      password
    });
  };

  return {
    mutationQuery,
    handleOnSubmit,
  };
};

export default useLoginForm;