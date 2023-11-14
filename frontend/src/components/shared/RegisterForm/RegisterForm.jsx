import { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../shared/Spinner/Spinner';
import './registerForm.css';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const RegisterForm = ({ authRegister }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== passwordV) {
        alert('Las contraseñas no coinciden');
        return;
      }
      setLoading(true);

      await authRegister(username, email, password);

      // Redireccionamos a login.
      navigate('/login');
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='f-register' onSubmit={handleSubmit}>
      <div className='inputs-register'>
        <input
          className='i-register'
          placeholder='NOMBRE'
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength='3'
          autoFocus
          required
        />

        <input
          className='i-register'
          placeholder='EMAIL'
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className='i-register'
          placeholder='CONTRASEÑA'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength='8'
          maxLength='100'
          required
        />

        <input
          className='i-register'
          placeholder='REPITE CONTRASEÑA'
          type='password'
          id='passwordV'
          value={passwordV}
          onChange={(e) => setPasswordV(e.target.value)}
          minLength='8'
          maxLength='100'
          required
        />
        <button className='b-register'>REGISTRATE</button>
      </div>
      {loading && <Spinner />}
      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </form>
  );
};

RegisterForm.propTypes = { authRegister: PropTypes.func.isRequired };

export default RegisterForm;
