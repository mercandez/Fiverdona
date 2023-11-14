const updateUserMailUtility = async (newUsername, newEmail, token) => {
  const url = "http://localhost:8080/users";

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ email: newEmail, username: newUsername }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData.message;
  } catch (error) {
    throw new Error(
      "Error al actualizar el email y el username: " + error.message
    );
  }
};

export default updateUserMailUtility;
