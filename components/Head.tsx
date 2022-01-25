import Head from "next/head";
import { useRouter } from "next/router";

const head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const meta = {
    title: "Raghvendra Singh – Front-end Developer",
    description: `Frontend developer and JavaScript enthusiast.`,
    // image: "https://rsinghcodes.vercel.app/static/images/banner.png",
    type: "website",
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      {/* <meta
          property="og:url"
          content={`https://rsinghcodes.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://rsinghcodes.vercel.app${router.asPath}`}
        /> */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Raghvendra Singh" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@raghvendrrsingh" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {/* <meta name="twitter:image" content={meta.image} /> */}
    </Head>
  );
};

export default head;
