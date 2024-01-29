import React from "react";

// antd
import { ConfigProvider } from "antd";

// font
import { OpenSans } from "../FontFamily";

// theme

// next
import componentsTheme from "./component";
import Layout from "@/shared/components/layout";

// component
// import ModalDefaultComponent from 'src/shared/components/ModalDefaultComponent';
// import ContextMessageDefault from 'src/shared/components/ContextMessageDefault';
// import GlobalLoadingSpin from 'src/shared/components/GlobalLoadingSpin';

// const Layout = dynamic(() => import('src/layout'), { ssr: false });

const withTheme = (node: React.ReactNode) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          // default font
          fontFamily: OpenSans.style.fontFamily,
          fontSize: 16,
          lineHeight: 1.5,
          colorText: "#212121",
          colorTextSecondary: "#6E6E6E",
        },
        components: componentsTheme,
      }}
    >
      <main className={OpenSans.className}>
        {/* <GlobalLoadingSpin> */}
        <Layout>{node}</Layout>
        {/* </GlobalLoadingSpin> */}

        {/* <ModalDefaultComponent /> */}

        {/* <ContextMessageDefault /> */}
      </main>
    </ConfigProvider>
  </>
);

export default withTheme;
