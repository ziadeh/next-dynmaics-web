"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";

const industries = [
  {
    title: "Financial Services",
    description:
      "At Next Dynamics, we develop custom applications to meet the unique needs of the Life Sciences industry. From enhancing clinical operations to improving patient engagement, our customer-obsessed, user-driven development approach ensures every solution is built to deliver measurable impact.",
    link: "/financial-services",
  },
  {
    title: "Life Sciences",
    description:
      "At Next Dynamics, we develop custom applications to meet the unique needs of the Life Sciences industry. From enhancing clinical operations to improving patient engagement, our customer-obsessed, user-driven development approach ensures every solution is built to deliver measurable impact.",
    link: "/life-sciences",
  },
  {
    title: "Consumer Packaged Goods (CPG)",
    description:
      "At Next Dynamics, we empower Consumer Packaged Goods (CPG) companies to thrive in an increasingly competitive and fast-paced market. Through custom-built applications and a focus on digital transformation, we help you modernize operations, improve decision-making, and create exceptional customer experiences.",
    link: "/consumer-packaged-goods",
  },
  {
    title: "Manufacturing",
    description:
      "At Next Dynamics, we empower manufacturers to excel in a rapidly evolving industry. Through custom-built applications and a focus on digital transformation, we help you streamline operations, improve productivity, and achieve operational excellence.",
    link: "/manufacturing",
  },
];

function HomeIndustries() {
  return (
    <div className="-mt-32 flex flex-row justify-center bg-[url(/bg-lines.svg)]">
      <div className="container pb-32 pt-44">
        <h2 className="text-semibold mb-8 px-10 pb-24 text-2xl text-white lg:mb-20 lg:text-5xl">
          Industries
        </h2>
        <div>
          <Accordion type="single" collapsible className="w-full gap-10">
            {industries.map((industry, index) => (
              <AccordionItem
                className="mb-7"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="via- text-md bg-gradient-to-r from-nd-primary-600 from-25% via-nd-primary-600 px-4 font-semibold text-white !no-underline transition-all duration-500 hover:bg-red-600 hover:opacity-90 lg:px-20 lg:text-lg">
                  {industry.title}
                </AccordionTrigger>
                <AccordionContent className="">
                  <div className="bg-gradient-to-r from-nd-primary-600/50 from-25% via-nd-primary-600/50 p-10 transition-all duration-500">
                    <p className="text-white">{industry.description}</p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="mx-auto mt-10 block border border-nd-primary-600 bg-nd-secondary-950 text-white duration-300 hover:text-nd-secondary-950 active:bg-white/50"
                    >
                      <Link href={"/industries/" + industry.link}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default HomeIndustries;
