import React from "react";
import Link from "next/link";

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
        className="color-transition group flex items-center justify-center rounded-sm bg-base-dark-300 p-3 hover:bg-base-dark"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavIcon;
