import { fetchNoteById } from "@/lib/api";

type Props = {
  params: {
    id: string;
  };
};

export default async function NoteDetailsPage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <div>
      <h1>Note Details</h1>
      <p>
        <strong>ID:</strong> {params.id}
      </p>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}