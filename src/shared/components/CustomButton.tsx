import React from 'react';

// antd
import { Button, ButtonProps } from 'antd';

// styled
import styled from 'styled-components';

// next

// image
// import AddIcon from 'src/shared/images/button/add.png';
// import DownloadIcon from 'src/shared/images/button/download.png';
// import FilterIcon from 'src/shared/images/button/filter.png';
// import SearchIcon from 'src/shared/images/button/search.png';
import { DownloadOutlined, FilterOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { COLORS, ColorType } from '../styles/color';

const StyledButton = styled(Button) <{
	$typeButton?: string;
	$isStrong?: boolean;
	$outlineColor?: string;
	$isInverted?: boolean;
}>`
	background: ${(props) =>
    props.$typeButton === 'danger'
      ? '#DC3545'
      : 'radial-gradient(76.32% 76.32% at 95.23% 6.02%, #9358AF 0%, #7E5AC6 54.71%, rgba(142, 80, 220, 0.00) 100%), linear-gradient(72deg, #9A57A7 0%, rgba(106, 103, 227, 0.00) 100%), radial-gradient(45.63% 45.63% at 35.11% -11.02%, #7936AE 0%, rgba(95, 34, 143, 0.00) 100%), radial-gradient(156.61% 80.36% at 94.32% 94.43%, rgba(123, 83, 184, 0.78) 0%, rgba(124, 92, 199, 0.78) 32.29%, rgba(145, 105, 208, 0.37) 64.06%, rgba(105, 43, 205, 0.00) 100%), linear-gradient(313deg, #9557AD 0%, #604AEA 100%)'};
	font-weight: ${(props) => (props.$isStrong ? '700' : '400')};
	position: relative;
	box-shadow: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 10px 20px;
	line-height: 16px !important;

	&:hover {
		background: ${(props) =>
    props.$typeButton === 'danger'
      ? '#DC3545 !important'
      : 'radial-gradient(76.32% 76.32% at 95.23% 6.02%, #9358AF 0%, #7E5AC6 54.71%, rgba(142, 80, 220, 0.00) 100%), linear-gradient(72deg, #9A57A7 0%, rgba(106, 103, 227, 0.00) 100%), radial-gradient(45.63% 45.63% at 35.11% -11.02%, #7936AE 0%, rgba(95, 34, 143, 0.00) 100%), radial-gradient(156.61% 80.36% at 94.32% 94.43%, rgba(123, 83, 184, 0.78) 0%, rgba(124, 92, 199, 0.78) 32.29%, rgba(145, 105, 208, 0.37) 64.06%, rgba(105, 43, 205, 0.00) 100%), linear-gradient(313deg, #9557AD 0%, #604AEA 100%)'};
	}

	&.secondary-button {
		&::before {
			content: '';
			position: absolute;
			top: 0.5px;
			left: 0.5px;
			width: calc(100% - 1px);
			height: calc(100% - 0.5px);
			border-radius: 9px;
			background-color: #fff;
			z-index: 1;
		}

		& span {
			z-index: 2;
			position: relative;
			line-height: 1;

			/* Gradient/Avrist Light */
			background: radial-gradient(
						62.61% 62.61% at 95.23% 6.02%,
						#9358af 0%,
						#7e5ac6 54.71%,
						rgba(142, 80, 220, 0) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
				linear-gradient(72.48deg, #9a57a7 2.61%, rgba(106, 103, 227, 0) 56.18%),
				radial-gradient(
						45.23% 45.23% at 35.11% -11.02%,
						#7936ae 0%,
						rgba(95, 34, 143, 0) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
				radial-gradient(
						94.51% 124.88% at 94.32% 94.43%,
						rgba(123, 83, 184, 0.78) 0%,
						rgba(124, 92, 199, 0.78) 32.29%,
						rgba(145, 105, 208, 0.3666) 64.06%,
						rgba(105, 43, 205, 0) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
				linear-gradient(313.04deg, #9557ad 0.93%, #604aea 125.68%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	&.outline-button {
		background: ${(props) =>
    props.$outlineColor
      ? props.$isInverted
        ? '#fff'
        : props.$outlineColor
      : '#fff'};
		border: ${(props) =>
    props.$outlineColor
      ? props.$isInverted
        ? `1px solid ${props.$outlineColor}`
        : 'none'
      : '1px solid #e2e1e6'};
		color: ${(props) =>
    props.$outlineColor
      ? props.$isInverted
        ? props.$outlineColor
        : '#fff'
      : '#212121'};
		font-weight: ${(props) => (props.$outlineColor ? '700' : '400')};

		&:hover {
			background: ${(props) =>
    props.$outlineColor
      ? props.$isInverted
        ? '#fff'
        : props.$outlineColor
      : '#fff'} !important;
			color: ${(props) =>
    props.$outlineColor
      ? props.$isInverted
        ? props.$outlineColor
        : '#fff'
      : '#212121'} !important;
		}
	}

	&.button-border-white {
		border: 1px solid #fff;
		background: transparent;

		&:hover {
			background: transparent !important;
		}
	}

	&.button-bg-white-primary {
		background: #fff;

		& span {
			z-index: 2;
			position: relative;
			line-height: 1 !important;
			vertical-align: middle;

			/* Gradient/Avrist Light */
			background: radial-gradient(
						62.61% 62.61% at 95.23% 6.02%,
						#9358af 0%,
						#7e5ac6 54.71%,
						rgba(142, 80, 220, 0) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
				linear-gradient(72.48deg, #9a57a7 2.61%, rgba(106, 103, 227, 0) 56.18%),
				radial-gradient(
						45.23% 45.23% at 35.11% -11.02%,
						#7936ae 0%,
						rgba(95, 34, 143, 0) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
				radial-gradient(
						94.51% 124.88% at 94.32% 94.43%,
						rgba(123, 83, 184, 0.78) 0%,
						rgba(124, 92, 199, 0.78) 32.29%,
						rgba(145, 105, 208, 0.3666) 64.06%,
						rgba(105, 43, 205, 0) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
				linear-gradient(313.04deg, #9557ad 0.93%, #604aea 125.68%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}

		&:hover {
			background: #fff !important;
		}
	}

	&.button-bg-red-primary {
		background: var(
			--status-red-light,
			linear-gradient(
				0deg,
				rgba(255, 255, 255, 0.88) 0%,
				rgba(255, 255, 255, 0.88) 100%
			),
			#dc3546
		);
		filter: drop-shadow(1px 1px 3px rgba(0,0,0,0.25));

		& span {
			z-index: 2;
			position: relative;
			line-height: 1 !important;
			vertical-align: middle;

			-webkit-background-clip: text;
			-webkit-text-fill-color: #dc3546;
			background-clip: text;
		}

		&:hover {
			background: var(
				--status-red-light,
				linear-gradient(
					0deg,
					rgba(255, 255, 255, 0.88) 0%,
					rgba(255, 255, 255, 0.88) 100%
				),
				#dc3546
			) !important;
			filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.5));
		}
	}

	&.button-bg-blue-primary {
		background: var(
			--status-blue-light,
			linear-gradient(
				0deg,
				rgba(255, 255, 255, 0.9) 0%,
				rgba(255, 255, 255, 0.9) 100%
			),
			#2e65f3
		);

		& span {
			z-index: 2;
			position: relative;
			line-height: 1 !important;
			vertical-align: middle;

			-webkit-background-clip: text;
			-webkit-text-fill-color: #2e65f3;
			background-clip: text;
		}

		&:hover {
			background: var(
				--status-blue-light,
				linear-gradient(
					0deg,
					rgba(255, 255, 255, 0.9) 0%,
					rgba(255, 255, 255, 0.9) 100%
				),
				#2e65f3
			);
		}
	}

	&.button-bg-green-primary {
		background: var(
			--status-green-light,
			linear-gradient(
				0deg,
				rgba(255, 255, 255, 0.9) 0%,
				rgba(255, 255, 255, 0.9) 100%
			),
			#249f5d
		);
		filter: drop-shadow(1px 1px 3px rgba(0,0,0,0.25));

		& span {
			z-index: 2;
			position: relative;
			line-height: 1 !important;
			vertical-align: middle;

			-webkit-background-clip: text;
			-webkit-text-fill-color: #249f5d;
			background-clip: text;
		}

		&:hover {
			background: var(
				--status-green-light,
				linear-gradient(
					0deg,
					rgba(255, 255, 255, 0.9) 0%,
					rgba(255, 255, 255, 0.9) 100%
				),
				#249f5d
			) !important;
			filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.5));
		}
	}

	& .ant-btn-icon {
		margin-inline-end: 0px !important;
	}

	& span {
		vertical-align: middle;
	}

	& button div {
		display: none !important;
	}
`;

type CustomButtonProps = {
	typeButton?:
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'add'
	| 'download'
	| 'filter'
	| 'search'
	| 'outline';
	isStrong?: boolean;
	outlineType?: ColorType;
	isInverted?: boolean;
};

const CustomButton = ({
  typeButton = 'primary',
  isStrong = true,
  outlineType,
  isInverted = false,
  ...props
}: ButtonProps & CustomButtonProps) => {
  return (
    <StyledButton
      type="primary"
      $typeButton={typeButton}
      $isStrong={isStrong}
      $outlineColor={outlineType ? COLORS[outlineType] : ''}
      $isInverted={isInverted}
      className={`${typeButton === 'secondary'
        ? 'secondary-button'
        : ['filter', 'search', 'outline'].includes(typeButton)
          ? 'outline-button'
          : ''
      } ${props?.className || ''}`}
      icon={
        ['add', 'download', 'filter', 'search'].includes(typeButton) ?
          typeButton === 'add'
            ? <PlusOutlined />
            : typeButton === 'filter'
              ? <FilterOutlined />
              : typeButton === 'search'
                ? <SearchOutlined />
                : <DownloadOutlined /> : null
      }
      {...props}
    >
      {typeButton === 'filter' ? 'Filter' : props.children}
    </StyledButton>
  );
};

export default CustomButton;
