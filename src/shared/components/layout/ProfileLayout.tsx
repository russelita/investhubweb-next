import Navbar from "@/shared/components/layout/dashboard-layout/Navbar";
import { Grid, Layout } from "antd";
import { useState } from "react";
import styled from "styled-components";
import SiderLayoutAuth from "./auth-layout/sider";

const { Content } = Layout;

const CustomLayout = styled(Layout)`
  background: #f8f8f8;
  min-height: 100vh;
`;

type Props = {
  children: React.ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const screens = Grid.useBreakpoint();
  const sideBarCollapseWidth = screens.lg ? 108 : 0; // nol membuat sidebar menghilang ketika di layar kecil

  return (
    <>
    <Navbar />
      <Layout>
        <Layout.Content>
          <div
            style={{ minHeight: "calc(100vh - 132px)" }}
          >
            {children}
          </div>
        </Layout.Content>

        <Layout.Sider width={600} style={{ backgroundColor: "transparent" }}>
          <SiderLayoutAuth button={false} />
        </Layout.Sider>
      </Layout>
    </>
  );
};

export default ProfileLayout;
