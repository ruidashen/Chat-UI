import React from "react";
import FileCard from "./";

export default {
  title: "UI Components/FileCard",
  component: FileCard,
};

export const Default = () => {
  return (
    <FileCard
      file={{
        id: 1,
        name: "Source Code.zip",
        size: "1.5M",
        type: "zip",
        updatedAt: "2019/02/03/",
      }}
    ></FileCard>
  );
};
