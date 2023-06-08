import { Welcome } from './Components/Welcome';
import './App.css';

function App() {
  return (
    <div>
      <Welcome name={<strong>Marco</strong>} age={24} />
    </div>
  );
}

export default App;
