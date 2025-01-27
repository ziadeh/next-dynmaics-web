import BoxesList from "@/components/blocks/BoxesList";
import ImageRightList from "@/components/blocks/ImageRightList";
import ImageTitleList from "@/components/blocks/ImageTitleList";
import LetsBuild from "@/components/blocks/LetsBuild";
import SiteBanner from "@/components/blocks/SiteBanner";
import Image from "next/image";

const banner = {
  title: "Custom-Built Solutions with AI-Driven Precision for Life Sciences",
  content:
    "At Next Dynamics, we develop custom applications to meet the unique needs of the Life Sciences industry. From enhancing clinical operations to improving patient engagement, our customer-obsessed, user-driven development approach ensures every solution is built to deliver measurable impact.",
  image: "/images/custom-built-2.jpg",
  className: "",
};

const boxesList = [
  {
    title: "Custom Clinical Trial Management Systems (CTMS)",
    content:
      "Manage patient recruitment, ensure compliance, and streamline trial operations with systems built for your processes.",
    image: "clinical.svg",
  },
  {
    title: "Data Management & EDC Systems",
    content:
      "Build efficient, user-friendly systems to collect, manage, and analyze research data with precision.",
    image: "data-management.svg",
  },
  {
    title: "Decision Aids for Patients and Clinicians",
    content:
      "Create tools to help clinicians and patients make informed choices, improving shared decision-making and outcomes.",
    image: "patients.svg",
  },
  {
    title: "Population Health Management",
    content:
      "Aggregate and analyze data to identify trends, enhance care delivery, and drive public health initiatives.",
    image: "health-management.svg",
  },
  {
    title: "Patient Engagement Tools",
    content:
      "Improve patient outcomes through two key approaches: Patient-Focused Decision Aids: Equip patients with interactive tools that guide them through treatment options, empowering informed choices.",
    image: "patient-tools.svg",
  },
  {
    title: "Laboratory Information Management Systems (LIMS)",
    content:
      "Automate workflows, enhance sample tracking, and optimize lab efficiency with custom LIMS solutions.",
    image: "patient-information.svg",
  },
];

const aiWhereItAddsValue = {
  title: "AI Where It Adds Value",
  content:
    "We integrate artificial intelligence strategically to support advanced capabilities in your digital initiatives:",
  list: [
    {
      title: "AI-Enhanced Decision Support",
      content:
        "Provide real-time, data-driven insights to improve clinical and operational decision-making.",
      image: "/images/ai-decision.jpg",
    },
    {
      title: "Machine Learning for Population Health",
      content:
        "Analyze large datasets to identify patterns, forecast health trends, and enable proactive interventions.",
      image: "/images/machine-learning.jpg",
    },
    {
      title: "Automated Processes",
      content:
        "Use AI to handle repetitive tasks such as data validation and anomaly detection, freeing your team for high-value work.",
      image: "/images/automation.jpg",
    },
    {
      title: "Personalized Healthcare Applications",
      content:
        "Enable precision medicine by leveraging AI to predict patient responses and tailor treatments.",
      image: "/images/personalized-healthcare.jpg",
    },
  ],
};

const imageRightList = {
  title: "Why Choose Next Dynamics?",
  content: "",
  image: "/images/growth.jpg",
  list: [
    {
      title: "Custom-Built for You",
      content:
        "Every solution is tailored to your workflows and objectives, ensuring a perfect fit for your organization.",
    },
    {
      title: "Strategic AI Integration",
      content:
        "We apply AI where it enhances value, balancing cutting-edge innovation with reliability and ease of use.",
    },
    {
      title: "User-Driven Design",
      content:
        "Our user-centric approach ensures that every solution is intuitive, practical, and easy to adopt.",
    },
    {
      title: "Scalable, Future-Proof Solutions",
      content:
        "Our software evolves alongside your organization and emerging industry advancements.",
    },
  ],
};

const letsBuild = {
  title: "Let’s Drive Innovation Together",
  content:
    "At Next Dynamics, we’re committed to helping Life Sciences organizations achieve success with custom-built solutions tailored to their needs. Whether it’s engaging patients, improving population health, or streamlining operations, we’ll work with you every step of the way to create impactful tools.",
  subContent: "",
  buttonText: "Contact Us",
};

function LifeSciences() {
  return (
    <div>
      <SiteBanner {...banner} />
      <div className="mx-auto mb-20 mt-32 max-w-[1222px]">
        <h2 className="text-semibold px-8 text-center text-2xl text-white lg:px-0 lg:text-5xl">
          Tailored Solutions for Life Sciences
        </h2>
        <p className="mb-8 mt-4 text-center text-sm text-white lg:text-base">
          Our range of custom-built solutions addresses your most pressing
          challenges:
        </p>
        <BoxesList listItems={boxesList} />
      </div>
      <div className="mx-auto -mt-16 max-w-[1222px]">
        <ImageTitleList {...aiWhereItAddsValue} />
      </div>
      <ImageRightList {...imageRightList} />
      <LetsBuild {...letsBuild} />
    </div>
  );
}

export default LifeSciences;
