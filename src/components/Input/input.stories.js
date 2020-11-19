import React from "react";
import Input from "./";
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import Icon from "components/Icon";
export default {
  title: "UI Components/Input",
  component: Input,
};

export const Default = () => {
  return <Input></Input>;
};

export const Search = () => {
  return <Input.Search></Input.Search>;
};

export const WithAffix = () => {
  return (
    <Input
      prefix={<Icon icon={ClipIcon} color="#cccccc"></Icon>}
      suffix={<Icon icon={SmileIcon} color="#cccccc"></Icon>}
    ></Input>
  );
};

export const InputTextWithLabel = () => (
  <Input.Text label="Nickname"></Input.Text>
);
export const InputTextWithoutLabel = () => <Input.Text></Input.Text>;
