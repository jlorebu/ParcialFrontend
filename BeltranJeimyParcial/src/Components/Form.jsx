import React from 'react'
import Card from './Card'

const Form = () => {
  const [usuario, setUser] = useState({
      nombre: '',
      apartamento: ''
  })

  const [show, setShow] = useState(false)
  const [error, setErr] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(usuario.nombre.length > 3){
          setShow(true)
          setErr(false)
      } else {
          setShow(false)
          setErr(true)
      }
  }

  return (
    <div>
      <h1>Lista de inscripción de apartamentos</h1>
        <form>
          <label>Nombre</label>
          <input type="text" value={usuario.nombre} onChange={(e) => setUser({...usuario, nombre: e.target.value})}/>
          <label>Apartamento</label>
          <input type="text" value={usuario.apto} onChange={(e) => setUser({...usuario, apto: e.target.value})}/>
          
          <button>Enviar</button>
        
        </form>

        {error ? 'Por favor chequea que la información sea correcta' : null}
        {show && <Card Nombre={usuario.nombre} Apartamento={usuario.apto}/>}
    </div>
  )
}

export default Form