import FooterAuth from "@/components/FooterAuth";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import IconBack from "@/shared/images/icon/arrow-left.webp";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import { Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { validateEmail } from "@/shared/utils/helper";
import { DASHBOARD_EMAIL_CONFIRM, DASHBOARD_LOGIN } from "@/shared/constants/path";

function EmailChange() {
  const navigate = useRouter();
  const [formData, setFormData] = React.useState<any>({
    email: "",
  });
  const [errors, setErrors] = React.useState<any>({});

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
  
  const handleChangeEmail = (event: React.MouseEvent<HTMLElement>) => {
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
    navigate.push(DASHBOARD_EMAIL_CONFIRM);
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
            onClick={() => navigate.push(DASHBOARD_LOGIN)}
            src={IconBack}
            alt="icon-back"
            className="icon-back"
          />
          <div className="text-title">{"Change Email"}</div>
          <div className="text-title-info">{"Enter your new email"}</div>
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
            onClick={handleChangeEmail}
            title={"Send"}
            type={"submit"}
          />
        </div>
        <FooterAuth hiddenLineOr={false} hiddenButton={true} backToLogin={true} />
      </Space>
  );
}

export default EmailChange;
