import Link from "next/link";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { links } from "../../constans/navigation-data";

function NavigationLinks({ isMobileOpen }) {
  if (isMobileOpen) {
    return (
      <ul className="flex flex-col gap-y-5 mt-16">
        {links.map((link, index) => (
          <li key={index} className="px-4">
            <Link href={link.href}>
              <a className="flex items-center gap-x-1 text-base text-[#0D0E43] lato-regular">
                {link.name}
                {link.icon && <link.icon className="w-3 h-3 text-[#0D0E43]" />}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="hidden lg:flex items-center gap-x-9">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>
            <a className="flex items-center gap-x-1 text-base text-[#0D0E43] lato-regular">
              {link.name}
              {link.icon && <link.icon className="w-3 h-3 text-[#0D0E43]" />}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navigation() {
  const [isMobileOpen, setMobileOpen] = useState(true);

  return (
    <nav className="h-10 flex items-center my-5">
      <div className="container flex items-center">
        <div className="flex flex-1 items-center gap-x-4 xl:gap-x-20">
          <h1 className="text-3xl text-[#0D0E43] josefin-bold">Shopme</h1>
          <NavigationLinks />
        </div>

        <form className="hidden md:block mr-4">
          <div className="flex items-center">
            <input
              type="text"
              className="h-10 w-[266px] border-2 border-[#E7E6EF outline-none"
            />
            <button type="submit" className="bg-pink-primary py-2 px-3">
              <MagnifyingGlassIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-x-5">
          <button className="md:hidden">
            <MagnifyingGlassIcon className="w-6 h-6 text-[#0D0E43]" />
          </button>
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Bars3Icon className="w-6 h-6 text-[#0D0E43]" />
          </button>
        </div>
      </div>

      <div
        className={`w-[280px] h-screen bg-[#F6F5FF] fixed top-0 ${
          isMobileOpen ? "right-0" : "-right-full"
        } transition-all ease-in-out duration-300 lg:hidden`}
      >
        <button onClick={() => setMobileOpen(false)}>
          <XMarkIcon className="w-6 h-6 text-[#0D0E43] absolute top-5 right-5" />
        </button>
        <NavigationLinks isMobileOpen={isMobileOpen} />
      </div>
    </nav>
  );
}
