import React from "react";
import bgHero from "@/shared/images/icon/bg_Hero.webp";
import FormButton from "@/components/FormButton";
import Checbox from "@/shared/widgets/Checbox";
import FormInput from "@/components/FormInput";
import FormRadioInput from "@/components/FormRadioInput";
import iconCircleGreen from "@/shared/images/icon/ic_round-check-circle-green.webp";
import iconCD from "@/shared/images/icon/icon_cd.webp";
import iconDotLeft from "@/shared/images/icon/icon_dot_left.webp";
import iconDotMid from "@/shared/images/icon/icon_dot_mid.webp";
import iconDotRight from "@/shared/images/icon/icon_dot_right.webp";
import DropDownList from "@/components/DropDownList";
import { useSpring, animated } from "@react-spring/web";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import Image from "next/image";

const Preferences = [
  {
    id: 1,
    name: "Stock",
    choosen: false,
  },
  {
    id: 2,
    name: "Technical Analysis",
    choosen: false,
  },
  {
    id: 3,
    name: "Crypto",
    choosen: false,
  },
  {
    id: 4,
    name: "Investing",
    choosen: false,
  },
  {
    id: 5,
    name: "Fintech",
    choosen: false,
  },
  {
    id: 6,
    name: "Business",
    choosen: false,
  },
  {
    id: 7,
    name: "Finance",
    choosen: false,
  },
];

const groupLearning = [
  {
    id: 1,
    value: "Test 1",
    url: "",
    callback: true,
    excersise:
      "Penundaan konsumsi sekarang untuk aktifa produktif selama periode waktu tertentu, merupakan definisi dari?",
    answer: [
      {
        id: 1,
        content: "Investasi",
      },
      {
        id: 2,
        content: "Konsumsi",
      },
      {
        id: 3,
        content: "Pasar Modal",
      },
      {
        id: 4,
        content: "Reksadana",
      },
      {
        id: 5,
        content: "Salah Semua",
      },
    ],
  },
  {
    id: 2,
    value: "Test 2",
    url: "",
    callback: true,
    excersise:
      "Pemakaian sumber daya untuk mendapatkan kepuasan atau utility, merupakan definisi dari?",
    answer: [
      {
        id: 1,
        content: "Investasi",
      },
      {
        id: 2,
        content: "Konsumsi",
      },
      {
        id: 3,
        content: "Pasar Modal",
      },
      {
        id: 4,
        content: "Reksadana",
      },
      {
        id: 5,
        content: "Salah Semua",
      },
    ],
  },
  {
    id: 3,
    value: "Test 3",
    url: "",
    callback: true,
    excersise:
      "Sarana perusahaan untuk meningkatkan kebutuhan jangka panjang dengan menjual saham dan mengeluarkan obligasi, merupakan definisi dari?",
    answer: [
      {
        id: 1,
        content: "Investasi",
      },
      {
        id: 2,
        content: "Konsumsi",
      },
      {
        id: 3,
        content: "Pasar Modal",
      },
      {
        id: 4,
        content: "Reksadana",
      },
      {
        id: 5,
        content: "Salah Semua",
      },
    ],
  },
  {
    id: 4,
    value: "Test 4",
    url: "",
    callback: true,
    excersise:
      "Dilakukan dengan membeli langsung aktiva keuangan dari perusahaan baik melalui perantara ataupun yang lain. Hal ini dapat dilakukan dengan membeli aktiva-aktiva keuangan yang dapat diperjual belikan dipasar uang. pasar modal atau pasar turunan, merupakan definisi dari?",
    answer: [
      {
        id: 1,
        content: "Investasi",
      },
      {
        id: 2,
        content: "Konsumsi",
      },
      {
        id: 3,
        content: "Pasar Modal",
      },
      {
        id: 4,
        content: "Reksadana",
      },
      {
        id: 5,
        content: "Salah Semua",
      },
    ],
  },
  {
    id: 5,
    value: "Test 5",
    url: "",
    callback: true,
    excersise:
      "Dilakukan dengan membeli saham dari perusahaan investasi yang mempunyai portofolio aktifa dari perusahaan lain, merupakan definisi dari?",
    answer: [
      {
        id: 1,
        content: "Investasi",
      },
      {
        id: 2,
        content: "Konsumsi",
      },
      {
        id: 3,
        content: "Pasar Modal",
      },
      {
        id: 4,
        content: "Reksadana",
      },
      {
        id: 5,
        content: "Salah Semua",
      },
    ],
  },
  {
    id: 6,
    value: "Test 6",
    url: "",
    callback: true,
    excersise:
      "Dilakukan dengan membeli saham dari perusahaan investasi yang mempunyai portofolio aktifa dari perusahaan lain, merupakan definisi dari?",
    answer: [
      {
        id: 1,
        content: "Investasi",
      },
      {
        id: 2,
        content: "Konsumsi",
      },
      {
        id: 3,
        content: "Pasar Modal",
      },
      {
        id: 4,
        content: "Reksadana",
      },
      {
        id: 5,
        content: "Salah Semua",
      },
    ],
  },
];

