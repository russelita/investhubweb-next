import React from "react";

type FormRadio = {
  className: string;
  title: string;
  input?: [key: string];
  checked: string;
  handleChangeRadio: (event: any) => void;
};

function FormRadioInput({
  className,
  title,
  input,
  checked,
  handleChangeRadio,
}: FormRadio) {
  return (
    <div className={`${className} form-input`}>
      <label className="form-input__label">{title}</label>
      <div className="form-input__radio">
        <label className="form-input__radio__text">
          <input
            type="radio"
            value={"male"}
            checked={checked === "male"}
            onChange={handleChangeRadio}
            {...input}
          />
          Male
        </label>
        <label className="form-input__radio__text">
          <input
            type="radio"
            value={"female"}
            checked={checked === "female"}
            onChange={handleChangeRadio}
            {...input}
          />
          Female
        </label>
      </div>
    </div>
  );
}

export default FormRadioInput;
