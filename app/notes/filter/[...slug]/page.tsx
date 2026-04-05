import FilteredNotes from "./Notes.client";

export default function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  return <FilteredNotes params={params} />;
}