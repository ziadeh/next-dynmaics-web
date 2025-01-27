import React from "react";
import { Icons } from "../Icons";

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
              <li>Build as a Service</li>
              <li>Product Strategy and Design</li>
              <li>Software Design and Engineering</li>
              <li>Data and Platform Engineering</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-xs">
              <li>Driving Digital Transformation</li>
              <li>Empowering Financial Services</li>
              <li>Custom-Built Solutions</li>
              <li>Driving Efficiency and Innovation</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold">Contact</h3>
            <Icons.linkedin width={32} height={32} className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;
