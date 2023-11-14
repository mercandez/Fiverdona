const updateUserPasswordUtility = async (currentPass, newPass, token) => {
  const url = "http://localhost:8080/users/password";

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ currentPass, newPass }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData.message;
  } catch (error) {
    throw new Error("Error al actualizar la contraseña: " + error.message);
  }
};

export default updateUserPasswordUtility;
