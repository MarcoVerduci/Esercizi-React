import React, { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username !== '' && password !== '') {
            console.log({ username, password });
        }
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    const isDisabled = username === '' || password === '';

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={isDisabled} onClick={handleLogin}>
                Login
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};
