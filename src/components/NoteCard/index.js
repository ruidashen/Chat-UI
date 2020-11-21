import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
  NoteExcerpt,
  NoteImage,
  NotePublishTime,
  NoteTitle,
} from "./style";
import note1 from "assets/images/note-1.jpg";
function NoteCard({ children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note1}></NoteImage>
      <NoteTitle>This is Note Title</NoteTitle>
      <NoteExcerpt>This is Node Excerpt</NoteExcerpt>
      <NotePublishTime>12/31/2020</NotePublishTime>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