function UpdateProfile() {
  const navigate = useRouter();
  const [checked, setChecked] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [preferences, setPreferences] = React.useState(false);
  const [preliminary, setPreliminary] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [optionGender, setOptionGender] = React.useState("");
  const [optPreliminary, setOptPreliminary] = React.useState("");
  const [listPreferences, setListPreferences] = React.useState(Preferences);
  const [time, setTime] = React.useState(10);
  const [indexSoal, setIndexSoal] = React.useState(0);
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleChangeRadio = (event: any) => {
    const {
      target: { value },
    } = event;
    setOptionGender(value);
  };

  const handleChangeRadioAnswer = (event: any) => {
    const {
      target: { value },
    } = event;
    setOptPreliminary(value);
  };

  const handleChoosePref = (item: any) => {
    let temp = listPreferences.map((val) => {
      if (val === item) {
        val.choosen = !val.choosen;
      }
      return val;
    });
    console.log("cek temp", temp);
    setListPreferences(temp);
  };

  const handleClickSoal = (value: any) => {
    console.log("clicked", value);
    groupLearning.map((item, index) => {
      if (item.id === value) {
        setIndexSoal(index);
      }
    });
  };

  const handleNextExcersice = () => {
    const lengthArray = groupLearning.length - 1;
    if (indexSoal === lengthArray) {
      return;
    }
    if (indexSoal === 0) {
      animatedToRight(5);
    }
    if (indexSoal === 4) {
      animatedToRight(5);
    }
    setIndexSoal(indexSoal + 1);
  };

  const handlePrevExcersice = () => {
    const lengthArray = groupLearning.length - 1;
    if (indexSoal === 0) {
      return;
    }
    if (indexSoal === lengthArray) {
      animatedToLeft(50);
    }
    if (indexSoal === 1) {
      animatedToLeft(50);
    }
    setIndexSoal(indexSoal - 1);
  };

  const animatedToRight = (value: any) => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: value,
      },
    });
  };

  const animatedToLeft = (value: any) => {
    api.start({
      from: {
        x: value,
      },
      to: {
        x: 0,
      },
    });
  };

  return (
    <div
      className="container-updateProfile"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        padding: "30px 50px",
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      {!profile && (
        <>
          <div className="text-title">{"Update Profile"}</div>
          <div className="text-title-info">
            {"Complete your data according to the fields below"}
          </div>
          <FormInput
            className={"form-input-top"}
            placeholder={"Enter Full Name"}
            title={"Full Name"}
            type={"text"}
            name={""}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Select Date of Birth"}
            title={"Date of Birth"}
            type={"date"}
            name={""}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Phone Number"}
            title={"Phone Number"}
            type={"number"}
            name={""}
          />
          <FormRadioInput
            className={"form-input-password"}
            title={"Gender"}
            handleChangeRadio={handleChangeRadio}
            checked={optionGender}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Email"}
            title={"Email"}
            type={"email"}
            name={""}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Address"}
            title={"Address"}
            type={"text"}
            name={""}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Select Country"}
            title={"Country"}
            type={"text"}
            name={""}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Select Institution"}
            title={"Institution"}
            type={"text"}
            name={""}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Input Institution Name"}
            title={"Institution Name"}
            type={"text"}
            name={""}
          />
          <Checbox
            text={"I agree to terms & conditions"}
            checked={checked}
            handleChecked={handleChecked}
          />
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src={iconDotLeft} alt="icon-dot" />
            <div style={{ width: "20%" }}>
              <FormButton
                className={""}
                onClick={() => setProfile(true)}
                title={"Next"}
                type={"submit"}
              />
            </div>
          </div>
        </>
      )}
      {!preferences && profile && (
        <>
          <div className="text-title">{"Preferences"}</div>
          <div className="text-title-info">
            {"Choose your interesting below (three or more)"}
          </div>
          <ul>
            {listPreferences.map((item, index) => (
              <li
                style={
                  item.choosen
                    ? { color: "#ffffff", backgroundColor: "#9f0e0f" }
                    : {}
                }
                key={item.id}
                onClick={() => handleChoosePref(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src={iconDotMid} alt="icon-dot" />
            <div style={{ width: "20%" }}>
              <FormButton
                className={""}
                onClick={() => {
                  setPreliminary(true);
                  setPreferences(true);
                }}
                title={"Next"}
                type={"submit"}
              />
            </div>
          </div>
        </>
      )}
      {preliminary && (
        <>
          <div className="container-preliminary">
            <div className="container-top-preliminary">
              <div className="group-preliminary-text">
                <div className="text-title">{"Placement Test"}</div>
                <div className="text-title-info">
                  {"Choose the answer that suits you"}
                </div>
              </div>
              <div className="countDown-time">
                <Image src={iconCircleGreen} alt="ic_circle_green" />
                <div className="group-countDown">
                  <Image src={iconCD} alt="ic_cd" />
                  <div className="text-countDown">{`00 : ${time}`}</div>
                </div>
              </div>
            </div>
            <div className="container-mid-preliminary">
              {indexSoal > 0 && (
                <div
                  onClick={handlePrevExcersice}
                  className="btnNext-preliminary"
                >
                  <IoIosArrowBack className="ic-next-preliminary" />
                </div>
              )}
              <animated.div
                style={{ ...springs }}
                onClick={() => setOpenList(!openList)}
                className="btnDropdown-scroll"
              >
                Prem Test
                <IoIosArrowDown className="ic-learning" />
              </animated.div>
              {indexSoal !== groupLearning.length - 1 && (
                <div
                  onClick={handleNextExcersice}
                  className="btnNext-preliminary"
                >
                  <IoIosArrowForward className="ic-next-preliminary" />
                </div>
              )}
            </div>
            <div className="container-bottom-preliminary">
              <div className="text-preliminary-exercise">
                {groupLearning[indexSoal].excersise}
              </div>
              <div className="grup-radio-answer-preliminary">
                {groupLearning[indexSoal].answer.map((item) => (
                  <label key={item.id} className="form-input__radio__text">
                    <input
                      type="radio"
                      value={item.content}
                      checked={optPreliminary === item.content}
                      onChange={handleChangeRadioAnswer}
                    />
                    {item.content}
                  </label>
                ))}
              </div>
              {indexSoal === groupLearning.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image src={iconDotRight} alt="icon-dot" />
                  <div style={{ width: "20%" }}>
                    <FormButton
                      className={""}
                      onClick={() => navigate.push("/")}
                      title={"Submit"}
                      type={"submit"}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {openList && (
        <DropDownList
          listDropdown={groupLearning}
          handleClick={handleClickSoal}
          className={
            indexSoal === 0
              ? "positionpre-left"
              : indexSoal >= 1 && indexSoal < groupLearning.length - 1
              ? "positionpre-mid"
              : "positionpre-right"
          }
        />
      )}
    </div>
  );
}

export default UpdateProfile;
