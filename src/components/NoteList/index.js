import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";
function NoteList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["Recently Modified", "Newest"]}
        actionLabel="New Note"
      >
        <Notes>
          {new Array(10).fill(0).map((_, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <NoteCard></NoteCard>
            </animated.div>
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
