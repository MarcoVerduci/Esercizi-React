import React, { useState, useEffect } from 'react';

export function useGithubUser(username) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    throw new Error(response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserData();
    }, [username]);

    return userData;
}