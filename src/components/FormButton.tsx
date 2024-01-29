import React from "react";
import styles from "./FormButton.module.css";
import { FaArrowRight } from "react-icons/fa6";

type PropsForm = {
  className: string;
  title: string;
  type: "submit" | "reset" | "button" | undefined;
  input?: [key: string];
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  hiddenIcon?: boolean;
};

function FormButton({
  className,
  title,
  type,
  input,
  hiddenIcon,
  onClick,
}: PropsForm) {
  return (
    <div className={`${className} form-button`}>
      <button
        onClick={onClick}
        type={type}
        {...input}
        className={"form-button__button"}
      >
        {title}
        {hiddenIcon ? null : (
          <FaArrowRight className={"form-button__button_arrow"} />
        )}
      </button>
    </div>
  );
}

export default FormButton;
