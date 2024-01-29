import FooterAuth from "@/components/FooterAuth";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import { Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { validateEmail } from "@/shared/utils/helper";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import useLoginForm from "../hooks/useLoginForm";
import { DASHBOARD_REGISTER, DASHBOARD_FORGOT, DASHBOARD_HOME, DASHBOARD_PROFILE } from '@/shared/constants/path';
import Cookies from 'js-cookie';


const initialAuthState = {
  loading: true,
  isLogin: false,
  isProfileUpdated: false,
  user: null,
  initialRoute: "Home",
  token: null,
  fcmToken: null,
};

const FormLogin = () => {
  const { mutationQuery, handleOnSubmit } = useLoginForm();
  const { isLoading } = mutationQuery;
  const navigate = useRouter();
  const [formData, setFormData] = React.useState<any>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    // const value =
    //   event.target.type === "file" ? event.target.files[0] : event.target.value;
    console.log(name, value);

    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
    // Clear error for a field once it has been changed
    if (errors[name]) {
      setErrors(() => ({
        ...formData,
        [name]: null,
      }));
    }
  };

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log("event", event);

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
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let temp = initialAuthState;
    temp.isLogin = true;
    localStorage.setItem("dataUser", JSON.stringify(temp));
    // Cookies.set('token', 'sdkaldknldnlasndlkandlknadlknalkdnalk');
    //     Cookies.set('user', JSON.stringify({user: 'rusli'}));
    //     navigate.replace(DASHBOARD_HOME);
    navigate.push(DASHBOARD_PROFILE);
  };

  const onFinish = (values: any) => {
    handleOnSubmit(values.email, values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space direction="vertical" style={{ display: "flex", marginTop: "20px" }}>
      <div className={"container-header"}>
        <div className={"icon-logo-container"}>
          <Image src={IconLogo} alt="icon-logo" className={"icon-logo"} />
        </div>
        <div className={"sub-right-container"}>
          <div className="text-ask">{"Doesn’t have an account?"}</div>
          <Link href={DASHBOARD_REGISTER} className={"text-register"}>
            {"Register"}
          </Link>
        </div>
      </div>
      <div className={"container-title"}>
        <div className={"text-title"}>{"Login!"}</div>
        <div className={"text-title-info"}>
          {"Please input your information in the fields below"}
        </div>
        <FormInput
          className={"form-input-email"}
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
          title={"Password*"}
          type={"password"}
          name={"password"}
          onChange={handleChange}
        />
        {errors.password && (
          <div className={"error"}>{errors.password}</div>
        )}
        <Link
          href={DASHBOARD_FORGOT}
          className={"text-forgot-password"}
        >
          {"Forgot your password?"}
        </Link>

        <FormButton
          className={"form-button-login"}
          onClick={handleLogin}
          title={"Login"}
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

export default FormLogin;
