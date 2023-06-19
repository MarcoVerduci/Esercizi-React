import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowGithubUser from './Components/ShowGithubUser';

export default function App() {
  return (
    <Router>
      <Route path="/users/:username" component={ShowGithubUser} />
    </Router>
  );
}
