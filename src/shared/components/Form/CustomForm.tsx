import React from "react";

// antd
import { Form, FormItemProps } from "antd";

// style
import styled from "styled-components";

const CustomFormItem_ = styled(Form.Item)<{
  $topLabel: number;
  $marginBottom: number;
  $isLabelFloat: boolean;
  $isDisabled: boolean;
}>`
  padding-top: ${(props) => (props.$isLabelFloat ? "5px" : "30px")};
  position: relative;
  margin-bottom: ${(props) => `${props.$marginBottom}px`};
  font-weight: 400;

  & .ant-form-item-label {
    ${(props) =>
      props.$isDisabled ? "backdrop-filter: blur(2px);" : "background:#ffffff;"}

    position: absolute;

    top: ${(props) => (props.$isLabelFloat ? `${props.$topLabel}px` : "-10px")};
    left: ${(props) => (props.$isLabelFloat ? "15px" : "0px")};
    z-index: 2;
    padding: 0px 8px;
    overflow: hidden;

    & label {
      font-size: 14px;
      line-height: 22px;
      color: #6e6e6e;

      &::after {
        display: none;
      }
    }
  }

  & .ant-form-item-required {
    display: flex;
    flex-direction: row-reverse;
    gap: 2px;

    &::before {
      color: #e53935 !important;
      font-size: 14px !important;
      line-height: 12px !important;
      margin-bottom: 10px;
      font-weight: 700;
    }
  }

  & .ant-form-item-explain {
    font-size: 12px;
    line-height: 12px;
    z-index: 10;
    margin-bottom: 8px;
    padding: 8px 16px;
  }

  & .ant-form-item-explain-error {
    color: #dc3545 !important;
  }

  &.ant-form-item-has-error {
    & .ant-input-affix-wrapper-status-error {
      border-color: #dc3545 !important;
    }

    & .ant-form-item-label label {
      color: #dc3545 !important;
    }
  }
`;

type CustomFormItemProps = {
  topLabel?: number;
  marginBottom?: number;
  isLableFloat?: boolean;
  disabled?: boolean;
};

const CustomFormItem = ({
  topLabel = -12,
  marginBottom = 20,
  isLableFloat = false,
  disabled = false,
  ...props
}: FormItemProps & CustomFormItemProps) => {
  return (
    <CustomFormItem_
      {...props}
      $topLabel={topLabel}
      $marginBottom={marginBottom}
      $isLabelFloat={isLableFloat}
      $isDisabled={disabled}
    >
      {props.children}
    </CustomFormItem_>
  );
};

export { CustomFormItem };
