import PropTypes from 'prop-types';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import ServiceBody from './ServiceBody/ServiceBody';

import './service1.css';

const Service1 = ({ service }) => {
  return (
    <ul className='service1-container'>
      <li>
        <ServiceHeader
          username={service.username}
          createdAt={service.createdAt}
          title={service.title}
        />
        <ServiceBody service={service} />
      </li>
    </ul>
  );
};

Service1.propTypes = {
  service: PropTypes.object,
};

export default Service1;
