import React from "react";
export default function Layout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </div>
  );
}