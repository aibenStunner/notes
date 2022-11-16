import { NoteForm } from "./NoteForm";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export function NewNote() {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={() => {}} />
    </>
  );
}
