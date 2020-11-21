import Paragraph from "components/Paragraph";
import Seperator from "components/Seperator";
import React from "react";
import Dropdown from "./";
import { DropdownItem } from "./style";
import { ReactComponent as Options } from "assets/icons/options.svg";
import Icon from "components/Icon";
export default {
  title: "UI Components/Dropdown",
  component: Dropdown,
};

export const Default = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: "50%" }}
    >
      <Paragraph>Click Button On The Right</Paragraph>
      <Dropdown content={dropdownContent}>
        <Icon opacity={0.3} icon={Options}></Icon>
      </Dropdown>
    </div>
  );
};

export const Left = () => (
  <div>
    <Paragraph>Click Button Below</Paragraph>
    <Dropdown content={dropdownContent} align="left">
      <Icon opacity={0.3} icon={Options}></Icon>
    </Dropdown>
  </div>
);
const dropdownContent = (
  <>
    <DropdownItem>
      <Paragraph>Profile</Paragraph>
    </DropdownItem>
    <DropdownItem>
      <Paragraph>Close Chat</Paragraph>
    </DropdownItem>
    <Seperator></Seperator>
    <DropdownItem>
      <Paragraph type="danger">Block Friend</Paragraph>
    </DropdownItem>
  </>
);
