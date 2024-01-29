import { Space, notification } from "antd";
import Image from "next/image";
import useRegisterForm from "../hooks/useRegisterForm";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import IconBack from "@/shared/images/icon/arrow-left.webp";
import FooterAuth from "@/components/FooterAuth";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import Checbox from "@/shared/widgets/Checbox";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import { validateEmail } from "@/shared/utils/helper";
import React from "react";
import {
  DASHBOARD_EMAIL_CONFIRM,
  DASHBOARD_LOGIN,
} from "@/shared/constants/path";

const FormRegister = () => {
  const navigate = useRouter();
  const { mutationQuery, handleOnSubmit } = useRegisterForm();
  // eslint-disable-next-line no-unused-vars
  const { isLoading, isError, error, isSuccess } = mutationQuery;
  const [checked, setChecked] = React.useState<boolean>(false);
  const [token, setToken] = React.useState<any>("");
  const captchaRef = React.useRef<any>(null);
  const [formData, setFormData] = React.useState<any>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = React.useState<any>({});

  const handleChecked = () => {
    setChecked(!checked);
  };

  const onVerify = () => {
    const tokenCaptcha = captchaRef.current.getValue();
    // alert(tokenCaptcha);
    setToken(tokenCaptcha);
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

  const handleRegister = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    let validationErrors = {} as any;

    // Simple validation for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }

      if (key == "email" && !validateEmail(formData[key])) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } format is wrong.`;
      }

      if (key == "passwordConfirm" && formData[key] !== formData["password"]) {
        validationErrors[key] = `${
          "confirm Password".charAt(0).toUpperCase() +
          "confirm Password".slice(1)
        } not same.`;
      }

      if (key == "password" && formData[key] !== formData["passwordConfirm"]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } not same.`;
      }
    }

    console.log('formData', formData);
    

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!token) {
      notification.error({
        message: "reCAPTCHA",
        description: "Please verify the reCAPTCHA!"
      });
      return;
    }

    if (!checked) {
      notification.error({
        message: "agree terms & condition",
        description: "Please accept terms & condition!"
      });
      return;
    }

    try {
      handleOnSubmit(
        formData.name,
        formData.email,
        formData.password,
        formData.passwordConfirm
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Space direction="vertical" style={{ display: "flex", marginTop: "20px" }}>
      <div className={"container-header-register"}>
        <div className={"icon-logo-container"}>
          <Image src={IconLogo} alt={"icon-logo"} className={"icon-logo"} />
        </div>
      </div>
      <div className={"container-title"}>
        <Image
          onClick={() => navigate.push(DASHBOARD_LOGIN)}
          src={IconBack}
          alt={"icon-back"}
          className={"icon-back"}
        />
        <div className={"text-title"}>{"Register Account!"}</div>
        <div className={"text-title-info"}>
          {"Please input your information in the fields below"}
        </div>
        <FormInput
          className={"form-input-email"}
          placeholder={"Enter Full Name"}
          title={"Full Name"}
          type={"text"}
          name={"name"}
          onChange={handleChange}
        />
        {errors.name && <div className={"error"}>{errors.name}</div>}
        <FormInput
          className={"form-input-password"}
          placeholder={"Enter Email"}
          title={"Email Address"}
          type={"email"}
          name={"email"}
          onChange={handleChange}
        />
        {errors.email && <div className={"error"}>{errors.email}</div>}
        <FormInput
          className={"form-input-password"}
          placeholder={"Enter Password"}
          title={"Create Password*"}
          type={"password"}
          name={"password"}
          onChange={handleChange}
        />
        {errors.password && <div className={"error"}>{errors.password}</div>}
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
        <div className={"position-recaptcha"}>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
            onChange={onVerify}
            ref={captchaRef}
          />
        </div>
        <Checbox
          text={"I agree to terms & conditions"}
          checked={checked}
          handleChecked={handleChecked}
        />
        <FormButton
          className={"form-button-login"}
          onClick={handleRegister}
          title={"Register Account"}
          type={"submit"}
        />
      </div>
      <FooterAuth
        backToLogin={false}
        hiddenButton={false}
        hiddenLineOr={false}
      />
    </Space>
  );
};

export default FormRegister;
