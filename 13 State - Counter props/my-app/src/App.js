import { Counter } from './Components/Counter';

function App() {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
    </div>
  );
}

export default App;
