import { CarDetails } from './Components/CarDetails';

function App() {
  const initialData = {
    model: 'Audi',
    year: '2004',
    color: 'Black'
  };

  return (
    <div>
      <CarDetails initialData={initialData} />
    </div>
  );
}

export default App;
