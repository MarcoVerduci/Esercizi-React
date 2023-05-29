import { Welcome } from "./Components/Welcome";

function App() {

  const name = 'Marco';
  return (
    <div>
      <Welcome name={name} />
    </div>
  );
}

export default App;
