import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
  font-size: 8px;

  scrollbar-color: #bebfcf #f8f8f8;
	scrollbar-width: thin;
	&::-webkit-scrollbar {
		width: 0.8vw;
		height: 0.8vw;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #bebfcf;
		border-radius: 4px;
	}
	&::-webkit-scrollbar-track {
		background-color: #f8f8f8;
	}
}

* {
  padding: 0;
  margin: 0;
}

/* dummy logo */
/* .demo-logo-vertical {
  height: 25px;
  margin-inline: 16px;
  background: #f8f0ff;
  width: 100%;
  border-radius: 6px;
} */

 /* side collapse popup style */
& .ant-menu.ant-menu-sub.ant-menu-vertical {
	max-height: 300px !important;

	& .ant-menu-item, .ant-menu-submenu-title {
		display: flex;

		& img {
			display: none !important
		}

		& span, p {
			margin-inline-start: 0 !important;
		}
	}
}

/* dropdown notif */
& .notif-bropdown {
	min-width: 300px !important;
}

/* scroll select dropdown */
& .rc-virtual-list-holder {
		scrollbar-color: #bebfcf #f8f8f8;
		scrollbar-width: thin;

		&::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #6e6e6e;
			border-radius: 3px;
		}
		&::-webkit-scrollbar-track {
			background-color: #d9d9d9;
		}
}
`;

export default GlobalStyles;
