import { FETCH_USERS } from '@/shared/constants/endpoint';
import { deleteData, postData, putData } from '@/shared/utils/http/axiosHelper';

const saveUser = async (data: any) => {
  const res = await postData({
    endpoint: FETCH_USERS(),
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

const updateUser = async ({ data, id }: { data: any, id: number }) => {
  const res = await putData({
    endpoint: FETCH_USERS(`/${id}`),
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

const deleteUser = async (id: number) => {
  const res = await deleteData({
    endpoint: FETCH_USERS(`/${id}`)
  });
  return res?.data;
};

export { 
  saveUser,
  updateUser,
  deleteUser,
};
