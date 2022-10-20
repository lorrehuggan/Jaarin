import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import { Bars3Icon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { logoVariants } from "./animations";

const Nav: React.FC = () => {
  return (
    <nav className=" border-b-[0.25px] border-b-base-light/10">
      <div className="landing-page-width relative flex items-center justify-center py-8">
        <div
          className="absolute left-0 flex items-center gap-1
      "
        >
          <CurrencyDollarIcon className=" h-5 w-5 fill-primary  xl:h-8 xl:w-8" />
          <Link aria-label="Link to home page" href="/">
            <motion.span
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="text-xl font-bold uppercase tracking-tighter xl:text-3xl"
            >
              Jaarin
            </motion.span>
          </Link>
        </div>
        <Bars3Icon
          className="absolute right-0 h-6 w-6 md:hidden"
          title="open menu"
        />
        <ul className="md:just-b hidden gap-2 text-sm">
          <li>Contact</li>
          <li>Pricing</li>
        </ul>
        <div className="absolute right-0 hidden items-center gap-2 md:flex">
          <Button theme="invisible" size="md">
            Sign Out
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
