import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBar, { MenuItem } from "./";
import "styled-components/macro";
export default {
  title: "Page Components/NavBar",
  component: NavBar,
};

export const Menu = () => {
  return (
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem showBadge active icon={faCommentDots}></MenuItem>
    </div>
  );
};
export const Default = () => {
  return <NavBar></NavBar>;
};
