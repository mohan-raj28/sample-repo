import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Email: ${form.email}\nPassword: ${form.password}`);
    };

    return (
        <div style={{ maxWidth: 400, margin: "50px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </label>
                </div>
                <button type="submit" style={{ width: "100%", padding: 10 }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;