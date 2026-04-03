"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NoteDetailsPage from "../../[id]/page";

export default function NoteModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsPage params={params} />
    </Modal>
  );
}