import React from "react";
import MessageCard from "./";
import face1 from "assets/images/face-male-1.jpg";
export default {
  title: "UI Components/MessageCard",
  component: MessageCard,
};

export const Default = () => {
  return (
    <MessageCard
      avatarSrc={face1}
      name="John Doe"
      avatarStatus="online"
      statusText="online"
      time="3 hours ago"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      unreadCount={2}
    ></MessageCard>
  );
};

export const Active = () => {
  return (
    <MessageCard
      avatarSrc={face1}
      name="John Doe"
      avatarStatus="online"
      statusText="online"
      time="3 hours ago"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      unreadCount={2}
      active
    ></MessageCard>
  );
};

export const RepliedActive = () => {
  return (
    <MessageCard
      avatarSrc={face1}
      name="John Doe"
      avatarStatus="online"
      statusText="online"
      time="3 hours ago"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      unreadCount={2}
      replied
      active
    ></MessageCard>
  );
};

export const RepliedInactive = () => {
  return (
    <MessageCard
      avatarSrc={face1}
      name="John Doe"
      avatarStatus="online"
      statusText="online"
      time="3 hours ago"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      unreadCount={2}
      replied
    ></MessageCard>
  );
};
