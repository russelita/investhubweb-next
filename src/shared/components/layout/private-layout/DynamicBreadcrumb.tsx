import { COLORS } from "@/shared/styles/color";
import { HomeFilled } from "@ant-design/icons";
import { Breadcrumb, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const DynamicBreadcrumb = () => {
  const router = useRouter();

  const currentPath = router.pathname;

  // Split rute saat ini menjadi array
  const pathSegments = currentPath.split('/').filter((segment) => segment !== '');

  // Membuat daftar breadcrumb
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const segmentDesc = segment.split('-').join(' ');
    const segmentWithCapitalize = segmentDesc.at(0)?.toUpperCase() + segmentDesc.slice(1);

    const pathToThisPoint = `/${pathSegments.slice(0, index + 1).join('/')}`;

    if (segmentDesc === 'dashboard') {
      return null;
    }

    return (
      <Breadcrumb.Item key={pathToThisPoint}>
        <Link href={pathToThisPoint}>
          <Typography.Text>{segmentWithCapitalize}</Typography.Text>
        </Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb>
      <Breadcrumb.Item key='dashboard'>
        <Link href='/dashboard'>
          <HomeFilled style={{ 
            color: COLORS.PRIMARY,
            fontSize: 21,
          }} />
          {' '}
          {router.pathname === '/dashboard' ? (
            <Typography.Text>Dashboard</Typography.Text>
          ) : null}
        </Link>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
