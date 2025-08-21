import { HydrateClient } from "@/trpc/server";
import {
  HomeBanner,
  HomeIndustries,
  HomeServices,
  PartnerWith,
} from "@/components/blocks";

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
