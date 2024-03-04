import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}
export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex flex-col items-center justify-center">{children}</div>
  );
}
