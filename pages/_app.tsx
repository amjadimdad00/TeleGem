import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <title>StreamVerse</title>
        <meta
          name="description"
          content="StreamVerse: A personalized streaming platform featuring custom series, drama episodes, anime, and a unique section for heartfelt apologies."
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
