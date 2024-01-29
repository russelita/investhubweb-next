import { useState } from 'react';
import { Grid, Layout } from 'antd';
import SidebarPrivateLayout from './private-layout/SidebarPrivateLayout';
import FooterContentPrivateLayout from './private-layout/FooterContentPrivateLayout';
import HeaderContentPrivateLayout from './private-layout/HeaderContentPrivateLayout';
import styled from 'styled-components';
import Navbar from '@/shared/components/layout/dashboard-layout/Navbar';

const { Content } = Layout;

const CustomLayout = styled(Layout)`
	background: #f8f8f8;
	min-height: 100vh;
`;

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const screens = Grid.useBreakpoint();
  const sideBarCollapseWidth = screens.lg ? 108 : 0; // nol membuat sidebar menghilang ketika di layar kecil

  return (
    <>
      <Layout>
        <CustomLayout>
          <Content>
            <Navbar />

            <div>
              {children}
            </div>

            <FooterContentPrivateLayout />
          </Content>
        </CustomLayout>

      </Layout>
    </>
  );
};

export default DashboardLayout;