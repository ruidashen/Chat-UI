import React from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import { Route, Switch } from "react-router-dom";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
function ChatApp({ children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar></NavBar>
      </Nav>
      <Sidebar>
        <Switch>
          <Route exact path="/">
            <MessageList></MessageList>
          </Route>
          <Route exact path="/contacts">
            <ContactList></ContactList>
          </Route>
          <Route exact path="/files">
            <FileList></FileList>
          </Route>
          <Route exact path="/notes">
            <NoteList></NoteList>
          </Route>
          <Route exact path="/settings">
            <EditProfile></EditProfile>
          </Route>
        </Switch>
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
