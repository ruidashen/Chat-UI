import React from "react";
import PropTypes from "prop-types";
import StyledFilterList from "./style";
import Input from "components/Input";
import Filter from "components/Filter";
import Option from "components/Option";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Select from "components/Select";
import Button from "components/Button";
import Icon from "components/Icon";

function FilterList({
  children,
  options,
  filterLabel = "sort list",
  actionLabel,
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search></Input.Search>
      <Filter style={{ padding: "20px 0" }}>
        {options && (
          <Filter.Filters label={filterLabel}>
            <Select>
              {options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
            </Select>
          </Filter.Filters>
        )}
        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12}></Icon>
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  options: PropTypes.array,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default FilterList;
