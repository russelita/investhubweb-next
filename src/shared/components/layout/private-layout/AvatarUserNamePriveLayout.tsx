import React from 'react';

// antd
import { Avatar, Space, Spin, Typography, theme } from 'antd';

// hooks
// import useStore from 'src/shared/hooks/useStore';
// import useGetProfilePicture from 'src/features/user-profile/user-profile/hooks/useGetProfilePicture';

type AvatarUserNamePriveLayoutProps = {
	isSidebarCollapsed: boolean;
};

const AvatarUserNamePriveLayout = ({
  isSidebarCollapsed,
}: AvatarUserNamePriveLayoutProps) => {
  // theme
  const {
    token: { colorTextSecondary },
  } = theme.useToken();

  // hooks
  // const {
  // 	state: { user },
  // } = useStore();

  // api
  // const { isLoading, userProfilePicture } = useGetProfilePicture();

  return (
    <Space
      direction="horizontal"
      size={16}
      align="center"
      style={{
        display: 'flex',
        marginTop: '24px',
        marginBottom: '10px',
        paddingLeft: isSidebarCollapsed ? '12px' : 0,
        transition: 'all 0.5s ease',
        padding: isSidebarCollapsed ? '8px' : '10px',
      }}
    >
      <Spin spinning={false /** isLoading */}>
        <Avatar
          size={40}
          alt="avatar-sider-menu"
          // {...(userProfilePicture ? { src: userProfilePicture } : {})}
          src={'https://dummyimage.com/40x40/67348D/fff&text=Pic'}
        >
          {/* {(user?.name as string)?.charAt(0)} */}
					SA
        </Avatar>
      </Spin>

      {isSidebarCollapsed ? null : (
        <Space direction="vertical" size={0}>
          <Typography.Title level={5} style={{ margin: 0 }}>
            {/* {user?.name} */}
						Superadmin
          </Typography.Title>

          <Typography.Text style={{ color: colorTextSecondary }}>
            {/* {user?.role_name} */}
						Admin
          </Typography.Text>
        </Space>
      )}
    </Space>
  );
};

export default AvatarUserNamePriveLayout;
