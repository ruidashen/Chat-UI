import Button from "components/Button";
import React from "react";
import Popover from "./";

export default {
  title: "UI Components/Popover",
  component: Popover,
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Popover content="hello">
        <Button shape="rect">Click me</Button>
      </Popover>
    </div>
  );
};

export const WithOffset = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Popover content="hello" offset={{ x: "-25%" }}>
        <Button shape="rect">Click me</Button>
      </Popover>
    </div>
  );
};
