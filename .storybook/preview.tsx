import React from 'react';
import type { Preview } from "@storybook/react";
import ThemeProviderComponents from "../src/shared/styles/theme/theme-provider";
import GlobalStyles from "../src/shared/styles/GlobalStyles";
import componentsTheme from '../src/shared/styles/theme/component';
// antd
import { ConfigProvider } from 'antd';
// font
import { PFDinTextPro } from '../src/shared/styles/FontFamily';
import "antd/dist/reset.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProviderComponents>
        <ConfigProvider
          theme={{
            token: {
              // default font
              fontFamily: PFDinTextPro.style.fontFamily,
              fontSize: 16,
              lineHeight: 1.5,
              colorText: '#212121',
              colorTextSecondary: '#6E6E6E',
            },
            components: componentsTheme,
          }}
        >
          <main className={PFDinTextPro.className}>
            <Story />
          </main>
        </ConfigProvider>

        <GlobalStyles />
      </ThemeProviderComponents>
    ),
  ],
};

export default preview;
