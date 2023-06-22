import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  // Pasando este objeto como valor de PruebaContext.provider
  const curso = {
    id: 1,
    titulo: "Master en TypeScript",
    contenido: "Muchas horas de contenido..."
  };

  return (
    <div className="App">
      <PruebaContext.Provider value={curso}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
