import React from 'react';

// antd
import { Space, Typography } from 'antd';

// component
import ModalComponent from './ModalComponent';
import CustomButton from './CustomButton';

type ModalConfirmationDeleteProps = {
	isOpen: boolean;
	// eslint-disable-next-line no-unused-vars
	onClose: (is_confirm: boolean) => void;
	title: any;
	typeModal?: 'error' | 'refresh';
};

const ModalConfirmationDelete = ({
  isOpen,
  onClose,
  title,
  typeModal = 'error',
}: ModalConfirmationDeleteProps) => {
  return (
    <ModalComponent
      open={isOpen}
      title={title}
      onCancel={() => onClose(false)}
      width={520}
      isBorderBottom={false}
      footer={
        <Space
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '76px',
            background: '#F8F8F8',
            borderRadius: '0 0 8px 8px',
            rowGap: '12px',
          }}
        >
          <CustomButton
            typeButton="outline"
            outlineType={typeModal === 'error' ? 'ERROR' : 'PRIMARY'}
            isInverted={true}
            onClick={() => onClose(false)}
          >
						Cancel
          </CustomButton>

          <CustomButton
            typeButton="outline"
            outlineType={typeModal === 'error' ? 'ERROR' : 'PRIMARY'}
            style={{ marginRight: '16px' }}
            onClick={() => onClose(true)}
          >
            {typeModal === 'error' ? 'DELETE' : 'Yes'}
          </CustomButton>
        </Space>
      }
    >
      <Space direction="vertical" size={0} style={{ display: 'flex' }}>
        <Typography.Text>Are you sure you want to continue? </Typography.Text>
      </Space>
    </ModalComponent>
  );
};

export default ModalConfirmationDelete;
