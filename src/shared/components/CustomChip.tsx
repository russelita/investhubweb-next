import React from 'react';

// antd
import { Tag } from 'antd';
import type { TagProps } from 'antd/es/tag';

// style
import styled from 'styled-components';

// type
import { COLORS, ColorType } from '../styles/color';

const StyledTag = styled(Tag)<{ $color: string }>`
	padding: 7px 10px;
	border-radius: 16px;
	border: none;
	background: var(
		--status-purple-light,
		linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.88) 0%,
			rgba(255, 255, 255, 0.88) 100%
		),
		${(props) => props.$color}
	);
	color: ${(props) => props.$color};
`;

type CustomChipProps = {
	typeChip?: ColorType;
} & TagProps;

const CustomChip = ({
  children,
  typeChip = 'PRIMARY',
  ...props
}: CustomChipProps) => {
  return (
    <StyledTag {...props} $color={COLORS[typeChip]}>
      {children}
    </StyledTag>
  );
};

export default CustomChip;
