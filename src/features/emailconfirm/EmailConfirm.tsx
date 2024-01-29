import FooterAuth from "@/components/FooterAuth";
import FormButton from "@/components/FormButton";
import Modal from "@/components/Modal";
import IconEmailConfirm from "@/shared/images/icon/icon_emailConfirm.webp";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import { Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { DASHBOARD_EMAIL_CHANGE, DASHBOARD_LOGIN } from '@/shared/constants/path';

function EmailConfirm() {
  const navigate = useRouter();
  const [modalSukses, setModalVisible] = React.useState<boolean>(false);

  const handleHiddenModal = () => {
    setModalVisible(!modalSukses);
  };
  return (
    <Space direction="vertical" style={{ display: "flex", marginTop: "20px" }}>
        <div className="container-header-register">
          <div className="icon-logo-container">
            <Image src={IconLogo} alt="icon-logo" className="icon-logo" />
          </div>
        </div>
        <div className="container-title-emailConfirm">
          <Image src={IconEmailConfirm} alt="icon-back" className="icon-back" />
          <div className="text-title">{"Email Confirmation"}</div>
          <div className="text-title-info text-title-infoConfirmEmail">
            {
              "Thank you for registering on investhub. To activate your account, please follow the instructions via email that we sent to your email address "
            }
            <span className="text-redEmail">{`user1467@gmail.com`}</span>
          </div>
          <div className="group-button-emailConfirm">
            <FormButton
              className={"form-button-login"}
              onClick={() => setModalVisible(true)}
              title={"Resend"}
              type={"submit"}
              hiddenIcon={true}
            />
            <FormButton
              className={"form-button-login"}
              onClick={() => navigate.push(DASHBOARD_EMAIL_CHANGE)}
              title={"Change Email"}
              type={"submit"}
              hiddenIcon={true}
            />
          </div>
        </div>
        <FooterAuth hiddenLineOr={true} hiddenButton={true} backToLogin={false} />
      {modalSukses && (
        <Modal
          emailSent={true}
          handleHiddenModal={handleHiddenModal}
          title={"Done !"}
          desc={
            "Your confirmation email has been sent back to your email address"
          }
          btn1={"Close"}
          btn2={""}
        />
      )}
      </Space>
  );
}

export default EmailConfirm;
