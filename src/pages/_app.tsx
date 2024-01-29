import "antd/dist/reset.css";
import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import ThemeProviderComponents from "@/shared/styles/theme/theme-provider";
import withTheme from "@/shared/styles/theme";
import GlobalStyles from "@/shared/styles/GlobalStyles";
import "@/shared/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProviderComponents>
          {withTheme(<Component {...pageProps} />)}
          <GlobalStyles />
        </ThemeProviderComponents>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
