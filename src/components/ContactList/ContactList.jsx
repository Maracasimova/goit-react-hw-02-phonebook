import { ContactUser } from 'components/ContactUser/ContactUser';
import PropTypes from 'prop-types';

export const ContactList = ({ contactSearch, deleteContact }) => {
  if (contactSearch.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul>
      {contactSearch.map(({ name, number, id }) => {
        return (
          <ContactUser
            id={id}
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactSearch: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
