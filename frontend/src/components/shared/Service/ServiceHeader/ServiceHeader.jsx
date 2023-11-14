import PropTypes from "prop-types";
import "./serviceHeader.css";

const ServiceHeader = ({ username, createdAt, title }) => {
  return (
    <ul className="container-service-header">
      <p>@{username}</p>
      <time>
        {new Date(createdAt).toLocaleDateString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        })}
      </time>
      <p>{title}</p>
    </ul>
  );
};

ServiceHeader.propTypes = {
  username: PropTypes.string,
  createdAt: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceHeader;
