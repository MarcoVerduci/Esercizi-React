import React, { useState } from 'react';
import { GithubUser } from './GithubUser';

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddUser = () => {
        setUsernames([...usernames, inputValue]);
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a username"
            />
            <button onClick={handleAddUser}>Add User</button>

            <div>
                {usernames.map((username, index) => (
                    <GithubUser key={index} username={username} />
                ))}
            </div>
        </div>
    );
};