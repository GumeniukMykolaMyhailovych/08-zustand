import React from "react";
import Link from "next/link";

export default function SidebarNotes() {
  const tags = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/notes/filter/${tag === "All" ? "all" : tag}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}