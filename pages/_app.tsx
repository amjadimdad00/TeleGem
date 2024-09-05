import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/TeleGem.png" type="image/x-icon" />
        <title>TeleGem</title>
        <meta
          name="description"
          content="TeleGem 📺 is a TV serial app with a curated selection of your favorite shows and custom-picked serials. Designed with a Blossom theme 🌸, it blends engaging dramas with heartfelt messages for a personalized viewing experience. Simple, elegant, and meaningful, TeleGem 📺 enhances your TV moments with a touch of charm. ❤️✨"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
