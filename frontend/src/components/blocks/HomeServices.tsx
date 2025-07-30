import Image from "next/image";
import React from "react";
import { Arrow } from "../shared";
import { ServicesMenu } from "@/util/constants";
import Link from "next/link";
import { WritingText } from "../animate-ui/text/writing";
import { MotionEffect } from "../animate-ui/effects/motion-effect";

function HomeServices() {
  return (
    <div>
      <div className="relative z-10 -mt-16 flex h-screen flex-row justify-center overflow-hidden bg-[url(/bg-lines.svg)] lg:max-h-[1000px]">
        <div className="absolute bottom-0 left-0 z-20 flex h-full w-full flex-1 items-end pb-20">
          <div className="container px-10">
            <MotionEffect
              fade
              delay={0.3}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              slide={{
                direction: "down",
                offset: 10,
              }}
              inView
            >
              <h3 className="mb-5 text-base font-semibold uppercase text-nd-primary-600">
                Services
              </h3>
            </MotionEffect>
            <div className="max-w-[530px]">
              <h2 className="text-semibold text-2xl text-white lg:text-5xl">
                <WritingText
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 1,
                    delay: 0.1,
                  }}
                  inViewOnce={true}
                  inView={true}
                  text="Innovative Technologies, Measurable Success"
                />
              </h2>

              <MotionEffect
                fade
                delay={0.4}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                inView
              >
                <p className="mt-4 text-sm text-white lg:text-base">
                  Discover our range of services designed to translate your
                  vision into impactful solutions through cutting-edge
                  technology and strategic expertise.
                </p>
              </MotionEffect>
            </div>
          </div>
        </div>
        <div className="relative -bottom-0.5 w-full min-w-[1200px] scale-50 overflow-hidden transition-all md:scale-100">
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
        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-4">
          {ServicesMenu.map((service, index) => (
            <div className="hover:cursor-pointer" key={index}>
              <Link href={service.link} legacyBehavior passHref>
                <div className="xaspect-square group flex min-h-56 flex-col rounded-lg border border-nd-primary-600 p-3 text-white transition-all duration-1000 hover:scale-105 hover:border-nd-primary-600/50">
                  <div className="mb-4 w-full self-start overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out lg:h-0 lg:opacity-0 lg:group-hover:mb-5 lg:group-hover:h-64 lg:group-hover:opacity-100">
                    {service.img ? (
                      <Image
                        src={service.img}
                        alt=""
                        className="h-full w-full object-cover"
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
