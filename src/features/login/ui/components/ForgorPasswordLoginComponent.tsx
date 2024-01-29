import React from 'react';

// antd
import { Typography } from 'antd';

// next
import { useRouter } from 'next/router';

// path-url
// import { AUTH_FORGOT_PASSWORD_URL } from 'src/shared/constants/path';

const ForgorPasswordLoginComponent = () => {
  // router
  const router = useRouter();

  // func
  const hanleToForgotPassword = () => {
    router.push({
      pathname: '/auth/forgot-password',
    });
  };
  return (
    <Typography
      style={{
        color: '#6418C3',
        fontWeight: 700,
        textAlign: 'right',
      }}
    >
      <span
        style={{
          cursor: 'pointer',
          width: 'fit-content',
          height: 'fit-content',
        }}
        onClick={hanleToForgotPassword}
      >
				Forgot Password
      </span>
    </Typography>
  );
};

export default ForgorPasswordLoginComponent;
