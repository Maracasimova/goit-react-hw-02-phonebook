import style from './ContactUser.module.css';
import PropTypes from 'prop-types';

export const ContactUser = ({ name, number }) => {
  return (
    <>
      <p className={style.text}>Name: {name}</p>
      <p className={style.text}>Number: {number}</p>
    </>
  );
};

ContactUser.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
