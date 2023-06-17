import React from 'react';
import { useGithubUser } from './useGithubUser';

export function GithubUser({ username }) {
    const userData = useGithubUser(username);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Username: {userData.login}</p>
            <p>Followers: {userData.followers}</p>
            <p>Public repositories: {userData.public_repos}</p>
        </div>
    );
}