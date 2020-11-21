import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Actions, Title } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";
import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";
import face from "assets/images/face-male-1.jpg";
import Text from "components/Text";
import Dropdown from "components/Dropdown";
import { DropdownItem } from "components/Dropdown/style";
import Seperator from "components/Seperator";
function TitleBar({ onAvatarClick, onVideoClick, children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status="offline" src={face} onClick={onAvatarClick}></Avatar>
      <Title>
        <Paragraph size="large">John Doe</Paragraph>
        <Paragraph type="secondary">
          <Text>Offline</Text>
          <Text>· Last read: 3 hours ago</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.3}></Icon>
        <Icon icon={Camera} opacity={0.3} onClick={onVideoClick}></Icon>
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>Profile</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>Close Chat</Paragraph>
              </DropdownItem>
              <Seperator></Seperator>
              <DropdownItem>
                <Paragraph type="danger">Block Friend</Paragraph>
              </DropdownItem>
            </>
          }
        >
          <Icon icon={Options} opacity={0.3}></Icon>
        </Dropdown>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
