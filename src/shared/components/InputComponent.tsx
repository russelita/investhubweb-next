import React, { forwardRef } from 'react';

// antd
import { Input, InputProps } from 'antd';

// styled
import styled from 'styled-components';
import CustomButton from './CustomButton';
import Image from 'next/image';

type InputType = {
	isBold?: boolean;
	heightTA?: number;
};

const CustomInput = styled(Input) <{ $isBold?: boolean }>`
	padding-left: 16px;
	font-weight: ${(props) => (props?.$isBold ? '500' : '400')};

	& input {
		font-weight: ${(props) => (props?.$isBold ? '500' : '400')};
		position: relative;
		padding-left: 16px;

		&::placeholder {
			font-weight: 400;
		}
	}

	&:focus:not(.ant-input-disabled),
	&:active:not(.ant-input-disabled),
	&:focus-within:not(.ant-input-disabled) {
		outline: 1px solid rgba(149, 87, 173, 1) !important;
	}

	& .ant-form-item-control-input-content {
		&:focus:not(.ant-input-disabled),
		&:active:not(.ant-input-disabled),
		&:focus-within:not(.ant-input-disabled) {
			outline: 1px solid rgba(149, 87, 173, 1) !important;
		}
	}

	& .ant-input-prefix {
		margin-right: 12px;
	}

	box-shadow: none;

	&::placeholder {
		font-weight: 400;
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
`;

const InputComponent = forwardRef(
  ({ isBold = false, ...props }: InputProps & InputType, ref: any) => {
    return <CustomInput $isBold={isBold} {...props} ref={ref} />;
  },
);

InputComponent.displayName = 'InputComponent';

const CustomInputPassword = styled(Input.Password) <{ $isBold?: boolean }>`
	padding-left: 16px;
	font-weight: ${(props) => (props?.$isBold ? '500' : '400')};

	& input {
		font-weight: ${(props) => (props?.$isBold ? '500' : '400')};

		&::placeholder {
			font-weight: 400;
		}
	}

	&:focus,
	&:active,
	&:focus-within {
		outline: 1px solid rgba(149, 87, 173, 1) !important;
	}

	& .ant-form-item-control-input-content {
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

	&::placeholder {
		font-weight: 400;
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
`;

const InputPasswordComponent = forwardRef(
  ({ isBold = false, ...props }: InputProps & InputType & any, ref: any) => {
    return <CustomInputPassword $isBold={isBold} {...props} ref={ref} />;
  },
);

InputPasswordComponent.displayName = 'InputPasswordComponent';

type InputFileComponentProps = {
	preview?: string | File | any;
} & InputProps;

const CustomInputFile = styled(Input)`
	&.ant-input-affix-wrapper {
		padding: 8px 16px;

		& input {
			color: #2e65f3;
		}
	}
`;

const InputFileComponent = forwardRef(
  ({ preview, ...props }: InputFileComponentProps, ref: any) => {
    return (
      <>
        <label
          htmlFor={
            props.disabled
              ? ''
              : `file-input-form` + (props.id ? `-${props.id}` : ``)
          }
          style={{
            display: 'flex',
            flexDirection: 'column',
            cursor: props.disabled ? 'not-allowed' : 'pointer',
            ...(preview ? { width: 'fit-content' } : {}),
          }}
        >
          <input
            type="file"
            id={`file-input-form` + (props.id ? `-${props.id}` : ``)}
            style={{ display: 'none' }}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            accept={props.accept}
            ref={ref}
            disabled={props.disabled}
          />

          {!props.disabled && (
            preview ? (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  width: 'fit-content',
                }}
              >
                <Image
                  src={preview}
                  alt="preview-image"
                  width={100}
                  height={100}
                  quality={100}
                  style={{ marginTop: '20px' }}
                  title={
                    props?.value && typeof props.value === 'string'
                      ? props.value
                      : ''
                  }
                />

                <CustomButton
                  typeButton="outline"
                  style={{ pointerEvents: 'none' }}
                >
									Browse
                </CustomButton>
              </span>
            ) : (
              <span style={{ pointerEvents: 'none' }}>
                <CustomInputFile
                  value={props.value}
                  placeholder={props.placeholder}
                  suffix={
                    <CustomButton typeButton="outline">Browse</CustomButton>
                  }
                  readOnly
                  ref={ref}
                  disabled={props.disabled}
                />
              </span>
            )
          )}
        </label>
      </>
    );
  },
);

InputFileComponent.displayName = 'InputFileComponent';

const CustomTextArea = styled(Input.TextArea) <{
	$height: number;
	$isBold?: boolean;
}>`
	padding-left: 16px;
	font-weight: ${(props) => (props?.$isBold ? '500' : '400')};

	min-height: ${(props) => `${props.$height}px`} !important;

	& textarea {
		font-weight: ${(props) => (props?.$isBold ? '500' : '400')};

		&::placeholder {
			font-weight: 400;
		}
	}

	&:focus,
	&:active,
	&:focus-within {
		outline: 1px solid rgba(149, 87, 173, 1) !important;
	}

	& .ant-form-item-control-input-content {
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

	&::placeholder {
		font-weight: 400;
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
`;

const TextAreaComponent = forwardRef(
  (
    { heightTA = 145, isBold = false, ...props }: InputProps & InputType & any,
    ref: any,
  ) => {
    return (
      <CustomTextArea
        $height={heightTA}
        $isBold={isBold}
        autoSize={{ minRows: 4, maxRows: 4 }}
        {...props}
        ref={ref}
      />
    );
  },
);

TextAreaComponent.displayName = 'TextAreaComponent';

export {
  InputComponent,
  InputPasswordComponent,
  InputFileComponent,
  TextAreaComponent,
};
