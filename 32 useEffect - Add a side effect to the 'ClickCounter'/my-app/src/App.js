import { ClickCounter } from "./Components/ClickCounter";

function App() {
  const handleCounterChange = (value) => {
    return value;
  };

  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App;