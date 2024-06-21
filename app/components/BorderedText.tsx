import React from "react";

interface BorderProps {
  children: React.ReactNode;
}
export default function BorderedText({ children }: BorderProps) {
  return <div className=" font-light p-2 mb-2">{children}</div>;
}
