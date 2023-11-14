const CreateServiceUtility = async (title, description, fileName, token) => {
  // Si queremos enviar un body en formato "form-data" es necesario crear un objeto de este
  // mismo tipo y "pushear" en él los elementos que queremos enviar.
  const formData = new FormData();

  // Pusheamos las propiedades con "append".

  formData.append("title", title);
  formData.append("description", description);

  // Si existe archivo lo agregamos.
  if (fileName) formData.append("file", fileName);

  const res = await fetch("http://localhost:8080/services", {
    method: "post",
    headers: {
      Authorization: token,
    },
    body: formData,
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default CreateServiceUtility;
