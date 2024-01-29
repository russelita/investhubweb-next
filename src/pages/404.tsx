// antd
import { Typography } from 'antd';

// next
import ImageNext from 'next/image';
import { useRouter } from 'next/router';

// image
import Bg404Page from '@/shared/images/bg-404-page.svg';
import Text404Page from '@/shared/images/text-404-page.svg';

// helper
import CustomButton from '@/shared/components/CustomButton';
import HeadMeta from '@/shared/components/HeadMeta';
import { DASHBOARD_HOME } from '@/shared/constants/path';

// component

function Custom404() {
  // router
  const { push } = useRouter();

  // func
  const toDashboard = () => {
    push({
      pathname: DASHBOARD_HOME,
    });
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HeadMeta title="Page Not Found" />

      <ImageNext
        fill
        style={{ position: 'absolute', zIndex: 4, objectFit: 'cover' }}
        src={Bg404Page}
        alt="backgound-404-page"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,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"
      />

      <ImageNext
        alt="text-404-page"
        src={Text404Page}
        style={{ position: 'relative', zIndex: 5, marginLeft: '-50px' }}
      />

      <Typography.Title
        level={4}
        style={{
          position: 'relative',
          zIndex: 5,
          color: '#fff',
          marginTop: '-30px',
          fontSize: '20px',
        }}
      >
				oops, looks like you a wrong turn{' '}
      </Typography.Title>

      <CustomButton
        typeButton="outline"
        style={{
          position: 'relative',
          zIndex: 4,
          background: 'transparent',
          borderColor: '#fff',
          color: '#fff',
          marginTop: '20px',
          fontWeight: 700,
        }}
        onClick={toDashboard}
      >
				Back
      </CustomButton>
    </div>
  );
}

export default Custom404;
