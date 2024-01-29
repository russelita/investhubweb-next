import Head from 'next/head';
import React from 'react';

interface Props {
	title: string;
	children?: React.ReactNode;
}

const HeadMeta = ({ title, children }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/site.webmanifest`}
      />

      {children}
    </Head>
  );
};

export default HeadMeta;
