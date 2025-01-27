import { WhatWeOffer } from "@/components/blocks";
import BoxesList from "@/components/blocks/BoxesList";
import ImageTitleList from "@/components/blocks/ImageTitleList";
import LetsBuild from "@/components/blocks/LetsBuild";
import SiteBanner from "@/components/blocks/SiteBanner";
import React from "react";

const banner = {
  title:
    "Driving Digital Transformation with Custom-Built Solutions for the CPG Industry",
  content:
    "At Next Dynamics, we empower Consumer Packaged Goods (CPG) companies to thrive in an increasingly competitive and fast-paced market. Through custom-built applications and a focus on digital transformation, we help you modernize operations, improve decision-making, and create exceptional customer experiences.",
  image: "/images/digital-transformation.jpg",
  className: "",
  titleClassName: "text-3xl lg:text-3xl",
};

const boxesList = [
  {
    title: "Supply Chain Optimization Tools",
    content:
      "Build end-to-end solutions to enhance visibility, improve forecasting, and reduce inefficiencies in your supply chain.",
    image: "supply-chain.svg",
  },
  {
    title: "Product Lifecycle Management (PLM)",
    content:
      "Manage your product development processes with tools designed to streamline innovation, ensure compliance, and accelerate time-to-market.",
    image: "product-lifecycle.svg",
  },
  {
    title: "Customer Insights and Analytics",
    content:
      "Develop platforms that turn raw data into actionable insights, helping you understand consumer behavior, predict trends, and make data-driven decisions.",
    image: "insights-s.svg",
  },
  {
    title: "Retail and E-Commerce Solutions",
    content:
      "Create engaging, seamless platforms that connect with consumers directly, improve loyalty, and drive sales across multiple channels.",
    image: "retail.svg",
  },
  {
    title: "Decision Support Systems",
    content:
      "Enable better business decisions with custom applications that provide clear, actionable insights tailored to your operations.",
    image: "support-systems.svg",
  },
  {
    title: "Sustainability Tracking Tools",
    content:
      "Leverage digital solutions to monitor and optimize your sustainability efforts, aligning your operations with growing consumer and regulatory expectations.",
    image: "sustainability.svg",
  },
];

const digitalTransformation = {
  title: "Digital Transformation with Purpose",
  content:
    "We help CPG companies embrace digital transformation by combining cutting-edge technologies with tailored software development",
  list: [
    {
      title: "AI-Driven Features for Optimization",
      content:
        "Incorporate AI to improve demand forecasting, personalize customer experiences, and streamline operational efficiency.",
      image: "/images/ai-driven.jpg",
    },
    {
      title: "IoT Integration",
      content:
        "Enhance supply chain tracking, improve product quality, and monitor assets in real time with IoT-enabled custom applications.",
      image: "",
    },
    {
      title: "Cloud-Based Solutions",
      content:
        "Build scalable, secure platforms that enable collaboration, improve agility, and support remote operations.",
      image: "",
    },
    {
      title: "Automation Tools",
      content:
        "Reduce manual workloads and increase accuracy by automating routine processes such as inventory management and order fulfillment.",
      image: "",
    },
  ],
};
const whatWeOffer = [
  {
    title: "Industry Expertise",
    content:
      "With a deep understanding of the CPG industry, we know the unique challenges you face—from complex supply chains to rapidly changing consumer demands. Our experience allows us to craft solutions that are both innovative and practical, ensuring they deliver measurable results.",
  },
  {
    title: "Custom Solutions for CPG",
    content:
      "Every application we develop is tailored to your specific business challenges and goals.",
  },
  {
    title: "Focused on Digital Transformation",
    content:
      "We align technology with your vision, helping you modernize and stay ahead of the competition.",
  },
  {
    title: "User-Centric Approach",
    content:
      "We design intuitive, easy-to-use tools that empower your team and improve adoption rates.",
  },
  {
    title: "Scalable, Future-Proof Technology",
    content:
      "Our solutions are built to evolve with your business, ensuring long-term value and adaptability.",
  },
];

const whatWeOfferProps = {
  title: "What We Offer",
  list: whatWeOffer,
};

const letsBuild = {
  title: "Transform Your Business with Next Dynamics",
  content:
    "At Next Dynamics, we’re here to help CPG companies succeed in the digital era. Whether you’re reimagining your supply chain, improving consumer engagement, or leveraging data for smarter decision-making, our custom-built applications and digital transformation expertise will guide you every step of the way.",
  subContent: "",
  buttonText: "Contact Us",
};

function ConsumerPackagedGoods() {
  return (
    <div>
      <SiteBanner {...banner} />
      <div className="mx-auto mb-20 mt-32 max-w-[1222px]">
        <h2 className="text-semibold px-8 text-center text-2xl text-white lg:px-0 lg:text-5xl">
          Tailored Solutions for the CPG Industry
        </h2>
        <p className="mb-8 mt-4 text-center text-sm text-white lg:text-base">
          Our expertise in creating custom applications helps you achieve your
          digital transformation goals while addressing key industry challenges
        </p>
        <BoxesList listItems={boxesList} invertIcons={false} />
      </div>
      <div className="mx-auto -mt-16 max-w-[1222px]">
        <ImageTitleList {...digitalTransformation} />
      </div>
      <WhatWeOffer {...whatWeOfferProps} />
      <LetsBuild {...letsBuild} />
    </div>
  );
}

export default ConsumerPackagedGoods;
