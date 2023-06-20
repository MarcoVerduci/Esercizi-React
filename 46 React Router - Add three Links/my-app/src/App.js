import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Components/ClickCounter"
import ShowGithubUser from './Components/ShowGithubUser';

function App() {
  return (
    <Routes>
      <Route path="/home"></Route>
      <Route path="/users/:username" Component={ShowGithubUser}></Route>
      <Route path="/counter" Component={ClickCounter}></Route>
    </Routes>
  );
}

export default App;
