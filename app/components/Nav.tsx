"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const current = usePathname();
  const underline = "border-b border-gray-300 font-medium";

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-3 text-xl mt-8">
      <div className="border-b border-gray-300 sm:mx-4 w-12 sm:w-24" />
      <Link href={"/"} className={`${current === "/" ? underline : ""} `}>
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
      <div className="border-b border-gray-300 sm:mx-4 w-12 sm:w-24" />
    </div>
  );
}
