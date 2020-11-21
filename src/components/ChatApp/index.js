import React from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
function ChatApp({ children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar></NavBar>
      </Nav>
      <Sidebar>
        <MessageList></MessageList>
      </Sidebar>
      <Content>
        <Conversation></Conversation>
      </Content>
      <Drawer>
        <Profile></Profile>
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
