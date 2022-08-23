import { Box } from 'Box';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem.jsx/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box as="ul" mt={4} mb={4}>
      {contacts.map(el => {
        const { id, name, number } = el;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
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
