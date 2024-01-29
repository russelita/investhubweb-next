import React from "react";
import IconIDXMobile from "@/shared/images/logo/IDX_Mobile_Logo.webp";
import IconIDX from "@/shared/images/logo/IDX_Logo.webp";
import IconTicmi from "@/shared/images/logo/TICMI_Logo.webp";
import IconRDIS from "@/shared/images/logo/RDIS_Logo.webp";
import IconGoogle from "@/shared/images/logo/Google_Logo.webp";
import { MdLock } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { DASHBOARD_LOGIN } from "@/shared/constants/path";

type PropsForm = {
  backToLogin: boolean;
  hiddenButton: boolean;
  hiddenLineOr: boolean;
};

function FooterAuth({ backToLogin, hiddenButton, hiddenLineOr }: PropsForm) {
  return (
    <>
      <div className={"container-footer-login"}>
        {hiddenButton ? (
          <div className={"group-info-secure"}></div>
        ) : (
          <div className={"group-info-secure"}>
            <MdLock className={"group-info-secure-lock"} />
            {"Your Info is safely secured"}
          </div>
        )}
        {hiddenLineOr ? (
          <div className={"line-or-container"}></div>
        ) : (
          <div className={"line-or-container"}>
            <div className={"line-or"}></div>
            {backToLogin ? (
              <>
                <div className={"text-backTo"}>Back to</div>
                <Link className={"nav-link"} href={DASHBOARD_LOGIN}>
                  <div className={"text-linkRed-login"}>login</div>
                </Link>
              </>
            ) : (
              <div className={"text-or"}>or</div>
            )}
            <div className={"line-or"}></div>
          </div>
        )}
        {hiddenButton ? (
          <>
            <div className={"group-button-else-top"} />
            <div className={"group-button-else-bottom"} />
          </>
        ) : (
          <>
            <div className={"group-button-else-top"}>
              <button className={"btn-item"}>
                <Image
                  src={IconGoogle}
                  alt={"btn-item-icon"}
                  className={"btn-item-icon"}
                />
                {"Google"}
              </button>
              <button className={"btn-item"}>
                <Image
                  src={IconTicmi}
                  alt={"btn-item-icon"}
                  className={"btn-item-icon"}
                />
                {"TICMI"}
              </button>
              <button className={"btn-item"}>
                <Image
                  src={IconIDX}
                  alt={"btn-item-icon"}
                  className={"btn-item-icon"}
                />
                {"IDX"}
              </button>
            </div>
            <div className={"group-button-else-bottom"}>
              <button className={"btn-item"}>
                <Image
                  src={IconRDIS}
                  alt={"btn-item-icon"}
                  className={"btn-item-icon"}
                />
                {"RDIS"}
              </button>
              <button className={"btn-item"}>
                <Image
                  src={IconIDXMobile}
                  alt={"btn-item-icon"}
                  className={"btn-item-icon"}
                />
                {"IDX Mobile"}
              </button>
            </div>
          </>
        )}
      </div>
      <div className={"line-dashed"} />
      <div className={"container-text-footer"}>
        <div className={"text-footer-top"}>
          All data and information is taken officially from the IDX, RDIS, IDX
          Mobile, TICMIEDU websites.
        </div>
      </div>
      <div className={"container-text-footer-bottom"}>
        <div className={"text-footer-bottom"}>
          {"© 2023"}
          <div>{"Indonesia Stock Exchange"}</div>
        </div>
      </div>
    </>
  );
}

export default FooterAuth;
