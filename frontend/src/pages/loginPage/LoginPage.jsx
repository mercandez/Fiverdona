import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginForm from "../../components/shared/LoginForm/LoginForm";

const LoginPage = () => {
  const { token, authLogin } = useAuth();

  // Si la persona está logeada la redirigimos a la página principal con el header logueado.
  if (token) return <Navigate to="/" />;

  return (
    <main className="login">
      <LoginForm authLogin={authLogin} />
    </main>
  );
};

export default LoginPage;
