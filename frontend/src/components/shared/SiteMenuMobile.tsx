import { cn } from "@/lib/utils";
import { Menu } from "@/types/menu";
import { IndustryMenu, ServicesMenu } from "@/util/constants";
import Link from "next/link";
import React, { useState } from "react";

function SiteMenuMobile({ menu }: { menu: Menu }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="block lg:hidden">
      <div
        onClick={() => setOpened(!opened)}
        className="fixed right-4 top-2.5 z-50 cursor-pointer p-4 transition-all hover:opacity-80"
      >
        <div
          className={cn(
            `tham tham-e-squeeze tham-w-6`,
            opened && "tham-active",
          )}
        >
          <div className="tham-box">
            <div className="tham-inner bg-white" />
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpened(!opened)}
        className={cn(
          "fixed left-0 right-0 top-0 z-40 h-0 w-full overflow-hidden transition-all duration-300 ease-in-out",
          opened && "h-screen",
        )}
      >
        <ul className="border-nd-secondary-500/50 bg-nd-secondary-950/10 border-b px-4 pb-10 pt-20 text-sm backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden">
          <li className="border-nd-secondary-500/50 mb-2 border-b pb-2">
            <h2 className="text-nd-primary-600 text-center font-semibold">
              Services
            </h2>
          </li>
          {ServicesMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <a className="block p-2 text-center text-white hover:bg-white/10 hover:text-white">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
          <li className="border-nd-secondary-500/50 my-4 border-y py-2">
            <h2 className="text-nd-primary-600 text-center font-semibold">
              Industries
            </h2>
          </li>
          {IndustryMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <a className="block p-2 text-center text-white hover:bg-white/10 hover:text-white">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
          <li className="border-nd-secondary-500/50 my-4 border-y py-2">
            <h2 className="text-center font-semibold text-white">
              <Link href="/contact-us" legacyBehavior passHref>
                <a className="hover:underline">Contact Us</a>
              </Link>
            </h2>
          </li>
        </ul>
        <div className="bg-nd-secondary-950/20 h-full"></div>
      </div>
    </div>
  );
}

export default SiteMenuMobile;
