import React from "react";

import classes from "../../styles/stars.module.css";
import { Button } from "../ui/button";

function PartnerWithUsInner() {
  return (
    <section className="relative z-20 -mt-20 overflow-hidden bg-[url(/images/bg-black.jpg)] pb-12 pt-20 lg:pt-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="relative top-16 z-30">
          <div className="pointer-events-none absolute inset-0 -z-20 -my-56 overflow-hidden opacity-70">
            <div className="absolute left-1/2 top-16 -translate-x-1/2">
              <img
                src="/images/blur-13.svg"
                alt="blur"
                className="max-w-none"
              />
            </div>
            <div className="absolute left-1/2 top-16 -translate-x-1/2">
              <img
                src="/images/blur-14.svg"
                alt="blur"
                className="max-w-none"
              />
            </div>
            <div className="absolute left-1/2 top-16 -translate-x-1/2">
              <img
                src="/images/blur-15.svg"
                alt="blur"
                className="max-w-none"
              />
            </div>
          </div>
          <div className="bg-dark nd-custom-circle absolute left-1/2 top-0 h-[830px] w-full max-w-[830px] -translate-x-1/2 rounded-full">
            &nbsp;
          </div>
          <div className="absolute -top-32 left-1/2 -z-10 h-64 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className={classes.stars}></div>
            <div className={classes.stars2}></div>
          </div>
        </div>
        <div className="gap-7.5 -z-1 relative flex justify-center">
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="nd-custom-grid nd-custom-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        </div>
        <div className="relative z-30 mx-auto -mt-24 mb-16 max-w-screen-sm text-center">
          <h2 className="xl:text-heading-2 text-nd-primary-600 mb-6 text-2xl font-extrabold sm:text-4xl">
            Partner With Us
          </h2>
          <p className="text-nd-secondary-200 mx-auto mt-4 max-w-[500px] text-sm">
            At Next Dynamics, we are committed to delivering innovative
            solutions that align with your business objectives.
          </p>
          <p className="text-nd-secondary-300 container mt-6 text-sm">
            Our approach combines industry best practices with a deep
            understanding of your unique challenges, ensuring that we deliver
            value at every stage of your project.
          </p>
          <p className="text-nd-secondary-400 container mt-6 text-sm">
            By leveraging our expertise in rapid prototyping and custom software
            development, we help you navigate the complexities of today’s
            digital landscape, turning your visionary ideas into actionable,
            impactful solutions.
          </p>
          <Button className="border-nd-primary-600 bg-nd-secondary-950 hover:text-nd-secondary-950 mx-auto mt-8 block h-full items-center justify-center gap-2 whitespace-nowrap rounded-md border px-12 py-4 text-lg font-medium text-white shadow-sm transition-colors duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:bg-white/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none">
            Let’s Build Together
          </Button>
          <p className="text-nd-secondary-200 mt-5 text-xs">
            Contact us today to discover how our services can help you achieve
            your business goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnerWithUsInner;
