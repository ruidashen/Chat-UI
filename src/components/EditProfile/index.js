import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
  GenderAndRegion,
  GroupTitle,
  SelectGroup,
  StyledIconInput,
} from "./style";
import Profile from "components/Profile";
import face from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
import InputText from "components/Input/InputText";
import Radio from "components/Radio";
import LabelContainer from "components/LabelContainer";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);

  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        showCloseIcon={false}
      ></Profile>
    );
  }

  return (
    <StyledEditProfile {...rest}>
      <Avatar
        src={face}
        size="160px"
        css={`
          grid-area: 1 / 1 / 2 / 2;
          justify-self: center;
          margin-bottom: 12px;
        `}
      ></Avatar>
      <Button
        size="52px"
        css={`
          grid-area: 1 / 1 / 3 / 2;
          z-index: 10;
          justify-self: end;
          align-self: end;
        `}
        onClick={() => setShowEdit(false)}
      >
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => setShowEdit(false)}
        ></FontAwesomeIcon>
      </Button>
      <GroupTitle>Basic Info</GroupTitle>
      <InputText label="Nickname"></InputText>
      <GenderAndRegion>
        <Radio.Group label="Gender">
          <Radio name="gender">Male</Radio>
          <Radio name="gender">Female</Radio>
        </Radio.Group>
        <LabelContainer label="Region">
          <SelectGroup>
            <Select type="form">
              <Option>State</Option>
            </Select>
            <Select type="form">
              <Option>County</Option>
            </Select>
            <Select type="form">
              <Option>City</Option>
            </Select>
          </SelectGroup>
        </LabelContainer>
      </GenderAndRegion>

      <GroupTitle>Contact Info</GroupTitle>
      <InputText label="Phone"></InputText>
      <InputText label="Email"></InputText>
      <InputText label="Website"></InputText>

      <GroupTitle>Social Networks</GroupTitle>
      <IconInput icon={faLinkedin} bgColor="#004182"></IconInput>
      <IconInput icon={faGithub} bgColor="#24292E"></IconInput>
      <IconInput icon={faInstagram} bgColor="#D247A7"></IconInput>
    </StyledEditProfile>
  );
}

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Soical icon={icon} bgColor={bgColor}></Icon.Soical>
      <InputText {...rest}></InputText>
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
