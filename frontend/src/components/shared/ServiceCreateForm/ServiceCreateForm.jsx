import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateServiceUtility from '../../../utilities/ServicesUtilities/createServiceUtility';
import Spinner from '../../shared/Spinner/Spinner';
import ErrorPopUp from '../ErrorPopUp/ErrorPopUp';
import './serviceCreateForm.css';

const ServiceCreateForm = ({ token }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState();
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await CreateServiceUtility(title, description, fileName, token);

      // Redireccionamos a la página principal.
      navigate('/');
    } catch (err) {
      setErrorPopUp(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='f-service-container' onSubmit={handleSubmit}>
      <h2>¿Qué servicio quieres publicar? 🤔</h2>
      <input
        type='text'
        placeholder='Título del servicio'
        className='i-service'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength='5'
        autoFocus
        required
      />
      <input
        type='file'
        className='i2-service'
        onChange={(e) => setFileName(e.target.files[0])}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength='10'
        required
      />

      <button className='b-service' disabled={loading}>
        Añadir servicio
      </button>

      {loading && <Spinner />}
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
    </form>
  );
};

ServiceCreateForm.propTypes = {
  token: PropTypes.string,
};

export default ServiceCreateForm;
