import React from "react";
import Menu from "../menu";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="">
      <Menu />
      <section className="">{children}</section>
    </main>
  );
};

export default Layout;
