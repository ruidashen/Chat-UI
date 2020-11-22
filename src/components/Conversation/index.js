import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import { useSpring } from "react-spring";
function Conversation({ onAvatarClick, onVideoClick, children, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(0px,-50px,0px)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(50px,0px,0px)" },
    delay: 800,
  });

  const ftAnmieProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(0px,50px,0px)" },
    delay: 950,
  });
  return (
    <StyledConversation {...rest}>
      <TitleBar
        animeProps={tBarAnimeProps}
        onAvatarClick={onAvatarClick}
        onVideoClick={onVideoClick}
      ></TitleBar>
      <Conversations style={convsAnimeProps}>
        <ChatBubble time="Yesterday 2:26pm">Hi, How are you doing?</ChatBubble>
        <MyChatBubble time="Yesterday 4:30pm">I am coding!</MyChatBubble>
        <ChatBubble time="Yesterday 6:30pm">
          <VoiceMessage time="01:24"></VoiceMessage>
        </ChatBubble>
        <MyChatBubble time="Yesterday 6:34pm">
          Let's play some games tomorrow.<Emoji label="smile">🙂</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnmieProps}></Footer>
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
