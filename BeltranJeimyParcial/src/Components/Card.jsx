import React from 'react'
import Form from './Form'


const Card = ({nombre, apto}) => {
  return (
    <div>
         <h3>Señor(a) {nombre}</h3>
         <h3>Inscribió exitosamente el apartamento: {apto}</h3>
    </div>
  )
}

export default Card