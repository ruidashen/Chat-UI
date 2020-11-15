import Icon from "components/Icon";
import Select from "components/Select";
import React from "react";
import Filter from "./";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Option from "components/Option";
import Button from "components/Button";
export default {
  title: "UI Components/Filter",
  component: Filter,
};

export const Default = () => {
  return (
    <Filter>
      <Filter.Filters label="sort list">
        <Select>
          <Option>Newest messages first</Option>
          <Option>Online friends messages first</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="Start Chat">
        <Button>
          <Icon icon={Plus} width={12} height={12}></Icon>
        </Button>
      </Filter.Action>
    </Filter>
  );
};
