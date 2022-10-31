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
    <nav className="fixed top-0 left-0 flex h-screen w-16 flex-col items-center justify-between border-r border-base-dark-300 border-b-base-dark-300 bg-base-dark-200 py-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <NavIcon href="">
          <HomeIcon className="color-transition h-4 w-4 group-hover:text-primary" />
        </NavIcon>
        <NavIcon href="">
          <BarChartIcon className="color-transition h-4 w-4 group-hover:text-primary" />
        </NavIcon>
        <NavIcon href="">
          <PersonIcon className="color-transition h-4 w-4 group-hover:text-primary" />
        </NavIcon>
        <NavIcon href="">
          <PlusIcon className="color-transition h-4 w-4 group-hover:text-primary" />
        </NavIcon>
      </div>
      <div>
        <NavIcon href="/" ariaLabel="link back to home page">
          <ResetIcon className="color-transition h4 w-4 group-hover:text-primary" />
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
        className="color-transition group flex items-center justify-center rounded-sm bg-base-dark-300 p-3 hover:bg-base-dark "
      >
        {children}
      </a>
    </Link>
  );
};
