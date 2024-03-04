import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex items-center justify-center gap-3 text-xl mt-8">
      <div
        className="border-b border-gray-300 mx-4"
        style={{ width: "100px" }}
      />
      <Link href={"/"}>home</Link>
      <Link href={"/bio"}>bio</Link>
      <Link href={"/contact"}>contact</Link>
      <div
        className="border-b border-gray-300 mx-4"
        style={{ width: "100px" }}
      />
    </div>
  );
}
