import React from "react";
import PropTypes from "prop-types";
import StyledBlockedList, {
  BlcokedName,
  BlockedAvatar,
  CloseableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from "./style";
import "styled-components/macro";
import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as CloseCircle } from "assets/icons/closeCircle.svg";
import Icon from "components/Icon";
import Text from "components/Text";
import face from "assets/images/face-male-1.jpg";
import { useHistory } from "react-router-dom";

function BlockedList({ children, ...rest }) {
  const history = useHistory();
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        ></Icon>
        <Text size="xxlarge">Blocked Friends</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return (
            <CloseableAvatar key={i}>
              <BlockedAvatar size="105px" src={face}></BlockedAvatar>
              <CloseIcon width={46} height={51} icon={CloseCircle}></CloseIcon>
              <BlcokedName>Friend {i + 1}</BlcokedName>
            </CloseableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
