import React from "react";
import Button from "../ui/Button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const Hero: React.FC = () => {
  return (
    <section className="pt-8">
      <div className="text-center text-xs uppercase">
        <span>Public Beta</span>
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
        <Button theme="primary" size="lg">
          <div className="flex items-center gap-1">
            <span>Get Started</span>
            <ChevronDoubleRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
