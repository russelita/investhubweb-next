import React from 'react';

// antd
import { Typography, Space, theme } from 'antd';

const TextWelcomeLogin = () => {
  // theme
  const {
    token: { colorTextSecondary },
  } = theme.useToken();

  return (
    <Space direction="vertical" size={0} style={{ display: 'flex' }}>
      <Typography.Title level={3} style={{ margin: 0 }}>
				Hi, welcome back👋
      </Typography.Title>

      <Typography.Text style={{ color: colorTextSecondary }}>
				Please enter your email and password
      </Typography.Text>
    </Space>
  );
};

export default TextWelcomeLogin;
