import Link from "next/link";
import React from "react";
import Button from "../../ui/button/Button";
import { Bars3Icon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { logoVariants } from "./animations";

const Nav: React.FC = () => {
  return (
    <nav className="flex h-16 items-center border-b-[0.25px] border-b-base-dark-300 bg-base-dark-200">
      <div className="landing-page-width relative flex  items-center justify-center">
        <div
          className="absolute left-0 flex items-center gap-1
      "
        >
          <CurrencyDollarIcon className=" h-5 w-5 fill-primary  xl:h-8 xl:w-8" />
          <Link aria-label="Link to home page" href="/">
            <motion.a
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="color-transition group cursor-pointer text-xl font-bold uppercase tracking-tighter hover:text-primary xl:text-3xl"
            >
              Jaarin
            </motion.a>
          </Link>
        </div>
        <Bars3Icon
          className="absolute right-0 h-6 w-6 md:hidden"
          title="open menu"
        />
        <ul className="md:just-b hidden gap-2 text-sm">
          <Link aria-label="Link to contact" href="/contact">
            <a className="color-transition hover:text-primary">Contact</a>
          </Link>
          <Link aria-label="link to pricing" href="/pricing">
            <a className="color-transition hover:text-primary">Pricing</a>
          </Link>
        </ul>
        <div className="absolute right-0 hidden items-center gap-4 md:flex">
          <Button theme="invisible" size="md">
            Sign Up
          </Button>
          <Button theme="primary-outline" size="md">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
