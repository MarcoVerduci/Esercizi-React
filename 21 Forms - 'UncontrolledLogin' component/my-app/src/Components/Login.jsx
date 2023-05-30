import React from 'react';
import { UncontrolledLogin } from './UncontrolledLogin';

export function Login() {
    function handleLogin(credentials) {
        console.log(credentials);
    }

    return (
        <div>
            <UncontrolledLogin onLogin={handleLogin} />
        </div>
    );
};