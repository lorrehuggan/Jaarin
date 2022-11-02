import StatusBar from "@components/dashboard/statusBar";
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
        <section className="ml-16 h-screen w-[calc(100vw-64px)]">
          <StatusBar />
          <section className="p-4">{children}</section>
        </section>
      </main>
    </>
  );
};

export default Layout;
