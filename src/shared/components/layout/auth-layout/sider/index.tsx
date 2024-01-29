import React from "react";

// next
import Image from "next/image";
import HeroImage from "@/shared/images/icon/bg_Hero.webp";

// component
import ButtonFlag from "./ButtonFlag";

type PropsSider = {
  button:boolean
}

const SiderLayoutAuth = ({button}: PropsSider) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Image src={HeroImage} alt={"layout-bg-image"} fill quality={100} />
      </div>

      {button ? <ButtonFlag /> : null}

      
    </div>
  );
};

export default SiderLayoutAuth;
