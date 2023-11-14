const getServiceUtility = async (serviceId, token) => {
  const res = await fetch(`http://localhost:8080/services/${serviceId}`, {
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error("Error al obtener los datos del servicio y comentarios.");
  }

  return json.data.service;
};

export default getServiceUtility;
