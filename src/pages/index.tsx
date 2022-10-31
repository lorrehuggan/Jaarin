import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/landing-page/navigation";
import Hero from "../components/landing-page/hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jaarin</title>
        <meta name="description" content="Jaarin tpi tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="landing-page-width">
        <Hero />
      </main>
    </>
  );
};

export default Home;
