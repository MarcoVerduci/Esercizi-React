import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Components/ClickCounter"
import ShowGithubUser from './Components/ShowGithubUser';
import { NotFound } from "./Components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/users/:username" Component={ShowGithubUser} />
      <Route path="/counter" Component={ClickCounter} />
      <Route path="/404" Component={NotFound} />
    </Routes>
  );
}

export default App;
