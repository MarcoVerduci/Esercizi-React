import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function GithubUser() {
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
                    <div key={index}>
                        <Link to={`/users/${username}`}>{username}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
