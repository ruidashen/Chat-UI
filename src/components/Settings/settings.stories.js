import React from "react";
import Settings, { SettingsItem } from "./";

export default {
  title: "Page Components/Settings",
  component: Settings,
  parameters: {
    chromatic: { disable: true },
  },
};

export const Default = () => {
  return <Settings></Settings>;
};

export const WithoutDescription = () => (
  <SettingsItem label="This is a setting item without description"></SettingsItem>
);

export const WithDescription = () => (
  <SettingsItem
    label="This is a setting item with description"
    description="description goes here"
  ></SettingsItem>
);

export const WithMenu = () => (
  <SettingsItem
    label="This is a setting item that has sub menu"
    type="menu"
  ></SettingsItem>
);
