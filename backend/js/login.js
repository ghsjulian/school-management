const login = async () => {
    const url = "http://localhost:3000/admin/auth/login";
    const info = {
        email: "ghsjulian@gmail.com",
        password: "123456"
    };
    const req = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
    });
    const res = await req.json();
    console.log(res);
};
const getAdmin = async () => {
    const url = "http://localhost:3000/admin/auth/get-admin";
    const info = {
        email: "ghsjulian@gmail.com",
        password: "123456"
    };
    const req = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials : 'include'
    });
    const res = await req.json();
    console.log(res);
};

getAdmin();
