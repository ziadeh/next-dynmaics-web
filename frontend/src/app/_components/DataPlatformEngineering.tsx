import { SiteBannerB } from "@/components/blocks";
import LetsBuild from "@/components/blocks/LetsBuild";
import Image from "next/image";
import React from "react";

const siteBanner = {
  title: "Data and Platform Engineering",
  content:
    "At Next Dynamics, we empower businesses to unlock the full potential of their data and technology ecosystems. Our Data and Platform Engineering service delivers scalable, reliable, and secure solutions that enable you to harness data for actionable insights and build platforms designed for growth. We partner with you to transform your technology infrastructure into a strategic asset, driving efficiency, innovation, and measurable results.",
  image: "/images/data-engineering.jpg",
};

const dataPlatformEngineeringFeatures = [
  {
    title: "Data Architecture and Strategy",
    content:
      "Design and implement robust data frameworks that support seamless integration, scalability, and performance.",
    image: "cost-efficient.svg",
  },
  {
    title: "Cloud Platform Engineering",
    content:
      "Build and optimize cloud-native platforms to enable agility, scalability, and cost efficiency.",
    image: "cost-efficient.svg",
  },
  {
    title: "Data Integration and ETL Pipelines",
    content:
      "Streamline and unify your data sources to ensure real-time availability and accuracy.",
    image: "cost-efficient.svg",
  },
  {
    title: "Data Analytics and Insights",
    content:
      "Leverage advanced analytics to uncover actionable insights and support data-driven decision-making.",
    image: "cost-efficient.svg",
  },
  {
    title: "Platform Modernization",
    content:
      "Transform legacy systems into modern, future-ready platforms that support innovation.",
    image: "cost-efficient.svg",
  },
  {
    title: "Data Governance and Security",
    content:
      "Implement best practices to ensure compliance, protect sensitive information, and maintain data integrity.",
    image: "cost-efficient.svg",
  },
];

const whyChoose = [
  {
    title: "Scalable Solutions",
    content:
      "Build data and platform infrastructures that grow with your business and adapt to evolving needs.",
  },
  {
    title: "Data-Driven Decision-Making",
    content:
      "Unlock actionable insights to drive innovation and optimize operations.",
  },
  {
    title: "Cloud Expertise",
    content:
      "Harness the power of cloud-native technologies to accelerate performance and reduce costs.",
  },
  {
    title: "Future-Ready Platforms",
    content:
      "Modernize your technology stack to stay ahead in a competitive market.",
  },
  {
    title: "Enhanced Reliability and Security",
    content:
      "Ensure your platforms are secure, compliant, and always operational.",
  },
];

const letsBuild = {
  title: "Let’s Build the Future Together",
  content:
    "Contact us today to learn how we can help you engineer data and platforms that drive your business forward.",
  subContent: "",
  buttonText: "Contact Us",
};
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

  dataPlatformEngineeringFeatures.forEach((item, index) => {
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
      index === dataPlatformEngineeringFeatures.length - 1
    ) {
      const isLastRow = index === dataPlatformEngineeringFeatures.length - 1;
      rows.push(wrapElements(currentRow, rows.length, isLastRow));
      currentRow = []; // Start a new row
    }
  });

  return rows;
};

function DataPlatformEngineering() {
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
                    src="/images/data-engineering-2.jpg"
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
                Why Choose Data and Platform Engineering?
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
      <div className="relative py-32">
        <div className="absolute left-0 right-0 top-0 z-10 h-full w-full bg-[url(/images/bg-black.jpg)] bg-cover bg-fixed bg-center bg-no-repeat opacity-20" />
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="relative z-10 text-center">
            <h2 className="mb-4.5 xl:text-heading-2 text-2xl font-semibold text-white sm:text-4xl">
              Empower Your Business with Data and Technology
            </h2>
            <p className="mx-auto mb-9 mt-5 max-w-[714px] text-sm text-nd-secondary-200">
              With Next Dynamics, you gain a partner dedicated to transforming
              your data and platforms into strategic enablers of success.
              Whether you’re building from the ground up or optimizing existing
              infrastructure, our Data and Platform Engineering service delivers
              solutions that create lasting impact.
            </p>
          </div>
        </div>
      </div>
      <LetsBuild {...letsBuild} />
    </section>
  );
}

export default DataPlatformEngineering;
