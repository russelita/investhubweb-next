import FooterAuth from "@/components/FooterAuth";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import Modal from "@/components/Modal";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import { Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function ForgotPasswordForm() {
  const navigate = useRouter();
  const [modalSukses, setModalVisible] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<any>({
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = React.useState<any>({});

  const handleHiddenModal = () => {
    setModalVisible(!modalSukses);
    navigate.push('/auth/login')
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    // const value =
    //   event.target.type === "file" ? event.target.files[0] : event.target.value;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
    // Clear error for a field once it has been changed
    if (errors[name]) {
      setErrors(() => ({
        ...errors,
        [name]: null,
      }));
    }
  };

  const handleForgotPasswordForm = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    let validationErrors = {} as any;

    // Simple validation for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }

      if (formData[key] !== formData["password"]) {
        validationErrors[key] = `${
          "confirm Password".charAt(0).toUpperCase() +
          "confirm Password".slice(1)
        } not same.`;
      }

      if (formData[key] !== formData["passwordConfirm"]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } not same.`;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setModalVisible(!modalSukses);
  };
  return (
    <Space direction="vertical" style={{ display: "flex", marginTop: "20px" }}>
        <div className="container-header-register">
          <div className="icon-logo-container">
            <Image src={IconLogo} alt="icon-logo" className="icon-logo" />
          </div>
        </div>
        <div className="container-title">
          <div className="text-title">{"Set New Password"}</div>
          <div className="text-title-info">{"Enter your new password"}</div>
          <FormInput
            className={"form-input-top"}
            placeholder={"Enter Password"}
            title={"Create Password*"}
            type={"password"}
            name={"password"}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Password"}
            title={"Confirm Password*"}
            type={"password"}
            name={"passwordConfirm"}
            onChange={handleChange}
          />
          {errors.passwordConfirm && (
            <div className="error">{errors.passwordConfirm}</div>
          )}
          <FormButton
            className={"form-button-login"}
            onClick={handleForgotPasswordForm}
            title={"Submit"}
            type={"submit"}
          />
        </div>
        <FooterAuth hiddenButton={true} hiddenLineOr={true} backToLogin={false} />
      {modalSukses && (
        <Modal
          emailSent={true}
          handleHiddenModal={handleHiddenModal}
          title={"Successfull !"}
          desc={
            "It an account exist for xxxxxx@gmail.com, you will get an email with instructions on resetting your password. If it doesn’t arrive, be sure to check your spam folder"
          }
          btn1={"Back to login"}
          btn2={""}
        />
      )}
      </Space>
  );
}

export default ForgotPasswordForm;
