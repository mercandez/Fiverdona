import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useService from '../../hooks/useService';
import Service from '../../components/shared/Service/Service';
import ErrorPopUp from '../../components/shared/ErrorPopUp/ErrorPopUp';
import Spinner from '../../components/shared/Spinner/Spinner';

const ServicePage = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const { service, markServiceAsResolved, loading, errMsg } = useService(
    id,
    token
  );
  const [errorPopUp, setErrorPopUp] = useState(false); // Agregamos el estado del errorPopUp

  useEffect(() => {
    if (errMsg) {
      console.error('Error al cargar el servicio', errMsg);
      setErrorPopUp(true); // Mostramos el ErrorPopUp cuando hay un error
    }
  }, [errMsg]);

  if (!token) return <Navigate to='/Register' />;

  return (
    <main>
      <section>
        {!service ? (
          <Spinner />
        ) : (
          <Service
            service={service}
            markServiceAsResolved={markServiceAsResolved}
            loading={loading}
          />
        )}

        {errorPopUp && (
          <ErrorPopUp open={true} onClose={() => setErrorPopUp(false)} />
        )}
      </section>
    </main>
  );
};

export default ServicePage;
