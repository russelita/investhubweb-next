import { REGISTER } from '@/shared/constants/endpoint';
import { postData } from '@/shared/utils/http/axiosHelper';

const register = async (data: any) => {
  const res = await postData({
    endpoint: REGISTER,
    data,
    config: {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'X-custom-baru': 'valueCustomHeaders',
      },
    },
  });
  return res?.data;
};

export { register };
