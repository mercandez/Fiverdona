import PropTypes from 'prop-types';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import ServiceBody from './ServiceBody/ServiceBody';
import ServiceFooter from './ServiceFooter/ServiceFooter';

import './service.css';

const Service = ({ service, markServiceAsResolved, loading }) => {
  return (
    <ul className='service-container'>
      <li>
        <ServiceHeader
          username={service.username}
          createdAt={service.createdAt}
          title={service.title}
        />
      </li>
      <li>
        <ServiceBody service={service} />
      </li>
      <li>
        <ServiceFooter
          service={service}
          markServiceAsResolved={markServiceAsResolved}
          loading={loading}
        />
      </li>
    </ul>
  );
};

Service.propTypes = {
  service: PropTypes.object,
  markServiceAsResolved: PropTypes.func,
  loading: PropTypes.bool,
};

export default Service;
