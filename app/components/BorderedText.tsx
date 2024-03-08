import React from "react";

interface BorderProps {
  children: React.ReactNode;
}
export default function BorderedText({ children }: BorderProps) {
  return <h3 className="border shadow-sm p-2 mb-2">{children}</h3>;
}
