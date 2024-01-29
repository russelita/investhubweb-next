// next
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const OpenSans = localFont({
  src: [
    {
      path: "../font/OpenSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/OpenSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const MontserratFont = Montserrat({ subsets: ["latin"] });
