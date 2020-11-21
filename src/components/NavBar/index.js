import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { MenuIcon, MenuItems, StyleMenuItem } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import profileImage from "assets/images/face-male-1.jpg";
import { Link, useLocation, matchPath } from "react-router-dom";
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
        <MenuItem showBadge icon={faCommentDots} to="/"></MenuItem>
        <MenuItem icon={faUsers} to="/contacts"></MenuItem>
        <MenuItem icon={faFolder} to="/files"></MenuItem>
        <MenuItem icon={faStickyNote} to="/notes"></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem
          icon={faCog}
          css={`
            align-self: end;
          `}
          to="/settings"
        ></MenuItem>
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ icon, showBadge, to, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, {
    path: to,
    exact: to === "/",
  });
  return (
    <StyleMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </Link>
    </StyleMenuItem>
  );
}
NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
