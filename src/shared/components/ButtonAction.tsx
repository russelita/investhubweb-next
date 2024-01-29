import React, { useState } from 'react';

// antd
import type { ButtonProps } from 'antd/es/button';

// image
// import DisplayIcon from 'src/shared/images/button/display.png';
// import DisplayHoverIcon from 'src/shared/images/button/display-hover.png';
// import EditIcon from 'src/shared/images/button/edit.png';
// import EditHoverIcon from 'src/shared/images/button/edit-hover.png';
// import RemoveIcon from 'src/shared/images/button/remove.png';
// import RemoveHoverIcon from 'src/shared/images/button/remove-hover.png';
// import ManageIcon from 'src/shared/images/button/manage.png';
// import ManageHoverIcon from 'src/shared/images/button/manage-hover.png';
// import RefreshIcon from 'src/shared/images/button/refresh.png';
// import RefreshHoverIcon from 'src/shared/images/button/refresh-hover.png';

// component
import CustomButton from './CustomButton';
import ModalConfirmationDelete from './ModalConfirmationDelete';
import { Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import { COLORS } from '../styles/color';

type ButtonActionProps = {
	typeAction: 'display' | 'edit' | 'remove' | 'manage' | 'refresh';
	iconOnly?: boolean;
	onDelete?: () => void;
	onRefresh?: () => void;
} & ButtonProps;

const ButtonAction = ({
  typeAction,
  iconOnly = false,
  onDelete,
  onRefresh,
  ...props
}: ButtonActionProps) => {
  const TYPE_BUTTON_ACTION = {
    display: {
      0: <EyeOutlined style={{color: COLORS.SECONDARY}} />,
      1: <EyeOutlined style={{color: COLORS.PRIMARY}} />,
      title: 'display',
    },
    edit: {
      0: <EditOutlined style={{color: COLORS.SECONDARY}} />,
      1: <EditOutlined style={{color: COLORS.WARNING}} />,
      title: 'edit',
    },
    remove: {
      0: <DeleteOutlined style={{color: COLORS.SECONDARY}} />,
      1: <DeleteOutlined style={{color: COLORS.ERROR}} />,
      title: 'delete',
    },
    manage: {
      0: <SettingOutlined style={{color: COLORS.SECONDARY}} />,
      1: <SettingOutlined style={{color: COLORS.PRIMARY}} />,
      title: 'manage',
    },
    refresh: {
      0: <ReloadOutlined style={{color: COLORS.SECONDARY}} />,
      1: <ReloadOutlined style={{color: COLORS.PRIMARY}} />,
      title: 'change status',
    },
  };

  // state
  const [isHover, setIsHover] = useState<0 | 1>(0);

  const [isOpenConfirmationDelete, setIsOpenConfirmationDelete] =
		useState(false);
  const [isOpenConfirmationRefresh, setIsOpenConfirmationRefresh] =
		useState(false);

  // func
  const onHover = () => {
    setIsHover(1);
  };

  const onBlur = () => {
    setIsHover(0);
  };

  const onOpenConfirmationDelete = () => {
    setIsOpenConfirmationDelete(true);
  };

  const onConfirmationDelete = (is_confirm: boolean) => {
    setIsOpenConfirmationDelete(false);

    if (is_confirm) {
      onDelete && onDelete();
    }
  };

  const onOpenConfirmationRefresh = () => {
    setIsOpenConfirmationRefresh(true);
  };

  const onConfirmationRefresh = (is_confirm: boolean) => {
    setIsOpenConfirmationRefresh(false);

    if (is_confirm) {
      onRefresh && onRefresh();
    }
  };

  return (
    <>
      <CustomButton
        onClick={
          typeAction === 'remove' && onDelete
            ? onOpenConfirmationDelete
            : typeAction === 'refresh' && onRefresh
              ? onOpenConfirmationRefresh
              : () => null
        }
        title={TYPE_BUTTON_ACTION?.[typeAction]?.title}
        {...props}
        onPointerEnter={onHover}
        onPointerLeave={onBlur}
        typeButton="outline"
        icon={TYPE_BUTTON_ACTION?.[typeAction]?.[isHover]}
        // icon={
        // 	<Image
        // 		src={TYPE_BUTTON_ACTION?.[typeAction]?.[isHover]}
        // 		alt={`icon-button-${typeAction}`}
        // 		width={18}
        // 		height={18}
        // 		quality={100}
        // 	/>
        // }
        style={iconOnly ? {
          padding: '0px', margin: 'auto 0px', height: 'fit-content', width: 'fit-content', border: 'none'
        } : {
          padding: '5px 10px 5px 10px', background: 'transparent'
        }}
      >
        {typeAction === 'manage' && !props.children
          ? 'Manage Permission'
          : props.children}
      </CustomButton>

      <ModalConfirmationDelete
        isOpen={isOpenConfirmationDelete}
        onClose={onConfirmationDelete}
        title={
          <Space size={16}>
            {TYPE_BUTTON_ACTION?.['remove']?.['1']}
            {/* <Image
							src={TYPE_BUTTON_ACTION?.['remove']?.['1']}
							alt={`icon-button-remove`}
							width={18}
							height={18}
							quality={100}
						/> */}
						Delete
          </Space>
        }
      />

      <ModalConfirmationDelete
        typeModal="refresh"
        isOpen={isOpenConfirmationRefresh}
        onClose={onConfirmationRefresh}
        title={
          <Space size={16}>
            {TYPE_BUTTON_ACTION?.['refresh']?.['1']}
            {/* <Image
							src={TYPE_BUTTON_ACTION?.['refresh']?.['1']}
							alt={`icon-button-refresh`}
							width={18}
							height={18}
							quality={100}
						/> */}
						Change Status
          </Space>
        }
      />
    </>
  );
};

export default ButtonAction;
