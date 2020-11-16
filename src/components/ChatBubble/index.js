import React from "react";
import PropTypes from "prop-types";
import StyledChatBubble, {
  Bubble,
  BubbleTip,
  Time,
  MessageText,
} from "./style";
import { ReactComponent as BubbltTipIcon } from "assets/icons/bubbleTip.svg";
function ChatBubble({ children, type, time, ...rest }) {
  return (
    <StyledChatBubble {...rest} type={type}>
      <Bubble>
        <BubbleTip
          icon={BubbltTipIcon}
          width={40}
          height={28}
          color="white"
        ></BubbleTip>
        <MessageText>{children}</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </StyledChatBubble>
  );
}

ChatBubble.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default ChatBubble;
