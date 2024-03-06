"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const current = usePathname();
  const underline = "border-b border-gray-300";

  return (
    <div className="flex items-center justify-center gap-3 text-xl mt-8">
      <div
        className="border-b border-gray-300 mx-4"
        style={{ width: "100px" }}
      />
      <Link href={"/"} className={`${current === "/" ? underline : ""}`}>
        home
      </Link>
      <Link href={"/bio"} className={`${current === "/bio" ? underline : ""}`}>
        bio
      </Link>
      <Link
        href={"/portfolio"}
        className={`${current === "/portfolio" ? underline : ""}`}
      >
        portfolio
      </Link>
      <Link
        href={"/contact"}
        className={`${current === "/contact" ? underline : ""}`}
      >
        contact
      </Link>
      <div
        className="border-b border-gray-300 mx-4"
        style={{ width: "100px" }}
      />
    </div>
  );
}
