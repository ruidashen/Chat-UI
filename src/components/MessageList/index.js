import React from "react";
import PropTypes from "prop-types";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg";
import StyledMessageList, { ChatList } from "./style";
import FilterList from "components/FilterList";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";
import messageData from "data/messages";
function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["New Messages", "Online Friends"]}
        actionLabel="New Chat"
      >
        <ChatList>
          {messageData.map((message, index) => (
            <animated.div key={message.id} style={trailAnimes[index]}>
              <MessageCard
                active={index === 3}
                replied={message.replied}
                avatarSrc={message.avatarSrc}
                name={message.name}
                avatarStatus={message.status}
                statusText={message.statusText}
                time={message.time}
                message={message.message}
                unreadCount={message.unreadCount}
              ></MessageCard>
            </animated.div>
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
