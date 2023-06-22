import { Routes, Route } from 'react-router-dom';
import { GithubUser } from './Components/GithubUser';
import { ShowGithubUser } from './Components/ShowGithubUser';

function App() {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/users" element={<GithubUser />} />
      <Route path="/users/:username" element={<ShowGithubUser />} />
      <Route index element={<h2>Add a user and select it</h2>} />
    </Routes>
    
  );
}

export default App;
