import React from "react";
import DashboardNav from "../../../components/dashboard/navigation";
import Nav from "../../../components/dashboard/navigation";
import Menu from "../menu";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="">
      <DashboardNav />
      <section className="ml-16 flex h-screen items-center justify-center pt-8">
        {children}
      </section>
    </main>
  );
};

export default Layout;
