import React, { useEffect, useState } from "react";

// styled
import styled from "styled-components";

// style
import StylesSider from "./Style";

// next
import Image from "next/image";

// image
import IconFlag from "../../../../images/icon/Uk_Flags.webp";

// icon
import { IoIosArrowDown } from "react-icons/io";

const StyledDiv = styled.div;

export default function ButtonFlag(props: any) {
  // style
  const stylesSider = StylesSider();

  // state
  const [scale, setScale] = useState(1);

  // effect
  useEffect(() => {
    const handleScale = () => {
      const { innerWidth } = window;

      const width40 = innerWidth * 0.4;

      if (width40 < 640) {
        setScale(Math.ceil(width40) / 640);
      } else {
        if (scale !== 1) {
          setScale(1);
        }
      }
    };

    window.addEventListener("resize", handleScale);

    handleScale();

    return () => window.removeEventListener("resize", handleScale);
  }, [scale]);

  return (
    <div style={stylesSider.ButtonFloat}>
      <Image src={IconFlag} alt="flag-icon" className="flag-icon" />
      <IoIosArrowDown className="ic-flag" />
    </div>
  );
}
