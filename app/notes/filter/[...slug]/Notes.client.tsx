"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchNotes } from "@/lib/api";
import styles from "../../../../styles/NotesPage.module.css";

import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import NoteForm from "@/components/NoteForm/NoteForm";
import Modal from "@/components/Modal/Modal";

export default function NotesClient({
  params,
}: {
  params: { slug?: string[] };
}) {
  const tagFromUrl = params.slug?.[0] ?? "all";

  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const normalizedTag = tagFromUrl === "all" ? undefined : tagFromUrl;

  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", page, normalizedTag],
    queryFn: () => fetchNotes(page, normalizedTag),
    placeholderData: (prev) => prev,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>Error loading notes: {error.message}</p>;
  }

  const totalPages = data?.totalPages || 1;

  return (
    <>
      <h1>Notes</h1>

      <div className={styles.toolbar}>
        <SearchBox onChange={() => {}} />

        <button
          className={styles.button}
          onClick={() => setIsOpen(true)}
        >
          Add note
        </button>
      </div>

      <NoteList notes={data?.notes || []} />

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <NoteForm onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}