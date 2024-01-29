import { Typography } from "antd";
import Link from "next/link";

const TextLoginComponent = () => {
  return (
    <Typography
      style={{
        color: '#6418C3',
        textAlign: 'right',
      }}
    >
      Already have an account? 
      {' '}
      <Link href={'/auth/login'} style={{ color: '#6418C3', fontWeight: 'bold' }}>
        Login
      </Link>
    </Typography>
  );
};

export default TextLoginComponent;