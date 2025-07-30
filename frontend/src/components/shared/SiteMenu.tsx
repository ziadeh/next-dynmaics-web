"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Icons } from "../Icons";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "@/types/menu";

const service = [
  {
    title: "Build as a Service",
    href: "/build-as-a-service",
  },
  {
    title: "Product Strategy and Design",
    href: "/product-strategy-and-design",
  },
  {
    title: "Software Design and Engineering",
    href: "/software-design-and-engineering",
  },
  {
    title: "Data and Platform Engineering",
    href: "/data-and-platform-engineering",
  },
];

const industry = [
  {
    title: "Financial Services",
    href: "/financial-services",
  },
  {
    title: "Life Sciences",
    href: "/life-sciences",
  },
  {
    title: "Consumer Packaged Goods (CPG)",
    href: "/consumer-packaged-goods",
  },
  {
    title: "Manufacturing",
    href: "/manufacturing",
  },
];

function SiteMenu({ menu }: { menu: Menu }) {
  const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-xs font-medium leading-none">{title}</div>
            {children ? (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}x
              </p>
            ) : null}
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <>
      <NavigationMenu delayDuration={0} className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-2 md:w-[250px] lg:w-[300px]">
                {menu?.map((item, index) => (
                  <ListItem
                    key={index}
                    href={`/services/${item.href}`}
                    className="font-light"
                    title={item.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white">
              Industries
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-2 md:w-[250px] lg:w-[300px]">
                {industry?.map((item, index) => (
                  <ListItem
                    key={index}
                    href={"/industries" + item.href}
                    className="font-light"
                    title={item.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default SiteMenu;
