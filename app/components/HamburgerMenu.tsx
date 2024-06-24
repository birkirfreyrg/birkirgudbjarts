"use client";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import ClickAwayListener from "react-click-away-listener";
import XIcon from "./XIcon";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="md:hidden flex">
        <button
          onClick={toggleMenu}
          className="block p-4 focus:outline-none z-50 relative"
        >
          {isOpen ? <XIcon /> : <HamburgerIcon />}
        </button>
        <nav
          className={`fixed top-0 left-0 w-1/2 pt-20 h-full bg-white flex  transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-40`}
        >
          <ul className="flex flex-col pl-12 space-y-8">
            <li>
              <Link href="/" className="text-2xl">
                home
              </Link>
            </li>
            <li>
              <Link href="/bio" className="text-2xl">
                bio
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-2xl">
                resume
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-2xl">
                portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-2xl">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </ClickAwayListener>
  );
}
