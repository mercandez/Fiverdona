import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Importamos las funciones que me permiten hacer peticiones al servidor.
import getUserUtility from '../utilities/UsersUtilities/getUserUtility';
import loginUtility from '../utilities/UsersUtilities/loginUtility';
import registerUtility from '../utilities/UsersUtilities/registerUtility';
import updateUserAvatarUtility from '../utilities/UsersUtilities/updateUserAvatarUtility';
import updateUserMailUtility from '../utilities/UsersUtilities/updateUserMailUtility';
import updateUserPasswordUtility from '../utilities/UsersUtilities/updateUserPasswordUtility';

// Creamos el contexto.
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  // Obtenemos los datos del usuario si existe un token.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserUtility(token);

        setUser(user);
      } catch (err) {
        alert(err.message);
      }
    };

    // Si existe token obtenemos los datos del usuario.
    if (token) fetchUser();
  }, [token]);

  // Función que registra un usuario.
  const authRegister = async (username, email, password) => {
    await registerUtility(username, email, password);
  };

  // Función de login que almacena el token en el localStorage y en el State.
  const authLogin = async (email, password) => {
    const newToken = await loginUtility(email, password);

    localStorage.setItem('token', newToken);

    setToken(newToken);
  };

  // Función de logout que elimina el token del localStorage y del State. También elimina
  // el usuario del State.
  const authLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Función que edita el avatar y actualiza el State.
  const authUpdateAvatar = async (newAvatar) => {
    const avatarName = await updateUserAvatarUtility(newAvatar, token);

    setUser({
      ...user,
      avatar: avatarName,
    });
  };

  // Función que edita el nombre de usuario y el email. Actualizamos el State.
  const authUpdateUsernameEmail = async (newUsername, newEmail) => {
    await updateUserMailUtility(newUsername, newEmail, token);

    setUser({
      ...user,
      username: newUsername,
      email: newEmail,
    });
  };

  // Función que edita la contraseña del usuario.
  const authUpdatePassword = async (currentPass, newPass) => {
    await updateUserPasswordUtility(currentPass, newPass, token);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        authRegister,
        authLogin,
        authLogout,
        authUpdateAvatar,
        authUpdateUsernameEmail,
        authUpdatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
