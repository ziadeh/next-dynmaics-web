import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import {
  HomeBanner,
  HomeIndustries,
  HomeServices,
  PartnerWith,
} from "@/components/blocks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Dynamics",
  description:
    "Your strategic partner in crafting innovative technologies that translate visions into measurable success.",
};

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

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
