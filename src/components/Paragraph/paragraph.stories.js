import React from "react";
import Paragraph from "./";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
};

export const Default = () => {
  return (
    <>
      <Paragraph>Default</Paragraph>
      <Paragraph>Default</Paragraph>
    </>
  );
};

export const Ellipsis = () => {
  return (
    <>
      <Paragraph ellipsis>
        A long long paragraph A long long paragraph A long long paragraph A long
        long paragraph A long long paragraph A long long paragraph A long long
        paragraph A long long paragraph A long long paragraph A long long
        paragraph A long long paragraph A long long paragraph A long long
        paragraph A long long paragraph A long long paragraph A long long
        paragraph A long long paragraph A long long paragraph A long long
        paragraph A long long paragraph
      </Paragraph>
    </>
  );
};
