import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Nav</nav>
      <main>{children}</main>
    </>
  );
}
