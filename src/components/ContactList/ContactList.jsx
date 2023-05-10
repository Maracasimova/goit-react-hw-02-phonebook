import { ContactUser } from 'components/ContactUser/ContactUser';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contactSeach, deleteContact }) => {
  if (contactSeach.length === 0) {
    return <p className={style.message}>No contacts found.</p>;
  }

  return (
    <ul className={style.list}>
      {contactSeach.map(({ name, number, id }) => {
        return (
          <li className={style.user} key={id}>
            <ContactUser name={name} number={number} />
            <button
              className={style.btn}
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactSeach: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
