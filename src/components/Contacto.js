import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Valor compartido: <pre>{JSON.stringify(datoDesdeElContexto)}</pre></p>
    </div>
  )
}
