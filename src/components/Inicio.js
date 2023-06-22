import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  
  // const compartida = useContext(PruebaContext);

  // Ya se puede accesar al valor de PruebaContext.js a través de la const compartida
  
  const {usuario, setUsuario} = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Nombre: {usuario.nombre}</p>
      <p>Web: {usuario.web}</p>
      {/* <p>Valor compartido: <strong>{compartida.titulo}</strong></p> */}
    </div>
  )
}
