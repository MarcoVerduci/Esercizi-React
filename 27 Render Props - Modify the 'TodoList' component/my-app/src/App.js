import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div>
      <TodoList
        render={({ items, renderList }) => (
          <div>
            {renderList()}
          </div>
        )}
      />
    </div>
  );
}

export default App;
