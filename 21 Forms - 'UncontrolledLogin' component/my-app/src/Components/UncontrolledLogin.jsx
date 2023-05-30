import React, { useRef, useEffect, useState } from 'react';

export function UncontrolledLogin({ onLogin }) {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const checkInputValidity = () => {
            const usernameValue = usernameRef.current.value;
            const passwordValue = passwordRef.current.value;
            setIsDisabled(usernameValue === '' || passwordValue === '');
        };

        const usernameInput = usernameRef.current;
        const passwordInput = passwordRef.current;

        usernameInput.addEventListener('input', checkInputValidity);
        passwordInput.addEventListener('input', checkInputValidity);

        return () => {
            usernameInput.removeEventListener('input', checkInputValidity);
            passwordInput.removeEventListener('input', checkInputValidity);
        };
    }, []);

    const handleLogin = () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (username !== '' && password !== '') {
            console.log({ username, password });
        }
    };

    const handleReset = () => {
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        setIsDisabled(true);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                ref={usernameRef}
            />
            <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
            />
            <button disabled={isDisabled} onClick={handleLogin}>
                Login
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}
