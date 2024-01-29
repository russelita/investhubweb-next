import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { checkIsAuthRoute, checkIsPrivateRoute, checkIsProfileRoute } from "@/shared/utils/route";
import AuthLayout from "./AuthLayout";
import ProfileLayout from './ProfileLayout';
import DashboardLayout from './DashboardLayout';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const token = Cookies.get('token');
  const isProfileUpdated = Cookies.get('isProfileUpdated');

  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  if (checkIsPrivateRoute(router.route)) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  if (checkIsAuthRoute(router.route)) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  if(checkIsProfileRoute(router.route)){
    return <ProfileLayout>{children}</ProfileLayout>
  }

  return <>{children}</>;
};

export default Layout;