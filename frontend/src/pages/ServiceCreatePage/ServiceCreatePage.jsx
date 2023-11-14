import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ServiceCreateForm from '../../components/shared/ServiceCreateForm/ServiceCreateForm';

const ServiceCreatePage = () => {
  const { token } = useAuth();

  // Si la persona NO está logeada la redirigimos a la página principal.
  if (!token) return <Navigate to='/' />;

  return (
    <main>
      <ServiceCreateForm token={token} />
    </main>
  );
};

export default ServiceCreatePage;
