import NotePreview from "./NotePreview.client";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <NotePreview id={id} />;
}import NotePreview from "./NotePreview.client";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return <NotePreview id={params.id} />;
}