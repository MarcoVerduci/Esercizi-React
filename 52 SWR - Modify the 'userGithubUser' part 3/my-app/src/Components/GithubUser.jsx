import React from 'react';
import useSWR from 'swr';

export function useGithubUser(username) {
  const fetcher = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  };

  const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

  if (error) {
    console.error('Error:', error);
  }

  const refetch = () => {
    mutate();
  };

  return {
    userData: data,
    isLoading: !data && !error,
    refetch
  };
}

export function GithubUser({ username }) {
  const { userData, isLoading, refetch } = useGithubUser(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data</div>;
  }

  return (
    <div>
      <p>Username: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
      <p>Public repositories: {userData.public_repos}</p>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}