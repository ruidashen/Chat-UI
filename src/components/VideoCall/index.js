import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledVideoCall, {
  Action,
  Actions,
  Minimize,
  Self,
  VideoCallAlert,
} from "./style";
import videCaller from "assets/images/video-caller.jpg";
import face from "assets/images/face-male-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVideo,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Avatar from "components/Avatar";
import "styled-components/macro";

function VideoCall({ onHangUpClick, children, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);

  if (!fullScreen) {
    return (
      <VideoCallAlert>
        <Avatar
          src={face}
          css={`
            grid-area: avatar;
          `}
        ></Avatar>
        <Paragraph
          size="medium"
          css={`
            grid-area: info;
          `}
        >
          Video Calling <Text bold>Friend 1</Text>
        </Paragraph>
        <Paragraph
          type="secondary"
          css={`
            grid-area: action;
            cursor: pointer;
          `}
          onClick={() => setFullScreen(true)}
        >
          Switch to full screen
        </Paragraph>
        <FontAwesomeIcon
          icon={faVideo}
          css={`
            grid-area: icon;
            font-size: 20px;
            justify-self: end;
            opacity: 0.3;
          `}
        ></FontAwesomeIcon>
      </VideoCallAlert>
    );
  }
  return (
    <StyledVideoCall {...rest} src={videCaller}>
      <Minimize shape="rect" onClick={() => setFullScreen(false)}>
        <FontAwesomeIcon icon={faCompressAlt}></FontAwesomeIcon>
      </Minimize>
      <Actions>
        <Action>
          <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
        </Action>
        <Action type="hangup">
          <FontAwesomeIcon
            icon={faPhoneSlash}
            onClick={onHangUpClick}
          ></FontAwesomeIcon>
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
        </Action>
      </Actions>
      <Self src={face} size="140px"></Self>
    </StyledVideoCall>
  );
}

VideoCall.propTypes = {
  children: PropTypes.any,
};

export default VideoCall;
