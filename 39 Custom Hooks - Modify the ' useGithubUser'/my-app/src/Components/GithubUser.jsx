import React, { useState, useEffect } from 'react';

export function useGithubUser(username) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchUserData();
    }, [username]);

    return {
        userData,
        loading,
        error,
        fetchUserData
    };
}

export function GithubUser({ username }) {
    const { userData, loading, error, fetchUserData } = useGithubUser(username);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <p>Username: {userData.login}</p>
            <p>Followers: {userData.followers}</p>
            <p>Public repositories: {userData.public_repos}</p>
        </div>
    );
}
