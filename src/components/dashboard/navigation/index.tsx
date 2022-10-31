import React from "react";
import {
  HomeIcon,
  BarChartIcon,
  PersonIcon,
  PlusIcon,
  ResetIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const DashboardNav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 flex h-screen w-16 flex-col items-center justify-between border-b-base-dark-300 bg-base-dark-200 py-4 shadow-md">
      <div className="flex flex-col gap-2">
        <NavIcon href="">
          <HomeIcon className="h-6 w-6" />
        </NavIcon>
        <NavIcon href="">
          <BarChartIcon className="h-6 w-6" />
        </NavIcon>
        <NavIcon href="">
          <PersonIcon className="h-6 w-6" />
        </NavIcon>
        <NavIcon href="">
          <PlusIcon className="h-6 w-6" />
        </NavIcon>
      </div>
      <div>
        <NavIcon href="/" ariaLabel="link back to home page">
          <ResetIcon className="h-6 w-6" />
        </NavIcon>
      </div>
    </nav>
  );
};
export default DashboardNav;

interface NavIconProps {
  children: React.ReactNode;
  href: string;
  ariaLabel?: string;
}

const NavIcon: React.FC<NavIconProps> = ({ children, href, ariaLabel }) => {
  return (
    <Link href={href}>
      <a
        aria-label={ariaLabel}
        className="flex items-center justify-center rounded-sm bg-base-dark-300 p-3"
      >
        {children}
      </a>
    </Link>
  );
};
