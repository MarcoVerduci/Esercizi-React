import React from 'react';
import { useParams } from 'react-router-dom';

export function ShowGithubUser() {
    const { username } = useParams();

    return <h2>Github User: {username}</h2>;
}