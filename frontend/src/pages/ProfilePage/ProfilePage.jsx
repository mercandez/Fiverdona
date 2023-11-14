import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/avatar.jpg';
import { useState } from 'react';
import './profilePage.css';
const Profile = ({
  user,
  authUpdateAvatar,
  authUpdateUsernameEmail,
  authUpdatePassword,
}) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [repeatedNewPass, setRepeatedNewPass] = useState('');
  const [setErrorMessage] = useState('');

  // Establecemos el avatar del usuario.
  const avatarUrl = user.avatar
    ? `http://localhost:8080/${user.avatar}`
    : defaultAvatar;

  // Función que permite editar el avatar.
  const handleUpdateAvatar = async (e) => {
    try {
      await authUpdateAvatar(e.target.files[0]);

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert('Perfil actualizado exitosamente');
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  // Función que permite editar el nombre de usuario y email.
  const handleUpdateUsernameEmail = async (e) => {
    e.preventDefault();

    try {
      await authUpdateUsernameEmail(username, email);

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert('Perfil actualizado exitosamente');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Función que permite editar la contraseña.
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      // Si la contraseña nueva no es correcta lanzamos un error.
      if (newPass !== repeatedNewPass) {
        alert('¡La contraseña nueva no coincide!');
        throw new Error('¡La contraseña nueva no coincide!');
      }

      await authUpdatePassword(currentPass, newPass);

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert('Perfil actualizado exitosamente');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setCurrentPass('');
      setNewPass('');
      setRepeatedNewPass('');
    }
  };

  return (
    <main>
      <div className='div-profile'>
        <div className='image-upload'>
          <label htmlFor='file-input'>
            <img src={avatarUrl} alt={`Avatar de ${user.username}`} />
          </label>
          <input id='file-input' type='file' onChange={handleUpdateAvatar} />
        </div>
        <form className='f-profile' onSubmit={handleUpdateUsernameEmail}>
          <label className='l-profile' htmlFor='username'>
            Usuario:
          </label>

          <input
            type='text'
            id='username'
            className='i-profile'
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className='l-profile' htmlFor='email'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            className='i-profile'
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type='submit' className='b-profile'>
            GUARDAR CAMBIOS
          </button>
        </form>

        <form className='f-profile' onSubmit={handleUpdatePassword}>
          <label className='l-profile' htmlFor='pass'>
            Contraseña:
          </label>
          <input
            type='password'
            id='pass'
            className='i-profile'
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
          />
          <label className='l-profile' htmlFor='newPass'>
            Nueva contraseña:
          </label>
          <input
            type='password'
            id='newPass'
            className='i-profile'
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          <label className='l-profile' htmlFor='repeatedNewPass'>
            Repetir nueva contraseña:
          </label>
          <input
            type='password'
            id='repeatedNewPass'
            className='i-profile'
            value={repeatedNewPass}
            onChange={(e) => setRepeatedNewPass(e.target.value)}
          />

          <button type='submit' className='b-profile'>
            GUARDAR CAMBIOS
          </button>
        </form>
      </div>
    </main>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
  authUpdateAvatar: PropTypes.func,
  authUpdateUsernameEmail: PropTypes.func,
  authUpdatePassword: PropTypes.func,
};

export default Profile;
