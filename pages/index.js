import Head from "next/head";
import Homepage from "../components/pages/home/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bizlagos</title>
        <meta name="description" content="Find businesses in Lagos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}
