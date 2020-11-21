import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
function Conversation({ onAvatarClick, onVideoClick, children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar
        onAvatarClick={onAvatarClick}
        onVideoClick={onVideoClick}
      ></TitleBar>
      <Conversations>
        <ChatBubble time="Yesterday 2:26pm">Hi, How are you doing?</ChatBubble>
        <MyChatBubble time="Yesterday 4:30pm">I am coding!</MyChatBubble>
        <ChatBubble time="Yesterday 6:30pm">
          <VoiceMessage time="01:24"></VoiceMessage>
        </ChatBubble>
        <MyChatBubble time="Yesterday 6:34pm">
          Let's play some games tomorrow.<Emoji label="smile">🙂</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer></Footer>
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
