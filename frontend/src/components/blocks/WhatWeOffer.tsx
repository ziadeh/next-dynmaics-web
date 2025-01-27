import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
type offersItem = {
  title: string;
  content: string;
  image?: string;
};
interface WhatWeOfferProps {
  title: string;
  list: offersItem[];
}
function WhatWeOffer({ title, list }: WhatWeOfferProps) {
  return (
    <section className="pt-12 text-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap">
          <div className="order-1 w-full px-3 md:order-1">
            <div className="max-w-md-2">
              <div className="mb-4">
                <h2 className="text-semibold mb-14 px-8 text-center text-2xl text-white lg:px-0 lg:text-5xl">
                  {title}
                </h2>
              </div>
              <div className={cn("flex flex-wrap justify-center gap-8")}>
                {list.map((item, index) => (
                  <div
                    className={cn(
                      "lg:w-1/3 xl:w-1/5",
                      list.length > 4 && "xl:w-1/4",
                    )}
                    key={index}
                  >
                    <div className="border-nd-secondary-900 from-nd-secondary-900 to-nd-secondary-950 min-h-full rounded-lg border bg-gradient-to-t p-10">
                      <div className="bg-nd-primary-600/10 mb-6 inline-flex rounded-full p-2.5">
                        <div className="bg-nd-primary-800 inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full p-3">
                          {item.image ? (
                            <Image
                              width={64}
                              height={64}
                              src={item.image}
                              className="h-full w-full object-contain"
                              alt="Roadmaps"
                            />
                          ) : null}
                        </div>
                      </div>
                      <h3 className="font-heading text-nd-secondary-200 mb-2 min-h-12 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
