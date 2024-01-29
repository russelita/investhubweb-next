import React from "react";
import IconAvatar from "@/shared/images/icon/avatar.webp";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

type PropsButtonAvatar = {
  className: string;
  user: string;
  setMyProfile: (event: any) => void;
  myProfile: boolean;
};

function ButtonUserAvatar({
  className,
  user,
  setMyProfile,
  myProfile,
}: PropsButtonAvatar) {
  return (
    <div
      onClick={() => setMyProfile(!myProfile)}
      className={`${className} nav-button-avatar`}
    >
      <Image src={IconAvatar} alt="flag-icon" className="flag-icon" />
      {user}
      <IoIosArrowDown className="ic-flag" />
    </div>
  );
}

export default ButtonUserAvatar;
