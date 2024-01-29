import React from "react";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import IconBack from "@/shared/images/icon/arrow-left.webp";
import FooterAuth from "@/components/FooterAuth";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import Modal from "@/components/Modal";
import { validateEmail } from "@/shared/utils/helper";
import { useRouter } from "next/router";
import { Space } from "antd";
import Image from "next/image";

function ForgotPassword() {
  const navigate = useRouter();
  const [modalSukses, setModalVisible] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<any>({
    email: "",
  });
  const [errors, setErrors] = React.useState<any>({});

  const handleHiddenModal = () => {
    setModalVisible(!modalSukses);
    navigate.push('/auth/forgot-passwordForm')
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

  const handleForgotPassword = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    let validationErrors = {} as any;

    // Simple validation for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }

      if (!validateEmail(formData[key])) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } format is wrong.`;
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
          <Image
            onClick={() => navigate.push("/auth/login")}
            src={IconBack}
            alt="icon-back"
            className="icon-back"
          />
          <div className="text-title">{"Forgot Password"}</div>
          <div className="text-title-info">
            {"Enter your email to reset password"}
          </div>
          <FormInput
            className={"form-input-top"}
            placeholder={"Enter Email"}
            title={"Email Address"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <FormButton
            className={"form-button-login"}
            onClick={handleForgotPassword}
            title={"Send"}
            type={"submit"}
          />
        </div>
        <FooterAuth
          hiddenButton={true}
          backToLogin={true}
          hiddenLineOr={false}
        />
      {modalSukses && (
        <Modal
          emailSent={true}
          handleHiddenModal={handleHiddenModal}
          title={"Notification sent successfully !"}
          desc={
            "Forgot password notification has been sent check your email immediately"
          }
          btn1={"Finished"}
          btn2={""}
        />
      )}
      </Space>
  );
}

export default ForgotPassword;
