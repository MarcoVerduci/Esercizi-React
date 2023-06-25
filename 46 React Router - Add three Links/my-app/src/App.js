import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./Components/ClickCounter";
import ShowGithubUser from './Components/ShowGithubUser';

function App() {
  return (
    <div>
      <Link to="/home"><h1>Home</h1></Link>
      <Link to="/users/Marco"><h1>Username</h1></Link>
      <Link to="/counter"><h1>Counter</h1></Link>
      
      <Routes>
        <Route path="/home" />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/counter" element={<ClickCounter />} />
      </Routes>
    </div>
  );
}

export default App;