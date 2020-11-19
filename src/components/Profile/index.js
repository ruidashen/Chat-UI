import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
  Album,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
  ContactSection,
  Photo,
  SocialLinks,
} from "./style";
import "styled-components/macro";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-3.jpg";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Seperator from "components/Seperator";
import Text from "components/Text";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";
import { ReactComponent as Cross } from "assets/icons/cross.svg";

function Profile({ children, ...rest }) {
  return (
    <StyledProfile {...rest}>
      <CloseIcon icon={Cross}></CloseIcon>
      <Avatar
        css={`
          margin: 26px 0;
        `}
        src={face}
        size="160px"
        status="online"
        statusIconSize="25px"
      ></Avatar>
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        John Doe
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        City,State
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        I design and create websites.
        <Emoji label="fire">🔥</Emoji>
      </Paragraph>
      <SocialLinks>
        <Icon.Soical
          icon={faLinkedin}
          bgColor="#004182"
          href="www.linkedin.com"
        ></Icon.Soical>
        <Icon.Soical
          icon={faGithub}
          bgColor="#24292E"
          href="www.github.com"
        ></Icon.Soical>
        <Icon.Soical
          icon={faInstagram}
          bgColor="#D247A7"
          href="www.instagram.com"
        ></Icon.Soical>
      </SocialLinks>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      ></Seperator>
      <ContactSection>
        <Description label="Phone">111 222 3333</Description>
        <Description label="Email">johndoe@gmail.com</Description>
        <Description label="Website">https://www.mywebsite.io</Description>
      </ContactSection>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      ></Seperator>
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">Album(31) </Text>
          <a>see all</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt=""></Photo>
          <Photo src={photo2} alt=""></Photo>
          <Photo src={photo3} alt=""></Photo>
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}: </Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}
Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
