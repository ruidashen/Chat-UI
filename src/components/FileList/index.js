import React from "react";
import PropTypes from "prop-types";
import StyledFileList, { Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";
import fileData from "data/files";
function FileList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledFileList {...rest}>
      <FilterList options={["Date Modified", "Name"]}>
        <Files>
          {fileData.map((file, i) => (
            <animated.div key={file.id} style={trailAnimes[i]}>
              <FileCard file={file}></FileCard>
            </animated.div>
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
