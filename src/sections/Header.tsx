"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@public/logos/Logo-white.svg";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="z-50 m-auto w-full min-w-80 bg-eerie-black">
      <div className="grid h-[50px] w-full grid-flow-row grid-cols-2 items-center px-4 md:grid-cols-4 md:border-b md:border-davy-gray md:px-8">
        <Link href="/" className="w-fit">
          <Image src={logo} alt="PC-logo" height={24} width={24} />
        </Link>
        <Navbar className="col-span-2 hidden h-full md:flex md:justify-start lg:justify-center" />
        <div className="hidden gap-4 md:flex md:items-center md:justify-end">
          <Button
            lable="Login"
            variant="outline"
            onClick={() => {}}
            className="text-sm"
          />
          <Button
            lable="Signup"
            variant="filled"
            onClick={() => {}}
            className="text-sm"
          />
        </div>
        <button onClick={toggleMenu} className="flex justify-end md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-50 flex w-full flex-col gap-6 overflow-hidden border-b border-b-davy-gray bg-eerie-black px-4 py-4 md:hidden md:px-8">
          <div className="flex gap-4">
            <Button
              lable="Login"
              variant="outline"
              onClick={() => {}}
              className="text-sm"
            />
            <Button
              lable="Signup"
              variant="filled"
              onClick={() => {}}
              className="text-sm"
            />
          </div>
          <Navbar className="flex md:hidden" />
        </div>
      )}
    </header>
  );
};

export default Header;
