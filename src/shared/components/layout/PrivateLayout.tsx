import { useState } from 'react';
import { Grid, Layout } from 'antd';
import SidebarPrivateLayout from './private-layout/SidebarPrivateLayout';
import FooterContentPrivateLayout from './private-layout/FooterContentPrivateLayout';
import HeaderContentPrivateLayout from './private-layout/HeaderContentPrivateLayout';
import styled from 'styled-components';

const { Content } = Layout;

const CustomLayout = styled(Layout)`
	background: #f8f8f8;
	min-height: 100vh;
`;

type Props = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const screens = Grid.useBreakpoint();
  const sideBarCollapseWidth = screens.lg ? 108 : 0; // nol membuat sidebar menghilang ketika di layar kecil

  return (
    <>
      <Layout hasSider>
        <SidebarPrivateLayout 
          collapsedWidth={sideBarCollapseWidth}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <CustomLayout>
          <Content style={{
            padding: 0,
            margin: 0,
            marginLeft: collapsed ? sideBarCollapseWidth : 260,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <HeaderContentPrivateLayout />

            <div style={{ padding: '20px 30px', minHeight: 'calc(100vh - 132px)' }}>
              {children}
            </div>

            <FooterContentPrivateLayout />
          </Content>
        </CustomLayout>

      </Layout>
    </>
  );
};

export default PrivateLayout;