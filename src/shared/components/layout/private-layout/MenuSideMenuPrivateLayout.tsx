import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { HomeOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styled from "styled-components";

const CustomMenus = styled(Menu)`
	padding-bottom: 20px;

	& li,
	li div {
		margin: 0 !important;
		outline: none !important;
	}

	& li.ant-menu-item,
	.ant-menu-submenu-title,
	.ant-menu-item-selected,
	.ant-menu-submenu-selected .ant-menu-submenu-title {
		height: fit-content;
		width: calc(100% + 1px);

		& .ant-menu-title-content {
			margin-inline-start: 16px !important;
			margin-right: 16px;
		}

		&:not(.ant-menu-item-only-child) {
			padding: 8px 16px !important;
		}
	}

	& .ant-menu-submenu.ant-menu-submenu-inline .ant-menu-submenu-title {
		min-height: 48px !important;
	}

	&.ant-menu-root > li.ant-menu-item,
	ul.ant-menu.ant-menu-sub .ant-menu-item {
		padding-block: 4px !important;
	}

	&.ant-menu-inline-collapsed {
		& li.ant-menu-item,
		.ant-menu-submenu-title,
		.ant-menu-item-selected {
			padding: 4px 16px !important;
		}

		& .ant-menu-item-group-title {
			color: #fff;
			position: relative;
			height: 10px;
			margin-top: -5px !important;
			margin-bottom: 5px !important;

			&:before {
				content: ' ';
				position: absolute;
				top: 50%;
				left: 10px;
				width: 38px;
				height: 2px;
				background: #e2e1e6;
			}
		}

		& li.ant-menu-item-selected,
		.ant-menu-submenu-selected > .ant-menu-submenu-title {
			&:not(.ant-menu-item-selected.ant-menu-item-only-child) {
				padding: 20px 16px 10px !important;
			}
		}
	}

	&.ant-menu-root > li.ant-menu-item-selected,
	&.ant-menu-root > .ant-menu-submenu-selected > .ant-menu-submenu-title {
		color: #6418c3;

		& img {
			filter: /* invert(40%) sepia(77%) saturate(270%) hue-rotate(208deg)
				brightness(96%) contrast(205%) */ invert(
					24%
				)
				sepia(36%) saturate(246%) hue-rotate(238deg) brightness(97%)
				contrast(97%);
		}

		&:not(.ant-menu-item-selected.ant-menu-item-only-child) {
			background: #f8f8f8;
			border-radius: 35% 0px 0px 35%;
			padding: 20px 16px !important;

			&:hover {
				color: #6418c3;
				background: #666cff0d;
			}

			&:before {
				content: ' ';
				position: absolute;
				top: 0;
				left: 0;
				width: calc(100% - 1px);
				height: 12px;
				background: #fff;
				z-index: 20;
				border-radius: 0px 0px 20px 0px;
			}

			&:after {
				content: ' ';
				position: absolute;
				bottom: 0;
				left: 0;
				width: calc(100% - 1px);
				height: 12px;
				background: #fff;
				z-index: 20;
				margin-top: 68px;
				border-radius: 0px 20px 0px 0px;
			}
		}
	}

	& .ant-menu-item-only-child .point,
	& ul.ant-menu-sub > .ant-menu-submenu > .ant-menu-submenu-title .point {
		/* padding: 0px 16px !important; */
		/* margin-inline-start: -40px !important; */

		background: transparent;

		& span {
			height: fit-content;
		}

		&:before {
			content: '•';
			color: rgba(110, 110, 110, 1);
			/* margin-inline-start: 8px; */
			margin-inline-end: 16px;
		}

		/* &:hover {
			background: #0000000f;
		} */
	}

	&
		ul.ant-menu-sub
		> .ant-menu-submenu.ant-menu-submenu-selected
		> .ant-menu-submenu-title:hover {
		color: #6418c3;
		background: #666cff0d;
	}

	/* & ul.ant-menu-sub > .ant-menu-submenu > .ant-menu-submenu-title::before {
		margin-inline-start: 16px;
	} */

	& .ant-menu-item-selected.ant-menu-item-only-child .point:before,
	.ant-menu-submenu-selected > .ant-menu-submenu-title .point:before {
		content: '•';
		scale: 1.4;
		color: #6418c3 !important;
	}

	& .ant-menu-inline {
		background: transparent !important;
	}

	& .ant-menu-item-group-title {
		text-transform: capitalize;
		color: #212121;
		font-weight: 700;
		padding: 10px;
	}

	& .ant-menu-submenu-arrow {
		transform: rotate(-90deg);

		&:before {
			height: 1px;
		}

		&:after {
			height: 1px;
		}
	}

	&.ant-menu
		.ant-menu-submenu-open.ant-menu-submenu-inline
		> .ant-menu-submenu-title
		> .ant-menu-submenu-arrow {
		rotate: 180deg;
		margin-right: 6px;
	}
  
	/* & .ant-menu-item-only-child,
	ul.ant-menu-sub > .ant-menu-submenu > .ant-menu-submenu-title,
	.ant-menu-item {
		padding-left: 0px !important;
	} */

	& .ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child:hover,
	ul.ant-menu-sub li.ant-menu-item.ant-menu-item-selected:hover {
		background: #666cff0d;
	}

	/* collapse menu */
	&.ant-menu-vertical {
		& .ant-menu-item {
			line-height: 20px !important;
		}

		& .ant-menu-submenu-title {
			display: flex;
			flex-wrap: wrap;
		}

		& .ant-menu-title-content {
			display: none !important;
		}
	}
`;

/**
 * MENU ITEMS
 */
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href='/dashboard'>Dashboard</Link>, '/dashboard', <Link href='/dashboard'><HomeOutlined /></Link>),
  getItem(<Link href='/users'>Users</Link>, '/users', <Link href='/users'><UserOutlined /></Link>),
  getItem('Color Group', '/user-group', <Link href={''}><UsergroupAddOutlined /></Link>, [
    getItem(<Link href='/colors'>Colors</Link>, '/colors'),
    getItem('Red', '4'),
    getItem('Blue', '5'),
  ]),
  // getItem('Master Data', 'master-data', null, [
  //   // getItem(<Link href='/colors'>Colors</Link>, '/colors', <GiftOutlined />),
  //   getItem(<Link href='/users'>Users</Link>, '/users', <UserOutlined />),
  //   getItem('User Group', '/user-group', <UsergroupAddOutlined />, [
  //     getItem(<Link href='/colors'>Colors</Link>, '/colors', <GiftOutlined />),
  //     getItem('Bill', '4'),
  //     getItem('Alex', '5'),
  //   ]),
  // ], 'group'),
];

const MenuSideMenuPrivateLayout = () => {
  const router = useRouter();

  return (
    <CustomMenus
      defaultSelectedKeys={['colors']}
      selectedKeys={[router.pathname]} // menu actived by pathname
      mode="inline"
      inlineIndent={12}
      items={items}
      defaultOpenKeys={['users']} />
  );
};

export default MenuSideMenuPrivateLayout;