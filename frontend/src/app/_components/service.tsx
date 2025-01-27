import ImageTitleList from "@/components/blocks/ImageTitleList";
import PartnerWithUsInner from "@/components/blocks/PartnerWithUsInner";
import SiteBanner from "@/components/blocks/SiteBanner";
import WhatWeOffer from "@/components/blocks/WhatWeOffer";
import React from "react";
const banner = {
  title: "Custom Software Development",
  content:
    "When it’s time to bring your validated vision to life, our Custom Software Development service delivers tailored solutions that drive measurable success.",
  image: "/images/service-2.jpg",
  className: "max-w-lg lg:max-w-lg",
};

const imageTitleList = {
  title: "Why Choose Custom Software Development?",
  content: "",
  list: [
    {
      title:
        "Transform visionary goals into functional, impactful applications.",
      image: "/images/goals.jpg",
    },
    {
      title:
        "Collaborate with an expert team for tailored, high-quality solutions.",
      image: "/images/expert.jpg",
    },
    {
      title:
        "Achieve measurable results, from operational efficiency to revenue growth.",
      image: "/images/growth.jpg",
    },
    {
      title: "Ensure seamless integration with your existing infrastructure.",
      image: "/images/integration.jpg",
    },
  ],
};

const whatWeOffer = [
  {
    title: "Vision-to-Roadmap Translation",
    content:
      "Break down high-level goals into clear, actionable release roadmaps for effective project execution.",
    image: "/images/roadmaps.svg",
  },
  {
    title: "End-to-End Development",
    content:
      "From ideation to deployment and beyond, we manage every stage of the software development lifecycle.",
    image: "/images/development.svg",
  },
  {
    title: "Scalable Solutions",
    content:
      "Build software that adapts and grows with your business, ensuring future-readiness.",
    image: "/images/solutions.svg",
  },
  {
    title: "Integration Expertise",
    content:
      "Seamlessly connect new tools with your existing systems for maximum efficiency.",
    image: "/images/expertise.svg",
  },
  //   {
  //     title: "User-Centric Design",
  //     content:
  //       "Prioritize intuitive and engaging user experiences to maximize adoption.",
  //   },
];

const whatWeOfferProps = {
  title: "What We Offer",
  list: whatWeOffer,
};

function Service() {
  return (
    <div>
      <SiteBanner {...banner} />
      <WhatWeOffer {...whatWeOfferProps} />
      <ImageTitleList {...imageTitleList} />
      <PartnerWithUsInner />
    </div>
  );
}

export default Service;
