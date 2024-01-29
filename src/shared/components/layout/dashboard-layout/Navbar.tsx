import React from "react";
import IconLogo from "@/shared/images/logo/logo_investhub.webp";
import ButtonFlag from "@/components/ButtonFlag";
import ButtonUserAvatar from "@/components/ButtonUserAvatar";
import DropDownList from "@/components/DropDownList";
import iconAvatar from "@/shared/images/icon/icon_myProfile.webp";
import iconLogout from "@/shared/images/icon/icon_Logout.webp";
import iconCourse from "@/shared/images/icon/icon_course.webp";
import iconEbook from "@/shared/images/icon/icon_eBook.webp";
import iconDiscuss from "@/shared/images/icon/icon_discussion.webp";
import iconGlossarium from "@/shared/images/icon/icon_glossarium.webp";
import iconLevelup from "@/shared/images/icon/icon_level_star.webp";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DASHBOARD_LOGIN } from "@/shared/constants/path";

const groupMyProfile = [
  {
    id: 1,
    icon: iconAvatar,
    value: "Avatar",
    url: "none",
    callback: false,
  },
  {
    id: 2,
    icon: iconLogout,
    value: "Logout",
    url: DASHBOARD_LOGIN,
    callback: false,
  },
];

const groupLearning = [
  {
    id: 1,
    icon: iconCourse,
    value: "Avatar",
    url: "",
    callback: false,
  },
  {
    id: 2,
    icon: iconEbook,
    value: "E-book",
    url: "",
    callback: false,
  },
  {
    id: 3,
    icon: iconDiscuss,
    value: "Discussion Forum",
    url: "",
    callback: false,
  },
  {
    id: 4,
    icon: iconGlossarium,
    value: "Glossarium",
    url: "",
    callback: false,
  },
  {
    id: 5,
    icon: iconLevelup,
    value: "Level up test",
    url: "",
    callback: false,
  },
];

function Navbar() {
  const navigate = useRouter();
  const [user, setUser] = React.useState({
    isLogin: false,
  });
  const [myProfile, setMyProfile] = React.useState(false);
  const [learning, setLearning] = React.useState(false);

  React.useEffect(() => {
    cekUser();
  }, []);

  const cekUser = async () => {
    const userState = localStorage.getItem("dataUser");
    if (typeof userState === "string") {
      setUser(JSON.parse(userState));
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image src={IconLogo} alt="logo-icon" className="logo-icon" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => setLearning(!learning)}
              className="nav-link"
              href={""}
            >
              Learning
            </Link>
            <IoIosArrowDown className="ic-learning" />
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Event
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Broker
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              FAQ
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          <ButtonFlag />
          {user && user.isLogin ? (
            <ButtonUserAvatar
              myProfile={myProfile}
              setMyProfile={setMyProfile}
              user={"User"}
              className={""}
            />
          ) : (
            <button
              onClick={() => navigate.push("/auth/login")}
              className="bt-sign-in"
            >
              Sign in
            </button>
          )}
        </div>
        {learning && (
          <DropDownList
            className={"position-learning"}
            listDropdown={groupLearning}
            handleClick={() => {}}
          />
        )}
        {myProfile && (
          <DropDownList
            className={""}
            handleClick={() => {}}
            listDropdown={groupMyProfile}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
