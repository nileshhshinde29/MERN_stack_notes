import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Perform client-side validation
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // Send login request to the server
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <h1>Login Form (React)</h1>
            <form onSubmit={handleLogin}>
                <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                <br />
                <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
