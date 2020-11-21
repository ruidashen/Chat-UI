import React from "react";
import PropTypes from "prop-types";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg";
import StyledMessageList, { ChatList } from "./style";
import FilterList from "components/FilterList";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";
function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["New Messages", "Online Friends"]}
        actionLabel="New Chat"
      >
        <ChatList>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <animated.div key={index} style={trailAnimes[index]}>
              <MessageCard
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
