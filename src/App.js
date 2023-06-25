import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log("USE EFFECT UNA VEZ")
    //La primera vez que se carga el componente
    let usuario_local = JSON.parse(localStorage.getItem("usuario"));

    setUsuario(usuario_local);
  }, []);

  useEffect(() => {
    console.log("CAMBIO EN ESTADO USUARIO")
    //Cada vez que se actualiza el estado usuario se guarda en el LS
    localStorage.setItem("usuario", JSON.stringify(usuario));
  },[usuario]);
  
  // Pasando este objeto como valor de PruebaContext.provider
  const curso = {
    id: 1,
    titulo: "Master en TypeScript",
    contenido: "Muchas horas de contenido..."
  };

  return (
    <div className="App">
      <PruebaContext.Provider value={
        {
          usuario,
          setUsuario
        }
      }>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
