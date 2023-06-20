import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowGithubUser from './Components/ShowGithubUser';

export default function App() {
  return (
    <Routes>
      <Route path="/users/:username" Component={ShowGithubUser} />
    </Routes>
  );
}