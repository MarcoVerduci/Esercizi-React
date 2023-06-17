import { useState } from 'react';

export function FormInput() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return {
        username,
        password,
        handleUsernameChange,
        handlePasswordChange
    };
};
