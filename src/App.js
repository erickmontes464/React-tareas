import './App.css';
import Logos from './componentes/Logo';
import ListaTareas from './componentes/ListaTareas';
function App() {
  return (
    <div className="App">
      <Logos />

      <div className='container-list'>
        <h1>Tareas Principal</h1>
        <ListaTareas />
      </div>
      
    </div>
  );
}

export default App;
