import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Name, Intro } from "./style";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-1.jpg";
function ContactCard({ children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face} status="online"></Avatar>
      <Name>John Doe</Name>
      <Intro>Front End Developer</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
