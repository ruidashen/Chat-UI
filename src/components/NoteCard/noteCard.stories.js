import React from "react";
import NoteCard from "./";
import note1 from "assets/images/note-1.jpg";

export default {
  title: "UI Components/NoteCard",
  component: NoteCard,
};

export const Default = () => {
  return (
    <NoteCard
      note={{
        id: 1,
        image: note1,
        title: "Study Notes",
        excerpt: "Hello everyone！This is my first note!",
        publishedAt: "3 hours ago",
      }}
    ></NoteCard>
  );
};
