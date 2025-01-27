import { SiteBannerB, WhatWeOffer } from "@/components/blocks";
import BoxesList from "@/components/blocks/BoxesList";
import ImageRightList from "@/components/blocks/ImageRightList";
import LetsBuild from "@/components/blocks/LetsBuild";
import SiteBanner from "@/components/blocks/SiteBanner";
import TitleContentBgImage from "@/components/blocks/TitleContentBgImage";
import React from "react";

const banner = {
  title: "Empowering Financial Services with Custom-Built Solutions",
  content:
    "At Next Dynamics, we develop custom applications to meet the unique needs of the Life Sciences industry. From enhancing clinical operations to improving patient engagement, our customer-obsessed, user-driven development approach ensures every solution is built to deliver measurable impact.",
  subContent:
    "With a focus on digital transformation and a customer-obsessed, user-driven development approach, we create solutions that tackle your unique challenges—from ensuring regulatory compliance to equipping your teams with tools that foster stronger client relationships.",
  image: "/images/custom-built-2.jpg",
  className: "",
};

const boxesList = [
  {
    title: "Digital Customer Engagement Platforms",
    content:
      "Build self-service platforms that enable customers to access services, manage accounts, and make transactions securely and conveniently, boosting satisfaction and loyalty.",
    image: "hand.svg",
  },
  {
    title: "Predictive Analytics for Personalized Financial Solutions",
    content:
      "Leverage data-driven models to offer tailored financial products, predict customer needs, and enhance decision-making.",
    image: "chart.svg",
  },
  {
    title: "Risk Management Tools",
    content:
      "Create solutions that help your teams analyze risks, comply with regulations, and make informed decisions to safeguard your organization.",
    image: "check.svg",
  },
  {
    title: "Wealth and Investment Management Systems",
    content:
      "Build platforms that streamline portfolio management, improve financial planning, and provide personalized investment insights for clients.",
    image: "bar-chart.svg",
  },
  {
    title: "Automation for Back-Office Operations",
    content:
      "Automate routine tasks such as document processing, reporting, and compliance checks to reduce errors and enhance operational efficiency.",
    image: "gear.svg",
  },
];

const digitalTransformation = {
  title: "Digital Transformation with Purpose",
  content:
    "We help financial institutions embrace digital transformation with customized solutions that integrate advanced technologies:",
  image: "/images/nd-arrow.svg",
  list: [
    {
      title: "AI-Driven Features for Optimization",
      content:
        "Use AI to improve loan underwriting, customer segmentation, and financial forecasting.",
      image: "/images/ai-driven.svg",
    },
    {
      title: "Cloud-Based Platforms",
      content:
        "Build secure, scalable systems that support seamless data sharing, collaboration, and remote operations.",
      image: "/images/cloud-based.svg",
    },
    {
      title: "Blockchain Integration",
      content:
        "Enhance transparency and security in transactions with custom blockchain solutions tailored to your business needs.",
      image: "/images/blockchain.svg",
    },
    {
      title: "Automation Tools",
      content:
        "Reduce manual workloads and improve accuracy by automating processes like data reconciliation, account maintenance, and compliance tracking.",
      image: "/images/automation.svg",
    },
  ],
};

const imageRightList = {
  title: "Why Choose Next Dynamics?",
  content: "",
  image: "/images/empowering-financial-2.jpg",
  list: [
    {
      title: "Industry Expertise",
      content:
        "With a deep understanding of the financial services sector, we address key challenges such as compliance, risk management, and customer engagement.",
    },
    {
      title: "Custom Solutions for Financial Services",
      content:
        "Every application we develop is tailored to your organization’s specific requirements and goals.",
    },
    {
      title: "Focused on Digital Transformation",
      content:
        "We align technology with your vision to help you stay competitive in a rapidly changing financial landscape.",
    },
    {
      title: "User-Centric Approach",
      content:
        "Our intuitive solutions are designed to enhance both employee and customer experiences, ensuring adoption and long-term success.",
    },
    {
      title: "Scalable, Future-Proof Technology",
      content:
        "Our systems grow with your organization and adapt to new technologies and regulatory demands, ensuring lasting value.",
    },
  ],
};

const titleContentBgImage = {
  title: "Transform Your Business with Next Dynamics",
  content:
    "At Next Dynamics, we’re dedicated to helping financial institutions navigate the digital age with confidence. Whether you’re building self-service platforms to engage customers, leveraging predictive analytics for tailored financial solutions, or automating critical processes, our custom-built applications and digital transformation expertise will empower your success.",
  image: "/images/custom-built-2.jpg",
};

const letsBuild = {
  title: "Contact us today",
  content:
    "Contact us today to learn how we can help you optimize your financial services with innovative, tailored solutions.",
  subContent: "",
  buttonText: "Contact Us",
};
function FinancialServices() {
  return (
    <section className="pt-35 xl:pt-45 relative z-10 overflow-hidden pt-40">
      <SiteBannerB {...banner} />
      <div className="mx-auto mb-20 mt-32 max-w-[1222px]">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-semibold px-8 text-center text-2xl text-white lg:px-0 lg:text-4xl">
            Tailored Solutions for the Financial Services Industry
          </h2>
          <p className="mb-10 mt-6 text-center text-sm text-white">
            Our expertise in creating custom applications empowers financial
            institutions to stay competitive and agile while addressing critical
            industry needs:
          </p>
        </div>
        <BoxesList invertIcons={false} listItems={boxesList} />
      </div>
      <WhatWeOffer {...digitalTransformation} />
      <div className="mt-8">
        <ImageRightList {...imageRightList} />
      </div>
      <TitleContentBgImage {...titleContentBgImage} />
      <LetsBuild {...letsBuild} />
    </section>
  );
}

export default FinancialServices;
