import { Layout } from "antd";
import ContentLayoutAuth from "./auth-layout/content";
import SiderLayoutAuth from "./auth-layout/sider";

type AuthLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <Layout>
      <Layout.Content>
        <ContentLayoutAuth>{props.children}</ContentLayoutAuth>
      </Layout.Content>

      <Layout.Sider width={600} style={{ backgroundColor: "transparent" }}>
        <SiderLayoutAuth button={true}/>
      </Layout.Sider>
    </Layout>
  );
};

export default AuthLayout;
