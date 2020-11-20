import React from "react";
import PropTypes from "prop-types";
import StyledSettings, {
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsItem,
} from "./style";
import Paragraph from "components/Paragraph";
import Switch from "components/Switch";
import Icon from "components/Icon";
import Seperator from "components/Seperator";
import { ReactComponent as ArrowMenuRight } from "assets/icons/arrowMenuRight.svg";
function Settings({ children, ...rest }) {
  return (
    <StyledSettings {...rest}>
      <SettingsGroup groupName="Privacy">
        <SettingsItem label="Require Friend Request"></SettingsItem>
        <SettingsItem
          label="Find Mobile Contacts"
          description="Enabling will recommend you mobile contacts who also use this app."
        ></SettingsItem>
        <SettingsItem label="Only Find me by mobile number"></SettingsItem>
      </SettingsGroup>
      <SettingsGroup groupName="Notifications">
        <SettingsItem label="Message Notifications"></SettingsItem>
        <SettingsItem label="Voice and Video Call Notifications"></SettingsItem>
        <SettingsItem label="Show Preview Text"></SettingsItem>
        <SettingsItem label="Sound"></SettingsItem>
        <SettingsItem label="See Block List" type="menu"></SettingsItem>
      </SettingsGroup>
    </StyledSettings>
  );
}

function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  );
}
export function SettingsItem({
  type = "switch",
  label,
  description,
  children,
  ...rest
}) {
  return (
    <StyledSettingsItem {...rest}>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === "switch" && <Switch></Switch>}
        {type === "menu" && <Icon icon={ArrowMenuRight}></Icon>}
      </SettingsItemControl>

      {description && (
        <Paragraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Paragraph>
      )}
      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }}></Seperator>
    </StyledSettingsItem>
  );
}
Settings.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Settings;
