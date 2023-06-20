import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Components/ClickCounter"
import ShowGithubUser from './Components/ShowGithubUser';

function App() {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/users/:username" Component={ShowGithubUser} />
      <Route path="/counter" Component={ClickCounter} />
    </Routes>
  );
}

export default App;
