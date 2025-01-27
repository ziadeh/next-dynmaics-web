import { WhatWeOffer } from "@/components/blocks";
import BoxesList from "@/components/blocks/BoxesList";
import ImageRightList from "@/components/blocks/ImageRightList";
import ImageTitleList from "@/components/blocks/ImageTitleList";
import LetsBuild from "@/components/blocks/LetsBuild";
import SiteBanner from "@/components/blocks/SiteBanner";
import TitleContentBgImage from "@/components/blocks/TitleContentBgImage";
import React from "react";

const banner = {
  title:
    "Driving Efficiency and Innovation with Custom-Built Solutions for the Manufacturing Industry",
  content:
    "At Next Dynamics, we empower manufacturers to excel in a rapidly evolving industry. Through custom-built applications and a focus on digital transformation, we help you streamline operations, improve productivity, and achieve operational excellence.",
  image: "/images/manufacturing.jpg",
  className: "",
  titleClassName: "text-3xl lg:text-3xl",
};

const boxesList = [
  {
    title: "Production Process Optimization Tools",
    content:
      "Streamline workflows, reduce waste, and enhance efficiency across your manufacturing operations with tailored process optimization solutions.",
    image: "production.svg",
  },
  {
    title: "Self-Service Platforms to Boost Customer Engagement",
    content:
      "Build platforms that allow your customers to access product catalogs, track orders, and configure products independently, increasing satisfaction and loyalty.",
    image: "customer-engagement.svg",
  },
  {
    title: "Predictive Models and Instant Quoting Tools",
    content:
      "Equip your sales teams with predictive tools that analyze customer needs and provide instant, accurate quotes, enabling them to close deals more efficiently on the field.",
    image: "predictive.svg",
  },
  {
    title: "Quality Management Systems (QMS)",
    content:
      "Ensure compliance and reduce product defects with custom applications that monitor quality in real time and enhance reporting accuracy.",
    image: "quality-management.svg",
  },
  {
    title: "Predictive Maintenance Applications",
    content:
      "Anticipate equipment failures, reduce downtime, and extend asset life using data-driven maintenance systems.",
    image: "predictive-models.svg",
  },
  {
    title: "Inventory and Resource Management",
    content:
      "Track inventory levels, optimize resource allocation, and prevent shortages or overstock with intelligent management solutions.",
    image: "inventory.svg",
  },
  //   {
  //     title: "Sustainability Tracking Solutions",
  //     content:
  //       "Monitor energy use, emissions, and resource consumption to meet sustainability goals and align with regulatory standards.",
  //     image: "/images/nd-arrow.svg",
  //   },
];

const whatWeOffer = [
  {
    title: "Industry Expertise",
    content:
      "Our deep understanding of the manufacturing sector allows us to craft solutions that address complex production, supply chain, and customer engagement challenges.",
    image: "/images/industry-expertise.svg",
  },
  {
    title: "Custom Solutions for Manufacturing",
    content:
      "Every application we develop is designed to optimize your processes, empower your sales teams, and drive customer satisfaction.",
    image: "/images/solutions-s.svg",
  },
  {
    title: "Focused on Digital Transformation",
    content:
      "We help you modernize your operations and adopt advanced technologies to remain competitive in a fast-changing market.",
    image: "/images/digital-transformation.svg",
  },
  {
    title: "User-Centric Approach",
    content:
      "Our intuitive designs ensure that your team and customers can easily adopt and benefit from the tools we create.",
    image: "/images/user-centric.svg",
  },
  {
    title: "Scalable, Future-Proof Technology",
    content:
      "Our solutions grow with your business and adapt to changing industry demands, ensuring long-term value.",
    image: "/images/scalable.svg",
  },
];

const whatWeOfferProps = {
  title: "Why Choose Next Dynamics?",
  content: "",
  image: "/images/manufacturing.jpg",
  list: whatWeOffer,
};

const titleContentBgImage = {
  title: "Transform Your Business with Next Dynamics",
  content:
    "At Next Dynamics, we’re committed to helping manufacturers excel in the digital age. Whether you’re optimizing operations, enhancing customer engagement with self-service platforms, or empowering your sales teams with predictive quoting tools, our custom-built applications and digital transformation expertise will help you achieve your goals.",
  image: "/images/manufacturing.jpg",
};

const letsBuild = {
  title: "Contact us today",
  content:
    "To learn how we can help you lead in the manufacturing industry with innovative, tailored solutions.",
  subContent: "",
  buttonText: "Contact Us",
};

function Manufacturing() {
  return (
    <div>
      <SiteBanner {...banner} />
      <div className="mx-auto mb-20 mt-32 max-w-[1222px]">
        <h2 className="text-semibold px-8 text-center text-2xl text-white lg:px-0 lg:text-5xl">
          Tailored Solutions for the Manufacturing Industry
        </h2>
        <p className="mb-8 mt-4 text-center text-sm text-white lg:text-base">
          Our expertise in creating custom applications supports your digital
          transformation goals while addressing the evolving needs of modern
          manufacturing.
        </p>
        <BoxesList listItems={boxesList} />
      </div>
      <div className="mx-auto -mt-16 max-w-[1222px]">
        <ImageRightList {...whatWeOfferProps} />
      </div>
      <WhatWeOffer {...whatWeOfferProps} />
      <TitleContentBgImage {...titleContentBgImage} />
      <LetsBuild {...letsBuild} />
    </div>
  );
}

export default Manufacturing;
