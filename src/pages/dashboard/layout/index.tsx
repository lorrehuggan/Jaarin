import Head from "next/head";
import React from "react";
import DashboardNav from "../../../components/dashboard/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Jaarin tpi tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <DashboardNav />
        <section className="ml-16 flex h-screen items-center justify-center pt-8">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
