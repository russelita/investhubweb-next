import { useRouter } from "next/router";
import { storageRemove } from "@/shared/utils/clientStorageUtils";
import { DASHBOARD_LOGIN } from "../constants/path";

const useLogoutUser = () => {
  const router = useRouter();

  // func
  const handleSignout = () => {
    storageRemove('user');
    storageRemove('token');

    router.push(DASHBOARD_LOGIN);
  };

  return {
    handleSignout
  };
};

export default useLogoutUser;
