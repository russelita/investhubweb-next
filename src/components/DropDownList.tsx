import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { DASHBOARD_LOGIN } from "@/shared/constants/path";

type PropsDropdown = {
  listDropdown: {
    url: string;
    icon?: StaticImageData | string;
    value?: string;
    callback: boolean;
    id: number;
    answer? : {
      id: number
      content: string
    }[],
    excersise?: string;
  }[];
  className: string;
  handleClick: (event: any) => void;
};

function DropDownList({ listDropdown, className, handleClick }: PropsDropdown) {
  const navigate = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("dataUser");
    navigate.push(DASHBOARD_LOGIN);
  };
  return (
    <div className={`${className} container-dropdown`}>
      <ul
        className={`${
          listDropdown.length > 5 ? "list-dropdown-scrollable" : ""
        } list-dropdown`}
      >
        {listDropdown.map((item, index) => (
          <li key={index}>
            {item.url === "none" ? (
              <>
                <span>
                  {item.icon ? (
                    <Image src={item.icon} alt="icon-logout" />
                  ) : null}
                  {item.value}
                </span>
              </>
            ) : (
              <Link
                href={item.url}
                onClick={
                  item.value === "Logout"
                    ? handleLogout
                    : item.callback
                    ? () => handleClick(item.id)
                    : () => {}
                }
              >
                {item.icon ? <Image src={item.icon} alt="icon-logout" /> : null}
                {item.value}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownList;
