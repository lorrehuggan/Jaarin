import React from "react";
//import { signIn, useSession, getSession } from "next-auth/react";
import type { GetServerSideProps } from "next";
import Button from "../../../components/ui/button/Button";

const SignIn: React.FC = () => {
  const handleSignIn = () => {
    //signIn();
  };
  return (
    <div>
      <Button onClick={handleSignIn} theme="primary" size="lg">
        Google
      </Button>
    </div>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};
