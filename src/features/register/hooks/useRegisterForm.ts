import useMutationHook from "@/shared/hooks/useMutationHook";
import { useRouter } from 'next/router';
import { DASHBOARD_EMAIL_CONFIRM, DASHBOARD_LOGIN } from '@/shared/constants/path';
import { notification } from 'antd';
import { register } from '@/shared/api/mutation/register';

const useRegisterForm = () => {
  const router = useRouter();

  const mutationQuery = useMutationHook({
    api: register,
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
        notification.success({
          message: 'Berhasil registrasi. Silahkan Login',
        });

        router.replace(DASHBOARD_EMAIL_CONFIRM);
      },
    }
  });

  const handleOnSubmit = (name: string, email: string, password: string, password_confirmation: string) => {
	  mutationQuery.mutate({
      name,
      email,
      password,
      password_confirmation,
    });
  };

  return {
    mutationQuery,
    handleOnSubmit,
  };
};

export default useRegisterForm;