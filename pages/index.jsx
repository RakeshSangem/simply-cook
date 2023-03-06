import Head from "next/head";
import Home from "@/components/Home";

export default function Hero() {
  return (
    <>
      <Head>
        <title>SimplyCook</title>
        <meta name="description" content="A platform to get recipe details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Home />
    </>
  );
}
