import Emoji from "components/Emoji";
import VoiceMessage from "components/VoiceMessage";
import React from "react";
import ChatBubble from "./";

export default {
  title: "UI Components/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => {
  return (
    <ChatBubble time="Yesterday 2:26pm">A message sent from others.</ChatBubble>
  );
};

export const FromMe = () => {
  return (
    <ChatBubble type="mine" time="Yesterday 2:26pm">
      A message sent from me.<Emoji label="smile">🙂</Emoji>
    </ChatBubble>
  );
};

export const VoiceMessageType = () => {
  return (
    <ChatBubble time="Yesterday 2:26pm">
      <VoiceMessage time="01:24"></VoiceMessage>
    </ChatBubble>
  );
};

export const VoiceMessageTypeMine = () => {
  return (
    <ChatBubble type="mine" time="Yesterday 2:26pm">
      <VoiceMessage type="mine" time="01:24"></VoiceMessage>
    </ChatBubble>
  );
};
