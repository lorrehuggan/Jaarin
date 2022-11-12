import type { NextPage } from "next";
import PageLayout from "@components/layout/PageLayout";
import Hero from "@components/landing-page/hero/Hero";

const Home: NextPage = () => {
  return (
    <PageLayout title='Jaarin' description='Glass door for odd jobs'>
      <Hero />
    </PageLayout>
  );
};

export default Home;
