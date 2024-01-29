import Head from "next/head";

type PropsMeta = {
  title: string;
  description: string;
  image: string;
  url: string;
};
export default function MetaHead({
  title,
  description,
  image,
  url,
}: PropsMeta) {
  return (
    <Head>
      <title>{`${title} - russelita.com`}</title>
      <meta name="description" content={description} />
      <meta
        property="og:title"
        content="How to Become an SEO Expert (8 Steps)"
      />
      <meta
        property="og:description"
        content="Get from SEO newbie to SEO pro in 8 simple steps."
      />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="id_ID" />
      <meta
        name="twitter:card"
        content="Get from SEO newbie to SEO pro in 8 simple steps."
      />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
    </Head>
  );
}
