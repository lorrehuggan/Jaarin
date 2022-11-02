import React from "react";
//import { signIn, useSession, getSession } from "next-auth/react";
import type { GetServerSideProps } from "next";
import Button from "../../../components/ui/button/Button";
import AuthLayout from "../layout";
import { SiGoogle } from "react-icons/si";
import Link from "next/link";
import { GiMasonJar } from "react-icons/gi";

const SignIn: React.FC = () => {
  const handleSignIn = () => {
    //signIn();
  };
  return (
    <AuthLayout>
      <div className="w-1/4 space-y-4 rounded-md bg-base-dark-200 p-4 ">
        <div className="flex justify-center">
          <GiMasonJar className=" mr-1 h-5 w-5  fill-primary xl:h-8 xl:w-8" />
          <Link href="/">
            <span className="color-transition cursor-pointer text-center text-2xl font-bold hover:text-primary">
              JAARIN
            </span>
          </Link>
        </div>
        <Button onClick={handleSignIn} theme="primary" size="lg" width="full">
          <div className="flex items-center justify-center">
            Sign in with Google
            <SiGoogle className="ml-1 h-4 w-4" />
          </div>
        </Button>
        <p className=" text-center text-sm">
          {`Dont have an account yet?`}
          <a
            href="/auth/signup"
            className=" color-transition ml-1 text-primary hover:text-secondary"
          >
            Sign Up
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};
