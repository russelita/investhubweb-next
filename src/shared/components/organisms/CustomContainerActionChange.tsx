import React from 'react';

// antd
import { Space, Typography } from 'antd';

// next

// image
// import ImportantIcon from 'src/shared/images/important-icon.png';
// import AddIcon from 'src/shared/images/button/add.png';

// component
import CustomButton from '../CustomButton';
import CustomChip from '../CustomChip';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';

type CustomContainerActionChangeProps = {
	text?: string;
	onAdd?: () => void;
	addText?: string;
	addIcon?: boolean;
	addDisable?: boolean;
	addLoading?: boolean;
	onReset?: () => void;
	resetText?: string;
	onCanceled?: () => void;
	canceledText?: string;
	onSuccess?: () => void;
	successText?: string;
	onReject?: () => void;
	rejectText?: string;
	onApprove?: () => void;
	approveText?: string;
	rejectLoading?: boolean;
	approveLoading?: boolean;
	isApproved?: boolean;
};

const CustomContainerActionChange = ({
  addText,
  onAdd,
  addDisable = false,
  addIcon = true,
  addLoading = false,
  onReset,
  resetText,
  text,
  canceledText,
  onCanceled,
  onSuccess,
  successText,
  onReject,
  onApprove,
  rejectText,
  approveText,
  rejectLoading,
  approveLoading,
  isApproved,
}: CustomContainerActionChangeProps) => {
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 30px',
        background: '#F8F8F8',
        border: '1px solid #F3F4F6',
        borderRadius: '10px',
      }}
    >
      <Space size={15} align="center" style={{ display: 'flex' }}>
        <ExclamationCircleOutlined />

        <Typography.Text
          style={{
            verticalAlign: 'middle',
            fontSize: '14px',
            lineHeight: '22px',
          }}
        >
          {text}
        </Typography.Text>
      </Space>

      <Space size={15} align="center">
        {onReset ? (
          <CustomButton
            onClick={onReset}
            typeButton="secondary"
            disabled={addLoading}
          >
            {resetText || 'reset'}
          </CustomButton>
        ) : null}

        {onAdd ? (
          <CustomButton
            onClick={onAdd}
            typeButton="primary"
            loading={addLoading}
            disabled={addDisable}
          >
            {addText || 'add'}

            {addIcon ? (
              <PlusOutlined />
            ) : null}
          </CustomButton>
        ) : null}

        {onCanceled ? (
          <CustomButton
            onClick={onCanceled}
            typeButton="outline"
            outlineType="ERROR"
          >
            {canceledText || 'cancel'}
          </CustomButton>
        ) : null}

        {onSuccess ? (
          <CustomButton
            onClick={onSuccess}
            typeButton="outline"
            outlineType="SUCCESS"
          >
            {successText || 'save'}
          </CustomButton>
        ) : null}

        {onReject ? (
          <CustomButton onClick={onReject} className="button-bg-red-primary" loading={rejectLoading}>
            {rejectText || 'Reject'}
          </CustomButton>
        ) : null}

        {onApprove ? (
          <CustomButton onClick={onApprove} className="button-bg-green-primary" loading={approveLoading}>
            {approveText || 'Approve'}
          </CustomButton>
        ) : null}

        {isApproved !== undefined ? (
          <CustomChip typeChip={isApproved ? 'SUCCESS' : 'ERROR'}>
            {isApproved ? 'Approved' : 'Rejected'}
          </CustomChip>
        ) : null}
      </Space>
    </Space >
  );
};

export default CustomContainerActionChange;
