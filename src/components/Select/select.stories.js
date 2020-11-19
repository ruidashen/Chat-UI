import Option from "components/Option";
import React from "react";
import Select from "./";

export default {
  title: "UI Components/Input/Select",
  component: Select,
};

export const Default = () => {
  return (
    <Select>
      <Option>Newest messages first</Option>
      <Option>Online friends messages first</Option>
    </Select>
  );
};

export const FormSelect = () => {
  return (
    <Select type="form">
      <Option>California</Option>
      <Option>New York</Option>
    </Select>
  );
};
