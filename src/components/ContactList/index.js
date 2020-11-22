import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";
import contactsData from "data/contacts";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledContactList {...rest}>
      <FilterList options={["Recently Added", "Name"]} actionLabel="Add Friend">
        <Contacts>
          {contactsData.map((contact, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <ContactCard contact={contact}></ContactCard>
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
