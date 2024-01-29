import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import styled from "styled-components";
import MenuSideMenuPrivateLayout from "./MenuSideMenuPrivateLayout";
import { COLORS } from "@/shared/styles/color";
import Image from "next/image";
import AvatarUserNamePriveLayout from "./AvatarUserNamePriveLayout";

const CustomSider = styled(Layout.Sider)`
	scrollbar-color: #bebfcf #f8f8f8;
	scrollbar-width: thin;
	&::-webkit-scrollbar {
		width: 0.5vw;
		height: 0.5vw;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #bebfcf;
		border-radius: 0px;
	}
	&::-webkit-scrollbar-track {
		background-color: #f8f8f8;
	}
`;

const SidebarPrivateLayout = ({ collapsedWidth, collapsed, setCollapsed }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <CustomSider
      width={260}
      style={{
        background: colorBgContainer,
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
        padding: '20px 0px 10px 25px',
        userSelect: 'none',
      }}
      collapsible
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      trigger={null}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBlockEnd: '16px',
        marginInlineEnd: '16px',
      }}>
        {/* LOGO HERE */}
        {collapsed ? (
          <Image
            src={'https://dummyimage.com/35x35/67348D/fff&text=Dummy-Logo'}
            alt={'logo-cms'}
            width={35}
            height={35}
            quality={100}
          />
        ) : (
          <Image
            src={'https://dummyimage.com/160x40/67348D/fff&text=Dummy-Logo'}
            alt={'logo-cms'}
            width={160}
            height={40}
            quality={100}
          />
        )}

        {/* BUTTON COLLAPSE */}
        <span>
          <Button
            type="text"
            size="small"
            icon={collapsed ? <DoubleRightOutlined style={{ color: COLORS.PRIMARY }} /> : <DoubleLeftOutlined style={{ color: COLORS.PRIMARY }} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
            }}
          />
        </span>
      </div>

      <AvatarUserNamePriveLayout isSidebarCollapsed={collapsed} />

      {/* SIDE MENU */}
      <MenuSideMenuPrivateLayout />

    </CustomSider>
  );
};

export default SidebarPrivateLayout;