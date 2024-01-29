import React, { useMemo } from 'react';

// antd
import { Space, Typography, theme } from 'antd';

// hooks
// import useNameMenu from '../hooks/useNameMenu';

// next
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CustomButton from '../CustomButton';
import ButtonInputComponent, {
  ButtonInputComponentProps,
} from '../ButtonInputComponent';
import FilterStatusMain from '../FilterStatusMain';

type TypeTitle1 = {
	title?: string;
	description: string;
};

type downloadArr = {
	title: string;
	func: () => void;
	isLoading?: boolean;
};

type hiddenDownloadRefType = {
	ref: any;
}

type MainTitlePageProps = {
	typeTitle?: 1 | 2;
	title1?: TypeTitle1;
	title2?: string;
	filter?: React.ReactNode;
	actionComponent?: React.ReactNode;
	search?: (() => void) | ButtonInputComponentProps;
	add?: () => void;
	addTitle?: string;
	addIcon?: boolean;
	addLoading?: boolean;
	downloadArr?: downloadArr[];
	hiddenDownloadRef?: hiddenDownloadRefType;
	download?: () => void;
	downloadTitle?: string;
	type2Func?: () => void;
	// eslint-disable-next-line no-unused-vars
	filterStatus?: (e: any) => void;
};

const MainTitlePage = ({
  typeTitle = 1,
  title1,
  title2,
  add,
  addTitle,
  addIcon = true,
  addLoading = false,
  filter,
  search,
  downloadArr,
  hiddenDownloadRef,
  download,
  downloadTitle,
  type2Func,
  actionComponent,
  filterStatus,
}: MainTitlePageProps) => {
  // router
  const { pathname, push } = useRouter();

  // theme
  const {
    token: { colorTextSecondary },
  } = theme.useToken();

  // hooks
  // const { nameMenu } = useNameMenu();

  // memo
  const defaultTitle = useMemo(() => {
    const path_ = pathname?.split('/');

    return path_[path_.length - 1]
      ?.replace(/-/g, ' ')
      ?.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  }, [pathname]);

  // func
  const handleBackType2 = () => {
    const pathname_ = pathname.split('/');
    const regex = new RegExp(`\/${pathname_[pathname_.length - 1]}$`, 'i');

    push({
      pathname: pathname.replace(regex, ''),
    });
  };

  return (
    <Space
      direction="horizontal"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 0px',
      }}
    >
      {typeTitle === 1 ? (
        <Space direction="vertical" size={8} style={{ display: 'flex' }}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            {/* {title1?.title ? title1?.title : nameMenu || defaultTitle} */}
            {title1?.title ? title1?.title : defaultTitle}
          </Typography.Title>

          {title1?.description ? (
            <Typography.Text style={{ color: colorTextSecondary }}>
              {title1?.description}
            </Typography.Text>
          ) : null}
        </Space>
      ) : null}

      {typeTitle === 2 ? (
        <Space
          direction="horizontal"
          align="center"
          size={40}
          style={{
            display: 'flex',
            cursor: 'pointer',
            width: 'fit-content',
            userSelect: 'none',
            textTransform: 'capitalize',
          }}
          onClick={type2Func ? type2Func : handleBackType2}
        >
          <ArrowLeftOutlined
            rev={'icon'}
            style={{ fontSize: '18px', marginTop: '-2px' }}
          />

          <Typography.Title level={3} style={{ margin: 0 }}>
            {title2 ? title2 : defaultTitle}
            {/* {title2 ? title2 : nameMenu || defaultTitle} */}
          </Typography.Title>
        </Space>
      ) : null}

      <Space direction="horizontal" size={12}>
        {downloadArr
          ? downloadArr.map((v, i) => (
            <CustomButton typeButton="download" onClick={v.func} key={i} loading={v.isLoading}>
              {v.title}
            </CustomButton>
          ))
          : null}

        {hiddenDownloadRef ? (
          <a hidden ref={hiddenDownloadRef.ref}></a>
        ) : null}

        {search ? (
          <ButtonInputComponent
            onSearch={typeof search === 'function' ? search : search?.onSearch}
            placeholder={
              typeof search === 'function' ? '' : search?.placeholder
            }
          />
        ) : null}

        {filterStatus ? (
          <FilterStatusMain onChangeStatus={filterStatus} />
        ) : null}

        {filter ? <CustomButton typeButton="filter" /> : null}

        {add ? (
          <CustomButton
            typeButton={addIcon ? 'add' : 'primary'}
            onClick={add}
            loading={addLoading}
          >
            {addTitle ? addTitle : `New`}
          </CustomButton>
        ) : null}

        {download ? (
          <CustomButton typeButton="download" onClick={add}>
            {downloadTitle ? downloadTitle : `Download`}
          </CustomButton>
        ) : null}

        {actionComponent ? actionComponent : null}
      </Space>
    </Space>
  );
};

export default MainTitlePage;
