"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SiteMenu } from "../shared";
import { cn } from "@/lib/utils";
import SiteMenuMobile from "../shared/SiteMenuMobile";
import { ServicesMenu } from "@/util/constants";
import Link from "next/link";

const industry = [
  {
    title: "Life Sciences",
    href: "/",
  },
  {
    title: "Consumer Packaged Goods (CPG)",
    href: "/",
  },
  {
    title: "Manufacturing",
    href: "/",
  },
  {
    title: "Financial Services",
    href: "/",
  },
];

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={cn(
          "fixed z-50 h-20 w-full border-b border-transparent transition-all",
          isScrolled &&
            "h-14 overflow-visible border-nd-secondary-900 backdrop-blur-md",
        )}
      >
        <div className="container flex h-full items-center justify-between px-10">
          <div>
            <Link href="/">
              <Image
                src="/images/next-dynamics-inc-logo.svg"
                alt="Next Dynamics Inc."
                width={isScrolled ? 120 : 160}
                height={isScrolled ? 34 : 74}
                className={cn(
                  `w-32 transition-all lg:w-40`,
                  isScrolled && "w-28 lg:w-32",
                )}
              />
            </Link>
          </div>
          <div className="lg:block">
            <SiteMenu menu={ServicesMenu} />
          </div>
        </div>
      </header>
      <SiteMenuMobile menu={ServicesMenu} />
    </div>
  );
}

export default SiteHeader;
