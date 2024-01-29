import React from 'react';

// antd
import { Modal } from 'antd';
import type { ModalProps } from 'antd/es/modal';

// next

// image
// import CloseIcon from 'src/shared/images/close-button.png';

// styled
import styled from 'styled-components';

const StyledModal = styled(Modal)<{
	$isBorderBottom: boolean;
}>`
	& .ant-modal-content {
		padding-right: 18px !important;

		& .ant-modal-header {
			margin-bottom: 20px;
			padding-right: 6px !important;

			& .ant-modal-title {
				line-height: 1;
				padding-bottom: ${(props) => (props.$isBorderBottom ? '15px' : '0px')};
				border-bottom: ${(props) =>
    props.$isBorderBottom
      ? '1px solid var(--grey-line, #e2e1e6)'
      : 'none'};
			}
		}

		& .ant-modal-body {
			padding-top: 5px;
			padding-left: 1px;
			max-height: calc(90vh - 84px);
			padding-right: 6px !important;
			overflow-x: hidden;
			overflow-y: auto;

			/* scroll */
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

				background-clip: padding-box;
				padding: 0 4px;
			}
		}

		& .ant-modal-footer {
			height: 64px;
		}

		& .secondary-title {
			font-size: 20px;
			line-height: 20px;
			font-weight: 700;
			padding-bottom: 15px;
			border-bottom: 1px solid var(--grey-line, #e2e1e6);
			margin-bottom: 16px;
		}
	}
`;

type ModalComponentProps = {
	isBorderBottom?: boolean;
} & ModalProps;

const ModalComponent = ({
  isBorderBottom = true,
  ...props
}: ModalComponentProps) => {
  return (
    <StyledModal
      $isBorderBottom={isBorderBottom}
      width={1120}
      footer={null}
      centered={true}
      keyboard={false}
      maskClosable={false}
      {...props}
    >
      {props.children}
    </StyledModal>
  );
};

export default ModalComponent;
