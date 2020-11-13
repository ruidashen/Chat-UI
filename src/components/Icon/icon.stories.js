import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import {
  faCommentDots,
  faFolder,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default {
  title: "UI Components/Icon",
  component: Icon,
};

export const Default = () => {
  return <Icon icon={SmileIcon}></Icon>;
};

export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="#cccccc"></Icon>;
};

export const CustomSize = () => {
  return <Icon icon={SmileIcon} width={48} height={48}></Icon>;
};

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>;
};

export const FontAwesomeColor = () => {
  return (
    <FontAwesomeIcon icon={faCommentDots} color="#cccccc"></FontAwesomeIcon>
  );
};

export const FontAwesomeSizes = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faFolder}
        style={{ fontSize: "36px" }}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faStickyNote}
        style={{ fontSize: "48px" }}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ fontSize: "60px" }}
      ></FontAwesomeIcon>
    </div>
  );
};
