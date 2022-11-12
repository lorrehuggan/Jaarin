import React from "react";
import Nav from "@components/landing-page/navigation";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const PageLayout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="landing-page-width">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
