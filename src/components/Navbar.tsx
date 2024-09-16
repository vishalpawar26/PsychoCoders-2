import { navlinks } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = ({ className }: { className: string }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex h-full flex-col gap-4 md:flex-row md:gap-6">
        {navlinks.map(({ name, path }: { name: string; path: string }) => (
          <li
            className={`${pathname == path ? "md:border-b-2 md:border-b-off-white" : "md:border-b-2 md:border-b-transparent"} h-full text-neutral-400 transition-colors duration-100 hover:text-off-white md:pt-[14px]`}
            key={name}
          >
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
