import React from "react";
import Emoji from "./";

export default {
  title: "UI Components/Emoji",
  component: Emoji,
};

export const Default = () => {
  return (
    <div>
      <Emoji label="smile">🙂</Emoji>
      <Emoji label="laugh">😀</Emoji>
      <Emoji label="clown">🤡</Emoji>
    </div>
  );
};
