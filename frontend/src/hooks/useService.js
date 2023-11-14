import { useEffect, useState } from 'react';
import getServiceUtility from '../utilities/ServicesUtilities/getServiceUtility';
import resolvedServiceUtility from '../utilities/ServicesUtilities/resolvedServiceUtility';

const useService = (id, token) => {
  const [service, setService] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        setLoading(true);
        const serviceData = await getServiceUtility(id, token);
        setService(serviceData);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id, token]);

  // Función que marca un servicio como completado en la base de datos y actualiza el State.
  const markServiceAsResolved = async (serviceId, token) => {
    try {
      setLoading(true);

      await resolvedServiceUtility(serviceId, token);

      // Actualizamos el State para marcar como completado el servicio.
      setService({
        ...service,
        resolved: true,
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { service, errMsg, markServiceAsResolved, loading };
};

export default useService;
