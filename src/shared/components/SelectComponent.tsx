import React, { forwardRef } from 'react';

// antd
import { Select } from 'antd';
import type { SelectProps } from 'antd/es/select';

// next

// styled
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';

// image
// import ArrowDown from 'src/shared/images/arrow-down.png';

const StyledSelect = styled.div<{ $isBold?: boolean }>`
	& .ant-select {
		& .ant-select-selection-item {
			font-weight: ${(props) => (props?.$isBold ? '500' : '400')};
		}

		& .ant-select-selector {
			padding-left: 0px !important;

			& span {
				inset-inline-start: 16px !important;
			}

			&:focus,
			&:active,
			&:focus-within {
				outline: 1px solid rgba(149, 87, 173, 1) !important;
			}
		}

		& .ant-input-prefix {
			margin-right: 12px;
		}

		box-shadow: none;

		& .ant-select-selection-placeholder {
			font-weight: 400;
			padding-left: 16px !important;
		}
	}

	&.ant-input-affix-wrapper-status-error:not(
			.ant-input-affix-wrapper-disabled
		):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
	&.ant-input-affix-wrapper-status-error:not(
			.ant-input-affix-wrapper-disabled
		):not(
			.ant-input-affix-wrapper-borderless
		).ant-input-affix-wrapper:focus-within {
		outline: 1px solid #ff4d4f !important;
	}

	& .filter-main {
		background-color: #fff;
		width: 100px;
		border-radius: 8px;

		& .ant-select-selector,
		input {
			height: 44px !important;
		}

		& .ant-select-selection-item {
			line-height: 44px !important;
		}
	}
`;

type SelectComponentType = {
	isBold?: boolean;
};

const SelectComponent = forwardRef(
  (
    { isBold = false, ...props }: SelectProps & SelectComponentType,
    ref: any,
  ) => {
    return (
      <StyledSelect $isBold={isBold}>
        <Select
          filterOption={(input, option) =>
            ((option?.label ?? '') as string)
              ?.toLowerCase()
              ?.includes(input?.toLowerCase())
          }
          suffixIcon={<DownOutlined />}
          // suffixIcon={
          // 	<Image
          // 		src={ArrowDown}
          // 		alt="arrow-down-select"
          // 		width={16}
          // 		height={16}
          // 		quality={100}
          // 		style={{ pointerEvents: 'none' }}
          // 	/>
          // }
          virtual={false}
          {...props}
          ref={ref}
        >
          {props.children}
        </Select>
      </StyledSelect>
    );
  },
);

SelectComponent.displayName = 'SelectComponent';

export default SelectComponent;
