// src/app/[...slug]/page.tsx
import { parseUrlPath } from "@/lib/utils";
import { redirect } from "next/navigation";
import Service from "../_components/service";
import ProductStrategy from "../_components/ProductStrategy";
import RapidPrototyping from "../_components/RapidPrototyping";
import DataPlatformEngineering from "../_components/DataPlatformEngineering";
import LifeSciences from "../_components/LifeSciences";
import ConsumerPackagedGoods from "../_components/ConsumerPackagedGoods";
import Manufacturing from "../_components/Manufacturing";
import FinancialServices from "../_components/FinancialServices";
import { Metadata, ResolvingMetadata } from "next";
import ContactUs from "../_components/ContactUs";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  if (slug.length > 2) {
    redirect("/");
  }

  const urlPath = parseUrlPath(slug);
  const switchUrl = urlPath.sub ? urlPath.sub : urlPath.slug;
  const title = () => {
    switch (switchUrl) {
      case "custom-software-development":
        return "Custom Software Development";
      case "product-strategy-and-design":
        return "Product Strategy and Design";
      case "rapid-prototyping":
        return "Rapid Prototyping";
      case "data-and-platform-engineering":
        return "Data and Platform Engineering";
      case "life-sciences":
        return "Life Sciences";
      case "consumer-packaged-goods":
        return "Consumer Packaged Goods";
      case "manufacturing":
        return "Manufacturing";
      case "financial-services":
        return "Financial Services";
      case "contact-us":
        return "Contact Us";
      default:
        return "";
    }
  };

  return {
    title: title() + " | Next Dynamics",
    description:
      "Your strategic partner in crafting innovative technologies that translate visions into measurable success.",
    openGraph: {
      images: ["/share-image.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // Await the resolved params object

  if (slug.length > 2) {
    redirect("/");
  }

  const urlPath = parseUrlPath(slug);
  const switchUrl = urlPath.sub ? urlPath.sub : urlPath.slug;
  switch (switchUrl) {
    case "custom-software-development":
      return <Service />;
    case "product-strategy-and-design":
      return <ProductStrategy />;
    case "rapid-prototyping":
      return <RapidPrototyping />;
    case "data-and-platform-engineering":
      return <DataPlatformEngineering />;
    case "life-sciences":
      return <LifeSciences />;
    case "consumer-packaged-goods":
      return <ConsumerPackagedGoods />;
    case "manufacturing":
      return <Manufacturing />;
    case "financial-services":
      return <FinancialServices />;
    case "contact-us":
      return <ContactUs />;
    default:
      return <div>{urlPath.slug === "services" && <Service />}</div>;
  }
}
