import React from "react";
import Text from "./";

export default {
  title: "Typography/Text",
  component: Text,
};

export const Default = () => {
  return <Text>Default</Text>;
};

export const Secondary = () => {
  return <Text type="secondary">Secondary</Text>;
};

export const Medium = () => {
  return <Text size="medium">Medium sized text</Text>;
};

export const LargeAndBold = () => {
  return (
    <Text size="large" bold>
      Large sized and bold text
    </Text>
  );
};
