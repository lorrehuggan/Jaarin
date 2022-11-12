import React from "react";
import Button from "../../../components/ui/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import {
  SiUbereats,
  SiUber,
  SiDeliveroo,
  SiJusteat,
  SiLyft,
  SiDoordash,
  SiGrubhub,
  SiPostmates,
  SiInstacart,
} from "react-icons/si";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="pt-8">
      <div className="text-center">
        <span className=" uppercase text-base-dark-300">Public Beta</span>
      </div>
      <h1 className="mt-8 text-center text-4xl font-black tracking-tighter xl:text-9xl">
        The finance{" "}
        <span className="bg-gradient-to-br from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
          tracking
        </span>{" "}
        platform for service nomads
      </h1>
      <p className="mx-auto mt-8 text-center xl:w-2/3 xl:text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        quibusdam temporibus placeat quos nemo quo nostrum nam amet recusandae
        perferendis rerum praesentium iusto, asperiores tempora ratione officia
        dolor, voluptatum explicabo!
      </p>

      <div className="mt-8 flex items-center justify-center">
        <Link href="/dashboard">
          <Button theme="primary" size="lg">
            <a className="flex items-center gap-1">
              <span>Get Started</span>
              <ChevronDoubleRightIcon className="h-4 w-4" />
            </a>
          </Button>
        </Link>
      </div>
      <div className="mt-16">
        <div className="mt-4 flex items-center justify-between">
          <SiUbereats
            title="uber eats"
            aria-label="uber eats"
            className="h-16 w-16 text-base-dark-300"
          />
          <SiUber className="h-16 w-16 text-base-dark-300" />
          <SiJusteat className="h-16 w-16 text-base-dark-300" />
          <SiLyft className="h-16 w-16 text-base-dark-300" />
          <SiDeliveroo className="h-16 w-16 text-base-dark-300" />
          <SiGrubhub className="h-16 w-16 text-base-dark-300" />
          <SiDoordash className="h-16 w-16 text-base-dark-300" />
          <SiPostmates className="h-16 w-16 text-base-dark-300" />
          <SiInstacart className="h-16 w-16 text-base-dark-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
