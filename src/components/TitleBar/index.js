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
function TitleBar({ children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status="offline" src={face}></Avatar>
      <Title>
        <Paragraph size="large">John Doe</Paragraph>
        <Paragraph type="secondary">
          <Text>Offline</Text>
          <Text>· Last read: 3 hours ago</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.3}></Icon>
        <Icon icon={Camera} opacity={0.3}></Icon>
        <Icon icon={Options} opacity={0.3}></Icon>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
