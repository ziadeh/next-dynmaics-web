import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";
import { IndustryMenu, ServicesMenu } from "@/util/constants";

function SiteFooter() {
  return (
    <div className="border-nd-primary-600 border-t py-16">
      <div className="container px-10 text-white">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-3">
            <Icons.logo width={322} height={120} className="w-52 lg:w-80" />
          </div>
          <div className="col-span-3 hidden lg:block"></div>
          <div className="col-span-2">
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-xs">
              {ServicesMenu?.map((item, index) => (
                <li key={index}>
                  <Link className="hover:underline" href={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold">Industries</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-xs">
              {IndustryMenu?.map((item, index) => (
                <li key={index}>
                  <Link className="hover:underline" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold">Contact</h3>
            <a
              href="https://www.linkedin.com/company/next-dynamics-inc."
              target="_blank"
              rel="noreferrer"
            >
              <Icons.linkedin width={32} height={32} className="mt-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;
