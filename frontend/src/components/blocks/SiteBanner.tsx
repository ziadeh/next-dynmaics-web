import AnimatedLines from "@/lib/AnimatedLines";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface SiteBannerProps {
  title: string;
  content: string;
  image: string;
  className?: string;
  titleClassName?: string;
}

function SiteBanner({
  title,
  content,
  image,
  className,
  titleClassName,
}: SiteBannerProps) {
  return (
    <div>
      <div className="border-nd-primary-600/20 relative overflow-hidden border-b">
        <div className="max-w-s from-nd-primary-600 via-nd-primary-600/50 absolute inset-0 top-12 m-auto h-[13rem] bg-gradient-to-r from-25% opacity-50 blur-[160px]"></div>

        <div className="container relative z-10 flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="">
              <div
                className={cn(
                  `relative z-10 mx-auto mt-8 px-10 py-14 pt-24 text-center lg:mx-0 lg:text-left xl:py-24`,
                  className,
                )}
              >
                <h2
                  className={cn(
                    "font-heading mb-4 font-bold text-white",
                    titleClassName ? titleClassName : "text-3xl lg:text-5xl",
                  )}
                >
                  {title}
                </h2>
                <p className="mt-2 text-white">{content}</p>
              </div>
              <AnimatedLines className="absolute top-0 opacity-10 lg:opacity-50" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={image}
              alt="Next Dynamics Inc."
              className="h-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteBanner;
