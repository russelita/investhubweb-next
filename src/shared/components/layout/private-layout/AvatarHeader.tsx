import { storageCheck } from "@/shared/utils/clientStorageUtils";
import useLogoutUser from "@/shared/hooks/useLogoutUser";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Spin, Typography } from "antd";
import { useMemo } from "react";

const AvatarHeader = () => {
  const {
    handleSignout
  } = useLogoutUser();

  const items: MenuProps['items'] = useMemo(() => {
    const signout_ = [
      {
        label: (
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              padding: '5px',
            }}
            onClick={() => {
              handleSignout();
              // setIsDropdownOpen(false);
            }}
          >
            <LogoutOutlined />
	
            <Typography.Text>Logout</Typography.Text>
          </div>
        ),
        key: 'signout',
      },
    ];

    if (storageCheck('user')) {
      const items_ = [
        {
          label: (
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding: '5px',
              }}
              onClick={() => alert('account')}
            >
              <UserOutlined />
              <Typography.Text>{storageCheck('user').email}</Typography.Text>
            </div>
          ),
          key: 'account',
        },
      ];

      return [...items_, { type: 'divider' }, ...signout_];
    }

    return [...signout_];
  }, [handleSignout]);

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      // onOpenChange={onOpenDropdown}
      // open={isDropdownOpen}
    >
      <Spin spinning={false}>
        <Avatar
          size={42}
          alt="avatar-sider-menu"
          style={{ cursor: 'pointer' }}

          // {...(userProfilePicture ? { src: userProfilePicture } : {})}
        >
          {/* {(user?.name as string)?.charAt(0)} */}
						UR
        </Avatar>
      </Spin>
    </Dropdown>
  );
};

export default AvatarHeader;