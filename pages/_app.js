import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { UserProvider } from "@/contexts/userContext";
import { CartContext, CartProvider } from "../contexts/cartContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Layout>
            <Head>
              <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <NextNProgress />
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </UserProvider>
    </>
  );
}
