// styled
import styled from 'styled-components';

// antd
import { Card } from 'antd';

const CustomCard = styled(Card)<{ $padding?: string }>`
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
	overflow: hidden;

	& .ant-card-body {
		${(props) => (props.$padding ? `padding: ${props.$padding};` : '')}
	}
`;

export default CustomCard;
