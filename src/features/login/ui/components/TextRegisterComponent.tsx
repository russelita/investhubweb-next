import { Typography } from "antd";
import Link from "next/link";

const TextRegisterComponent = () => {
  return (
    <Typography
      style={{
        color: '#6418C3',
        textAlign: 'right',
      }}
    >
      Don&apos;t have an account yet?
      {' '}
      <Link href={'/auth/register'} style={{ color: '#6418C3', fontWeight: 'bold' }}>
        Register
      </Link>
    </Typography>
  );
};

export default TextRegisterComponent;