import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

export const fetchNotes = async (page = 1, tag?: string) => {
  const params: Record<string, string | number> = {
    page,
    perPage: 12,
  };

  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const { data } = await axios.get(`${BASE_URL}/notes`, {
    params,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return data;
};

export const createNote = async (note: {
  title: string;
  content: string;
  tag: string;
}) => {
  const { data } = await axios.post(`${BASE_URL}/notes`, note, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return data;
};

export const deleteNote = async (id: string) => {
  await axios.delete(`${BASE_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });
};