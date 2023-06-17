import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Components/ClickCounter"

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<ClickCounter />} />
    </Routes>
  );
}

export default App;
