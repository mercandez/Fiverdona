const addCommentUtility = async (text, fileName, serviceId, token) => {
  // Si queremos enviar un body en formato "form-data" es necesario crear un objeto de este
  // mismo tipo y "pushear" en él los elementos que queremos enviar.
  const formData = new FormData();
  // Pusheamos las propiedades con "append".
  formData.append("text", text);

  // Si existe un documento lo agregamos.
  if (fileName) formData.append("file", fileName);
  const res = await fetch(
    `http://localhost:8080/services/${serviceId}/comments`,
    {
      method: "post",
      headers: {
        Authorization: token,
      },
      body: formData,
    }
  );

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default addCommentUtility;
