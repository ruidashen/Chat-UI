import React from "react";
import PropTypes from "prop-types";
import StyledInput, { InputContainer, Prefix, Suffix } from "./style";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import Icon from "components/Icon";
import { useTheme } from "styled-components";

function Input({ placeholder = "Please enter...", prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder}></StyledInput>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

function Search({ placeholder = "Please enter keywords", ...rest }) {
  const theme = useTheme();
  return (
    <Input
      placeholder={placeholder}
      {...rest}
      prefix={
        <Icon
          icon={SearchIcon}
          width={18}
          height={18}
          color={theme.gray3}
        ></Icon>
      }
    ></Input>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

Input.Search = Search;
export default Input;
