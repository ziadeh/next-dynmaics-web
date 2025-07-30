import PartnerWithUsInner from "@/components/blocks/PartnerWithUsInner";
import Image from "next/image";
import React from "react";
import classes from "@/styles/stars.module.css";
import { Button } from "@/components/ui/button";
import { SiteBannerB } from "@/components/blocks";
import LetsBuild from "@/components/blocks/LetsBuild";

const letsBuild = {
  title: "Build the Right Product, the Right Way",
  content:
    "With Next Dynamics, you gain more than a service—you gain a partner dedicated to transforming your ideas into a strategy for success. Whether you’re launching a new product or optimizing an existing one, our Product Strategy and Design service sets you on the path to measurable impact.",
  subContent:
    "Contact us today to explore how we can help you craft a winning product strategy and design.",
  buttonText: "Let’s Design Your Success",
};

const whatWeOffer = [
  {
    title: "User Research and Insights",
    content:
      "Gain a deep understanding of your audience’s needs, behaviors, and pain points to inform design decisions.",
    image: "insights.svg",
  },
  {
    title: "Market Analysis",
    content:
      "Identify opportunities, trends, and competitive advantages to position your product for success.",
    image: "analysis.svg",
  },
  {
    title: "Vision and Roadmapping",
    content:
      "Define your product’s long-term vision and translate it into a phased, actionable roadmap.",
    image: "vision.svg",
  },
  {
    title: "Experience Design",
    content:
      "Design intuitive, engaging user experiences that resonate with your target audience.",
    image: "ux.svg",
  },
  {
    title: "Feature Prioritization",
    content:
      "Focus on delivering the most impactful features to maximize value and drive measurable outcomes.",
    image: "outcomes.svg",
  },
  {
    title: "Design Prototyping",
    content:
      "Create high-fidelity mockups and design concepts to visualize and refine your product’s interface and functionality.",
    image: "prototyping.svg",
  },
];

const productStrategy = [
  {
    title: "Strategic Alignment",
    content:
      "Ensure your product’s vision and design align with business objectives and user needs.",
  },
  {
    title: "Market-Driven Approach",
    content:
      "Leverage data and insights to craft a product strategy that stands out in the market.",
  },
  {
    title: "User-Centric Design",
    content:
      "Prioritize usability and engagement to enhance customer satisfaction and adoption.",
  },
  {
    title: "Actionable Roadmaps",
    content:
      "Turn ambitious ideas into clear, executable plans that guide the entire development process.",
  },
  {
    title: "Foundation for Success",
    content:
      "Lay the groundwork for efficient development and impactful product outcomes.",
  },
];

const siteBanner = {
  title: "Product Strategy and Design",
  content:
    "At Next Dynamics, we understand that successful products start with a clear vision and a thoughtful strategy. Our Product Strategy and Design service helps you define and refine your product’s direction, ensuring alignment with your business goals, market needs, and user expectations. From initial concept to a detailed roadmap, we partner with you to create a strong foundation for impactful product development.",
  image: "/images/service-2.jpg",
};
function ProductStrategy() {
  const wrapElements = (
    elements: JSX.Element[],
    key: number,
    isLastRow: boolean,
  ): JSX.Element => (
    <React.Fragment key={key}>
      <div className="flex flex-wrap justify-center">{elements}</div>
      {!isLastRow && <div className="features-row-border h-[1px] w-full" />}
    </React.Fragment>
  );

  const renderItems = () => {
    const rows: JSX.Element[] = [];
    let currentRow: JSX.Element[] = [];

    whatWeOffer.forEach((item, index) => {
      currentRow.push(
        <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
          <div className="xl:py-15 xl:px-13 group relative overflow-hidden px-4 py-8 text-center transition-all hover:bg-nd-secondary-800/10 sm:py-10 lg:px-8">
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
              {item.image ? (
                <Image
                  src={`/images/${item.image}`}
                  alt=""
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
      if (currentRow.length === 3 || index === whatWeOffer.length - 1) {
        const isLastRow = index === whatWeOffer.length - 1;
        rows.push(wrapElements(currentRow, rows.length, isLastRow));
        currentRow = []; // Start a new row
      }
    });

    return rows;
  };

  return (
    <section className="pt-35 xl:pt-45 relative z-10 overflow-hidden pt-40">
      <SiteBannerB {...siteBanner} />
      <div className="mx-auto mb-20 mt-32 max-w-[1222px]">
        <h2 className="text-semibold mb-14 px-8 text-center text-2xl text-white lg:px-0 lg:text-5xl">
          What We Offer
        </h2>
        <div className="relative">
          <div className="features-row-border absolute left-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 lg:block lg:-translate-x-1/3" />
          <div className="features-row-border absolute right-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:right-[8.3%] lg:block" />
          {renderItems()}
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
                Why Choose Product Strategy and Design?
              </h2>
              <div className="text-sm text-white">
                {productStrategy.map((item, index) => {
                  const isLastRow = index === productStrategy.length - 1;
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
                        <p className="leading-loose">{item.content}</p>
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
      {/* <PartnerWithUsInner /> */}
    </section>
  );
}

export default ProductStrategy;
