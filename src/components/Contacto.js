import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      Valor compartido: <pre>{JSON.stringify(datoDesdeElContexto.usuario)}</pre>
    </div>
  )
}
