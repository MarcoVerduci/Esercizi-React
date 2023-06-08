import React, { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        if (username !== '' && password !== '') {
            console.log({ username, password, remember });
        }
    };

    const isDisabled = username === '' || password === '';

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
            </label>
            <button disabled={isDisabled} onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
