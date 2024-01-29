import React from 'react';

// antd
import { Space } from 'antd';
import DynamicBreadcrumb from './DynamicBreadcrumb';
import AvatarHeader from './AvatarHeader';

const HeaderContentPrivateLayout = () => {
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 30px 10px 30px',
      }}
    >
      <DynamicBreadcrumb />

      <AvatarHeader />			
    </Space>
  );
};

export default HeaderContentPrivateLayout;
