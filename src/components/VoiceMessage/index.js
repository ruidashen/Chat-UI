import React from "react";
import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";
import Icon from "components/Icon";
import { ReactComponent as Play } from "assets/icons/play.svg";
import { ReactComponent as Wave } from "assets/icons/wave.svg";
import Text from "components/Text";
import { useTheme } from "styled-components";
import Button from "components/Button";

function VoiceMessage({ children, time, type, ...rest }) {
  const theme = useTheme();
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size="40px">
        <Icon
          icon={Play}
          color="white"
          width="14"
          height="16"
          style={{ transform: "translateX(1px" }}
        ></Icon>
      </Button>
      <Icon
        icon={Wave}
        width="100%"
        height="100%"
        color={theme.primaryColor}
      ></Icon>
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default VoiceMessage;
