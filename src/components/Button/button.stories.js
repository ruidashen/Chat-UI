import React from "react";
import Button from "./";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Icon from "components/Icon";
export default {
  title: "UI Components/Button",
  component: Button,
};

export const Default = () => {
  return <Button shape="rect">Default</Button>;
};

export const Circle = () => {
  return (
    <Button size="72px">
      <Icon icon={Plus} width={24} height={24}></Icon>
    </Button>
  );
};
