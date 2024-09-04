"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const list: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

const navigationBar = [
  {
    title: "Shops",
    shopList: list,
  },
  {
    title: "Cellphones",
    shopList: list,
  },
  {
    title: "Accessories",
    shopList: list,
  },
  {
    title: "Laptops",
    shopList: list,
  },
  {
    title: "Watch",
    shopList: list,
  },
];

export function ProductMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationBar.map((component) => (
          <NavigationMenuItem key={component.title}>
            <NavigationMenuTrigger className="font-semibold">
              {component.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {component.shopList.map((list) => (
                  <ListItem
                    key={list.title}
                    title={list.title}
                    href={list.href}
                  >
                    {list.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
