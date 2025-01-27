import Image from "next/image";
import React from "react";
import { Arrow } from "../shared";
import { ServicesMenu } from "@/util/constants";
import Link from "next/link";

function HomeServices() {
  return (
    <div>
      <div className="relative z-10 -mt-16 flex h-screen flex-row justify-center overflow-hidden bg-[url(/bg-lines.svg)] lg:max-h-[1000px]">
        <div className="absolute bottom-0 left-0 z-20 flex h-full w-full flex-1 items-end pb-20">
          <div className="container px-10">
            <h3 className="mb-5 text-base font-semibold uppercase text-nd-primary-600">
              Services
            </h3>
            <div className="max-w-[530px]">
              <h2 className="text-semibold text-2xl text-white lg:text-5xl">
                Innovative Technologies, Measurable Success
              </h2>
              <p className="mt-4 text-sm text-white lg:text-base">
                Discover our range of services designed to translate your vision
                into impactful solutions through cutting-edge technology and
                strategic expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full min-w-[1200px] scale-50 overflow-hidden transition-all md:scale-100">
          <div className="absolute left-1/2 z-20 h-[600px] w-[600px] -translate-x-1/2">
            <div className="flex h-full w-full flex-1 items-center justify-center">
              <Arrow />
            </div>
          </div>
          <div className="absolute left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-nd-primary-600"></div>
          <div className="absolute left-1/2 h-[600px] w-[600px] -translate-x-1/2 scale-[60%] rounded-full border border-nd-primary-600" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              clipPath: "polygon(0 0, 0% 0, 100% 100%, 0 100%)",
              backgroundImage: "url(/images/bg.jpg)",
            }}
          >
            <div className="absolute -bottom-1 h-full w-full bg-gradient-to-t from-nd-secondary-950 from-15% to-nd-secondary-950/10" />
          </div>
          <div className="absolute left-1/2 h-[600px] w-[600px] -translate-x-1/2 scale-[80%] rounded-full border border-nd-primary-600 hover:bg-red-500"></div>
        </div>
      </div>
      <div className="container min-h-[400px] px-5">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {ServicesMenu.map((service, index) => (
            <div className="p-5 hover:cursor-pointer" key={index}>
              <Link href={service.link} legacyBehavior passHref>
                <div className="xaspect-square group flex min-h-56 flex-col rounded-lg border border-nd-primary-600 p-3 text-white transition-all duration-1000 hover:scale-105 hover:border-nd-primary-600/50">
                  <div className="h-0 w-full self-start overflow-hidden rounded-lg bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:mb-5 group-hover:h-64 group-hover:opacity-100">
                    {service.img ? (
                      <Image
                        src={service.img}
                        alt=""
                        className="h-full object-cover"
                        width={400}
                        height={600}
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-md text-center font-bold uppercase lg:text-xl">
                      {service.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
