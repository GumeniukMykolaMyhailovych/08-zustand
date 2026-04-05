"use client";

import NotesClient from "@/app/notes/Notes.client";

export default function FilteredNotes({
  params,
}: {
  params: { slug?: string[] };
}) {
  const tag = params.slug?.[0] ?? "all";

  return <NotesClient tag={tag} />;
}