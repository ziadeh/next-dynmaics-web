import { SiteBannerB } from "@/components/blocks";
import LetsBuild from "@/components/blocks/LetsBuild";
import Image from "next/image";
import React from "react";

const siteBanner = {
  title: "Rapid Prototyping",
  content:
    "At Next Dynamics, we understand that turning visionary ideas into reality starts with validating concepts early. Our Rapid Prototyping service accelerates your innovation journey by creating functional prototypes that help you test, refine, and align your vision before full-scale development.",
  image: "/images/rapid-prototyping.jpg",
};

const rapidPrototypingFeatures = [
  {
    title: "Idea Validation",
    content:
      "Quickly bring concepts to life to assess feasibility and gather early stakeholder feedback.",
    image: "idea-validation.svg",
  },
  {
    title: "Iterative Prototyping",
    content:
      "Use an agile, iterative approach to refine prototypes based on real-time input and evolving requirements.",
    image: "iterative-prototyping.svg",
  },
  {
    title: "Cost-Efficient Exploration",
    content:
      "Reduce risks and optimize budgets by identifying potential challenges early in the process.",
    image: "cost-efficient.svg",
  },
  {
    title: "Cross-Functional Collaboration",
    content:
      "Engage with our expert team to ensure prototypes align with both business goals and technical feasibility.",
    image: "collaboration.svg",
  },
  {
    title: "Accelerated Timelines",
    content:
      "Deliver functional prototypes within weeks, empowering you to make informed decisions faster.",
    image: "accelerated-time.svg",
  },
];

const whyChoose = [
  { title: "Validate ideas quickly and confidently." },
  { title: "Gain stakeholder buy-in with tangible results." },
  { title: "Minimize development risks and save costs." },
  {
    title:
      "Ensure alignment with business goals before committing to full-scale development.",
  },
];

const letsBuild = {
  title: "Let’s Build Your Next Big Idea",
  content:
    "Contact us to explore how our rapid prototyping service can help you innovate with confidence.",
  subContent: "",
  buttonText: "Let's Build",
};

const wrapElements = (
  elements: JSX.Element[],
  key: number,
  isLastRow: boolean,
): JSX.Element => (
  <React.Fragment key={key}>
    <div className="flex flex-wrap justify-center">{elements}</div>
  </React.Fragment>
);

const renderItems = () => {
  const rows: JSX.Element[] = [];
  let currentRow: JSX.Element[] = [];

  rapidPrototypingFeatures.forEach((item, index) => {
    currentRow.push(
      <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
        <div className="xl:py-15 xl:px-13 group relative overflow-hidden px-4 py-8 text-center transition-all hover:bg-nd-secondary-800/10 sm:py-10 lg:px-8">
          <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            {item.image ? (
              <Image
                src={`/images/${item.image}`}
                alt=""
                className="invert"
                width={32}
                height={32}
              />
            ) : null}
          </span>
          <h4 className="mb-4 text-lg font-semibold text-white">
            {item.title}
          </h4>
          <p className="font-light text-nd-secondary-100">{item.content}</p>
        </div>
      </div>,
    );

    // If the row is full (3 items) or it's the last item, wrap it
    if (
      currentRow.length === 3 ||
      index === rapidPrototypingFeatures.length - 1
    ) {
      const isLastRow = index === rapidPrototypingFeatures.length - 1;
      rows.push(wrapElements(currentRow, rows.length, isLastRow));
      currentRow = []; // Start a new row
    }
  });

  return rows;
};

function RapidPrototyping() {
  return (
    <section className="pt-35 xl:pt-45 relative z-10 overflow-hidden pt-40">
      <SiteBannerB {...siteBanner} />
      <div className="mt-20">
        <div className="container mx-auto max-w-[1222px]">
          <div className="relative">
            <div className="features-row-border h-[1px] w-full" />
            <br />
            {renderItems()}
            <div className="features-row-border h-[1px] w-full" />
          </div>
        </div>
      </div>

      <div className="bg-nd-secondary-900/20 py-3">
        <div className="mx-auto mb-32 mt-20 max-w-[1222px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[630px] overflow-hidden">
                <Image
                  src="/images/img-container.svg"
                  alt=""
                  className="absolute bottom-0 left-0 top-0 h-[250px] w-full lg:h-[500px]"
                  width={630}
                  height={630}
                />
                <div className="mx-auto h-full w-40 overflow-hidden lg:w-[320px]">
                  <Image
                    src="/images/software.jpg"
                    alt="Next Dynamics Inc."
                    className="h-[250px] w-full object-cover object-center lg:h-[500px]"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-semibold mb-14 px-8 text-left text-2xl text-white lg:px-0 lg:text-5xl">
                Why Choose Rapid Prototyping?
              </h2>
              <div className="text-sm text-white">
                {whyChoose.map((item, index) => {
                  return (
                    <div
                      className="flex items-start border-b border-nd-secondary-900 py-5 last:border-b-0 last:pb-0"
                      key={index}
                    >
                      <div className="mr-5 w-8">
                        <Image
                          width={32}
                          height={32}
                          alt=""
                          className="h-8 w-8"
                          src="/images/nd-arrow.svg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading mb-2 text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LetsBuild {...letsBuild} />
    </section>
  );
}

export default RapidPrototyping;
