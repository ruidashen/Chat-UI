import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";
import notesData from "data/notes";

function NoteList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["Recently Modified", "Newest"]}
        actionLabel="New Note"
      >
        <Notes>
          {notesData.map((note, i) => (
            <animated.div key={note.id} style={trailAnimes[i]}>
              <NoteCard note={note}></NoteCard>
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
