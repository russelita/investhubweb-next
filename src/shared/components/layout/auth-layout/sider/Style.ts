import { CSSProperties } from "react";

type StylesType = {
  CardContainerTheme: CSSProperties;
  CardTitleTheme: CSSProperties;
  CardContentTheme: CSSProperties;
  ButtonFloat: CSSProperties;
};

/**
 * @return {StylesType} styles
 */
function StylesSider(): StylesType {
  const CardContainerTheme: CSSProperties = {
    display: "flex",
    width: "540px",
    height: "50%",
    maxHeight: "456px",
    padding: "120px 50px 50px 50px",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "20px",
    flexShrink: 0,
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.30)",
    backdropFilter: "blur(10px)",
    position: "relative",
    borderColor: "transparent",
  };

  const CardTitleTheme: CSSProperties = {
    color: "#FFF",
    fontSize: "40px",
    fontWeight: 900,
    lineHeight: "48px",
    fontFamily: "inherit",
    margin: 0,
  };

  const CardContentTheme: CSSProperties = {
    color: "#FFF",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "26px",
    margin: 0,
  };

  const ButtonFloat: CSSProperties = {
    position: "absolute",
    right: "100px",
    top: "65px",
    padding: "18px 12px",
    height: "20px",
    display: "flex",
    borderRadius: "100px",
    backgroundColor: "#e8e8e8",
    gap: "8px",
    maxWidth: "72px",
    alignItems: "center",
    justifyContent: "center",
  };

  return {
    CardContainerTheme,
    CardContentTheme,
    CardTitleTheme,
    ButtonFloat,
  };
}

export default StylesSider;
