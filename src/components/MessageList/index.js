import React from "react";
import PropTypes from "prop-types";
import Filter from "components/Filter";
import Select from "components/Select";
import Icon from "components/Icon";
import Button from "components/Button";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Input from "components/Input";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg";
import Option from "components/Option";
import StyledMessageList, { ChatList } from "./style";
function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <Input.Search></Input.Search>
      <ChatFilter></ChatFilter>
      <ChatList>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <MessageCard
            key={index}
            active={index === 3}
            replied={index % 3 === 0}
            avatarSrc={face1}
            name="John Doe"
            avatarStatus="online"
            statusText="Online"
            time="3 hours ago"
            message="This is a message"
            unreadCount={2}
          ></MessageCard>
        ))}
      </ChatList>
    </StyledMessageList>
  );
}

function ChatFilter() {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="sort list">
        <Select>
          <Option>Newest messages</Option>
          <Option>Online friends</Option>
        </Select>
      </Filter.Filters>
      <Filter.Action label="New Chat">
        <Button>
          <Icon icon={Plus} width={12} height={12}></Icon>
        </Button>
      </Filter.Action>
    </Filter>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
