"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const current = usePathname();
  const underline = "border-b border-gray-300 font-light";

  return (
    <>
      <div className="hidden md:flex items-center justify-center gap-4 text-xl mt-0 md:mt-8">
        <div className=" flex items-center gap-4">
          <div className="border-b border-gray-300 sm:mx-4 w-12 sm:w-24" />
          <Link href={"/"} className={`${current === "/" ? underline : ""}`}>
            home
          </Link>
          <Link
            href={"/bio"}
            className={`${current === "/bio" ? underline : ""}`}
          >
            bio
          </Link>
          <Link
            href={"/resume"}
            className={`${current === "/resume" ? underline : ""}`}
          >
            resume
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
      </div>
    </>
  );
}
