import React from "react";
import PropTypes from "prop-types";
import StyledFileList, { Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";
function FileList({ children, ...rest }) {
  return (
    <StyledFileList {...rest}>
      <FilterList options={["Date Modified", "Name"]}>
        <Files>
          {new Array(10).fill(0).map((_, i) => (
            <FileCard key={i}></FileCard>
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
