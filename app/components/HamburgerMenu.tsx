"use client";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      {/* Hidden on large screens and above */}
      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
            isOpen ? "rotate-45 translate-y-3.5" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3.5" : ""
          }`}
        ></div>
      </button>
      <div
        className={`absolute top-16 left-0 w-48 bg-white shadow-lg rounded-lg transition duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "3rem", left: "0" }}
      >
        <ul className="flex flex-col p-4">
          <li className="py-2">
            <a href="/">home</a>
          </li>
          <li className="py-2">
            <a href="/bio">bio</a>
          </li>
          <li className="py-2">
            <a href="/resume">resume</a>
          </li>
          <li className="py-2">
            <a href="/portfolio">portfolio</a>
          </li>
          <li className="py-2">
            <a href="contact">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
