"use client";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
  };
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-3 justify-between px-8 py-2 text-zinc-800 dark:text-zinc-100 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-1 py-2">
        <img
          src="/logo.png"
          alt="Sollyverse"
          width={undefined}
          className="w-8"
        />
        <p>
          SOLLY<span className="font-bold">VERSE</span>
        </p>
      </div>
      <div
        className={`flex md:items-center overflow-hidden md:scale-y-100 md:w-auto md:flex-row gap-10 md:py-2 md:static md:min-h-0 transition-all duration-700 absolute right-1 items-start flex-col p-3 bg-slate-200 dark:bg-slate-600 md:bg-transparent dark:md:bg-transparent w-full top-16 ${
          toggle ? "h-screen w-screen" : "h-0 py-0 w-auto"
        }`}
      >
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
          onClick={() => setToggle(false)}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={pathname === "/services" ? "active" : ""}
          onClick={() => setToggle(false)}
        >
          Services
        </Link>
        <Link
          href="/products"
          className={pathname === "/products" ? "active" : ""}
          onClick={() => setToggle(false)}
        >
          Products
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
          onClick={() => setToggle(false)}
        >
          About
        </Link>
        <Link
          href="/contactUs"
          className={`${pathname === "/contactUs" ? "active" : ""} text-nowrap`}
          onClick={() => setToggle(false)}
        >
          Contact Us
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-xl hidden">
          <button onClick={() => toggleTheme("light")}>
            <FontAwesomeIcon icon={faSun} type="regular" />
          </button>
          <button onClick={() => toggleTheme("dark")}>
            <FontAwesomeIcon icon={faMoon} type="regular" />
          </button>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-xl"
        >
          <FontAwesomeIcon icon={toggle ? faXmark : faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
