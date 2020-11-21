import React, { useState } from "react";
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
import BlockedList from "components/BlockedList";
import Settings from "components/Settings";
import VideoCall from "components/VideoCall";
function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [videoCalling, setVideoCalling] = useState(false);
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
          <Route path="/settings">
            <EditProfile></EditProfile>
          </Route>
        </Switch>
      </Sidebar>
      <Content>
        {videoCalling && (
          <VideoCall onHangUpClick={() => setVideoCalling(false)}></VideoCall>
        )}
        <Switch>
          <Route path="/settings" exact>
            <Settings></Settings>
          </Route>
          <Route path="/settings/blocked" exact>
            <BlockedList></BlockedList>
          </Route>
          <Route path="/">
            <Conversation
              onAvatarClick={() => setShowDrawer(true)}
              onVideoClick={() => setVideoCalling(true)}
            ></Conversation>
          </Route>
        </Switch>
      </Content>
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)}></Profile>
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
