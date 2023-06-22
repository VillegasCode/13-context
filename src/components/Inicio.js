import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  
  const compartida = useContext(PruebaContext);

  // Ya se puede accesar al valor de PruebaContext.js a través de la const compartida
  
  return (
    <div>
      <h1>Inicio</h1>
      <p>Valor compartido: <strong>{compartida.titulo}</strong></p>
    </div>
  )
}
