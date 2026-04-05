import axios from "axios";
import { Note } from "@/types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

const getAuthHeader = () => ({
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
});

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number = 1,
  tag?: string,
  search?: string
): Promise<NotesResponse> => {
  const params: Record<string, string | number> = {
    page,
    perPage: 12,
  };

  if (tag && tag !== "all") params.tag = tag;
  if (search) params.search = search;

  const { data } = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
    params,
    headers: getAuthHeader(),
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await axios.get<Note>(`${BASE_URL}/notes/${id}`, {
    headers: getAuthHeader(),
  });

  return data;
};

export const createNote = async (
  note: Omit<Note, "id" | "createdAt">
): Promise<Note> => {
  const { data } = await axios.post<Note>(
    `${BASE_URL}/notes`,
    note,
    { headers: getAuthHeader() }
  );

  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await axios.delete<Note>(
    `${BASE_URL}/notes/${id}`,
    { headers: getAuthHeader() }
  );

  return data;
};