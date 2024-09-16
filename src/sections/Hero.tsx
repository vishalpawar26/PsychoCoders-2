"use client";

import Image from "next/image";
import React from "react";

import logo from "@public/assets/psychocoders.svg";
import javascript from "@public/assets/javascript.svg";
import python from "@public/assets/python.svg";
import cplusplus from "@public/assets/cplusplus.svg";
import coding from "@public/assets/coding.svg";
import { strings } from "@/constants/strings";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="grid h-screen w-full grid-cols-1 px-4 md:grid-cols-4 md:px-8">
      <div className="hidden h-full flex-col items-center justify-evenly md:flex">
        <Image
          src={javascript}
          alt="JavaScript"
          width={128}
          className="-rotate-12 pl-12"
        />
        <Image
          src={python}
          alt="Python"
          width={96}
          className="rotate-[15deg]"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <Image src={logo} alt="main" width={384} />
        <div className="absolute z-20 w-[90%] text-center sm:w-[80%]">
          <h1 className="pb-4 text-3xl font-extrabold text-off-white sm:pb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            {strings.primaryHeading}
          </h1>
          <h3 className="font-semibold text-neutral-400 sm:text-lg">
            {strings.secondaryHeading}
          </h3>
          <Button
            lable="Create Account"
            onClick={() => {}}
            variant="filled"
            className="mt-8 text-lg"
          />
        </div>
      </div>
      <div className="hidden flex-col items-center justify-evenly md:flex">
        <Image
          src={cplusplus}
          alt="JavaScript"
          width={128}
          className="rotate-12 pb-12"
        />
        <Image
          src={coding}
          alt="Python"
          width={128}
          className="-rotate-[30deg] pr-8"
        />
      </div>
    </section>
  );
};

export default Hero;
