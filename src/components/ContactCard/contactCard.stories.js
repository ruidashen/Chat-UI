import React from "react";
import ContactCard from "./";
import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI Components/ContactCard",
  component: ContactCard,
};

const data = [
  {
    id: 1,
    avatar: face1,
    name: "Tris Vogele",
    status: "online",
    statusText: "online",
    intro: "Aenean",
  },
];
export const Default = () => {
  return <ContactCard contact={[data[0]]}></ContactCard>;
};
