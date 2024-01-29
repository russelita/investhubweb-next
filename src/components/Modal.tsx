import React from "react";
import IconSuccess from "@/shared/images/icon/ic_round-check-circle.webp";
import IconEmailSent from "@/shared/images/icon/icon_emailConfirm.webp";
import Image from "next/image";

type PropsModal = {
  handleHiddenModal: (e: React.MouseEvent<HTMLElement>, value?: string) => void;
  title: string;
  desc: string;
  btn1?: string;
  btn2?: string;
  emailSent: boolean;
};

function Modal({
  handleHiddenModal,
  title,
  desc,
  btn1,
  btn2,
  emailSent,
}: PropsModal) {
  return (
    <>
      <div className="darkBG" onClick={handleHiddenModal} />
      <div className="centered">
        <div className="modal">
          <div className="containerModalImg">
            {emailSent ? (
              <Image
                src={IconEmailSent}
                alt="modal-img"
                className="modalImage"
              />
            ) : (
              <Image src={IconSuccess} alt="modal-img" className="modalImage" />
            )}
          </div>
          <div className="modalHeader">
            <h5 className="heading">{title}</h5>
          </div>
          <div className="modalContent">{desc}</div>
          <div className="modalActions">
            <button
              className="deleteBtn"
              onClick={(event) => handleHiddenModal(event,btn1)}
            >
              {btn1}
            </button>
            {btn2 ? (
              <button
                className="cancelBtn"
                onClick={(event) => handleHiddenModal(event,btn2)}
              >
                {btn2}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
