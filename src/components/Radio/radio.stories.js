import React from "react";
import Radio from "./";

export default {
  title: "UI Components/Input/Radio",
  component: Radio,
};

export const Default = () => {
  return <Radio>Option</Radio>;
};

export const RadioGroup = () => (
  <Radio.Group label="Please choose">
    <Radio name="option">Option 1</Radio>
    <Radio name="option">Option 2</Radio>
    <Radio name="option">Option 3</Radio>
  </Radio.Group>
);
