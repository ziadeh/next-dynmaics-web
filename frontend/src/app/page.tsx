import { HydrateClient } from "@/trpc/server";
import {
  HomeBanner,
  HomeIndustries,
  HomeServices,
  PartnerWith,
} from "@/components/blocks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Dynamics Inc: Home",
  description:
    "Your strategic partner in crafting innovative technologies that translate visions into measurable success.",
};

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <HomeBanner />
        <HomeServices />
        <HomeIndustries />
        <PartnerWith />
      </main>
    </HydrateClient>
  );
}
