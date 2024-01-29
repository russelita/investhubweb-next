import React from "react";
import IconFlag from "@/shared/images/icon/Uk_Flags.webp";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

type PropsFlag = {
  className?: string;
};

function ButtonFlag({ className }: PropsFlag) {
  return (
    <div className={`${className} nav-button-flag`}>
      <Image src={IconFlag} alt="flag-icon" className="flag-icon" />
      <IoIosArrowDown className="ic-flag" />
    </div>
  );
}

export default ButtonFlag;
