import { Box } from 'Box';
import { ContactItem, ContactText } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box as="ul" mt={4} mb={4}>
      {contacts.map(el => {
        const { id, name, number } = el;
        return (
          <ContactItem key={id}>
            <ContactText>{name}: </ContactText>
            <ContactText>{number}</ContactText>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </ContactItem>
        );
      })}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};
