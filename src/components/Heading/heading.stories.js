import React from "react";
import Heading from "./";

export default {
  title: "Typography/Heading",
  component: Heading,
};

export const H1 = () => <Heading level={1}>Heading</Heading>;
export const H2 = () => <Heading level={2}>Heading</Heading>;
export const H3 = () => <Heading level={3}>Heading</Heading>;
export const H4 = () => <Heading level={4}>Heading</Heading>;
export const H5 = () => <Heading level={5}>Heading</Heading>;
export const H6 = () => <Heading level={6}>Heading</Heading>;
