import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { MenuIcon, MenuItems, StyleMenuItem } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import profileImage from "assets/images/face-male-1.jpg";
import {
  faCog,
  faCommentDots,
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
function NavBar({ children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online"></Avatar>
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots}></MenuItem>
        <MenuItem icon={faUsers}></MenuItem>
        <MenuItem icon={faFolder}></MenuItem>
        <MenuItem icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem
          icon={faCog}
          css={`
            align-self: end;
          `}
        ></MenuItem>
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyleMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </a>
    </StyleMenuItem>
  );
}
NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
