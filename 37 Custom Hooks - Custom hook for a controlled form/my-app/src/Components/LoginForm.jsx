import React from 'react';
import { FormInput } from './FormInput';

export function LoginForm() {
    const { username, password, handleUsernameChange, handlePasswordChange } = FormInput();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
