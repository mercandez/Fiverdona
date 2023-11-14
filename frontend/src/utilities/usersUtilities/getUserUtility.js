const getUserUtility = async (token) => {
  const res = await fetch("http://localhost:8080/users", {
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }

  return body.data.user;
};

export default getUserUtility;
