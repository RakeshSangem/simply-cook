import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  );
}
