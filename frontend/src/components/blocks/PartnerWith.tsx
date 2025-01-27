import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

function PartnerWith() {
  return (
    <div className="relative -mt-32 py-32">
      <div className="container relative z-20 px-10 py-24">
        <div className="border-nd-primary-600 absolute right-10 top-0 z-20 h-[1px] w-full max-w-44 border-b border-dashed opacity-50 lg:max-w-96" />
        <div className="border-nd-primary-600 absolute right-0 top-4 z-20 h-[1px] w-full max-w-44 border-b border-dashed opacity-80 lg:max-w-72" />
        <div className="border-nd-primary-600 absolute bottom-0 left-10 z-20 h-[1px] w-full max-w-44 border-b border-dashed opacity-50 lg:max-w-96" />
        <h2 className="text-semibold mb-5 max-w-[630px] px-8 text-2xl text-white lg:px-0 lg:text-5xl">
          Partner with Us to Bring Your Vision to Life
        </h2>
        <p className="max-w-[650px] px-8 text-sm text-white/80 lg:px-0">
          Connect with our team to explore how we can craft innovative
          technologies that transform your ideas into measurable outcomes.
        </p>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-nd-primary-600 bg-nd-secondary-950 hover:text-nd-secondary-950 mx-auto mt-24 h-full border px-12 py-4 text-xl text-white duration-300 active:bg-white/50"
            asChild
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="from-nd-secondary-950 to-nd-secondary-950/0 absolute -bottom-1 top-0 z-10 h-48 w-full bg-gradient-to-b" />
      <div className="absolute bottom-0 z-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat opacity-10">
        <Image
          width={1920}
          height={1080}
          src="/images/bg-black.jpg"
          alt=""
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

export default PartnerWith;
