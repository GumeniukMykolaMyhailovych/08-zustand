"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NoteDetails from "@/app/notes/[id]/NoteDetails.client";

export default function NotePreview({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NoteDetails id={id} />
    </Modal>
  );
}