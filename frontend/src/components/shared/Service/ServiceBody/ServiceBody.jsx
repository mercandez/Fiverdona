import PropTypes from 'prop-types';
import './serviceBody.css';

const ServiceBody = ({ service }) => {
  return (
    <>
      <div className='div-sb'>
        <p>{service.description}</p>
      </div>
    </>
  );
};

ServiceBody.propTypes = {
  service: PropTypes.object,
};
export default ServiceBody;
