const loginUtility = async (email, password) => {
    const res = await fetch('http://localhost:8080/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.token;
};

export default loginUtility;
