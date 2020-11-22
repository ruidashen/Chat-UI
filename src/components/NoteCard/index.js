import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
  NoteExcerpt,
  NoteImage,
  NotePublishTime,
  NoteTitle,
} from "./style";
import note1 from "assets/images/note-1.jpg";
function NoteCard({ note, children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note.image}></NoteImage>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteExcerpt>{note.excerpt}</NoteExcerpt>
      <NotePublishTime>{note.time}</NotePublishTime>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
