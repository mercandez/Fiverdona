import './errorMessage.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => {
  return <p className='p-error'>Error: {msg}</p>;
};

ErrorMessage.propTypes = {
  msg: PropTypes.string,
};

export default ErrorMessage;
