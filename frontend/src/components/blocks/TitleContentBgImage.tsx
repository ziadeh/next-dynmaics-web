import { cn } from "@/lib/utils";
import React from "react";
interface TitleContentBgImageProps {
  title: string;
  content: string;
  image: string;
}

function TitleContentBgImage({
  title,
  content,
  image,
}: TitleContentBgImageProps) {
  return (
    <div className="relative py-32">
      <div
        className="absolute left-0 right-0 top-0 z-10 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="relative z-10 text-center">
          <h2 className="mb-4.5 xl:text-heading-2 text-2xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mb-9 mt-5 max-w-[714px] text-sm text-nd-secondary-200">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleContentBgImage;
