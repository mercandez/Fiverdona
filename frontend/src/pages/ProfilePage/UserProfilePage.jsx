import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Profile from './ProfilePage';

const UserProfilePage = () => {
  const {
    token,
    user,
    authUpdateAvatar,
    authUpdateUsernameEmail,
    authUpdatePassword,
  } = useAuth();

  if (!token) return <Navigate to='/Register' />;

  return (
    <main>
      <section>
        {user && (
          <Profile
            user={user}
            authUpdateAvatar={authUpdateAvatar}
            authUpdateUsernameEmail={authUpdateUsernameEmail}
            authUpdatePassword={authUpdatePassword}
          />
        )}
      </section>
    </main>
  );
};

export default UserProfilePage;
