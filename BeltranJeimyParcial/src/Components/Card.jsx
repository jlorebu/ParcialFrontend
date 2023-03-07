import React from 'react'


const Card = ({nombre, apto}) => {

  return (
    <div>
         <h3>Señor(a) {nombre} </h3>
         <h4>Inscribió exitosamente el apartamento: {apto} </h4>
    </div>
  )
}

export default Card