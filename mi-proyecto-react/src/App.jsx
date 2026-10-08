import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const URL = 'http://localhost:3002/personas'

  const [tipoDocumento, setTipoDocumento] = useState('')
  const [numeroDocumento, setNumeroDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [correo, setCorreo] = useState('')
  const [celular, setCelular] = useState('')

  const [personas, setPersonas] = useState([])
  const [modoActualizar, setModoActualizar] = useState(false)
  const [idActualizar, setIdActualizar] = useState(null)

  // Cargar las personas
  useEffect(() => {
    cargarPersonas()
  }, [])

  async function cargarPersonas() {
    try {
      const respuesta = await fetch(URL)
      const datos = await respuesta.json()
      setPersonas(datos)
    } catch (error) {
      console.error('Error al obtener las personas:', error)
    }
  }

  // Guardar una persona
  async function guardarPersona(e) {
    e.preventDefault()

    const persona = {
      tipoDocumento,
      numeroDocumento,
      nombre,
      apellido,
      direccion,
      ciudad,
      fechaNacimiento,
      correo,
      celular
    }

    try {
      const respuesta = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
      })

      if (!respuesta.ok) {
        throw new Error('Error al guardar la persona')
      }

      await cargarPersonas()
      limpiarFormulario()

      alert('Persona guardada correctamente')
    } catch (error) {
      console.error(error)
      alert('No se pudo guardar la persona')
    }
  }

  // Cargar los datos de una persona en el formulario
  function cargarPersona(persona) {
    setTipoDocumento(persona.tipoDocumento)
    setNumeroDocumento(persona.numeroDocumento)
    setNombre(persona.nombre)
    setApellido(persona.apellido)
    setDireccion(persona.direccion)
    setCiudad(persona.ciudad)
    setFechaNacimiento(persona.fechaNacimiento)
    setCorreo(persona.correo)
    setCelular(persona.celular)

    setIdActualizar(persona.id)
    setModoActualizar(true)
  }

  // Actualizar una persona
  async function actualizarPersona(e) {
    e.preventDefault()

    const persona = {
      tipoDocumento,
      numeroDocumento,
      nombre,
      apellido,
      direccion,
      ciudad,
      fechaNacimiento,
      correo,
      celular
    }

    try {
      const respuesta = await fetch(`${URL}/${idActualizar}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
      })

      if (!respuesta.ok) {
        throw new Error('Error al actualizar la persona')
      }

      await cargarPersonas()
      limpiarFormulario()

      alert('Persona actualizada correctamente')
    } catch (error) {
      console.error(error)
      alert('No se pudo actualizar la persona')
    }
  }

  // Eliminar una persona
  async function eliminarPersona(id) {
    const confirmar = window.confirm(
      '¿Realmente desea eliminar esta persona?'
    )

    if (!confirmar) {
      return
    }

    try {
      const respuesta = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
      })

      if (!respuesta.ok) {
        throw new Error('Error al eliminar la persona')
      }

      await cargarPersonas()

      alert('Persona eliminada correctamente')
    } catch (error) {
      console.error(error)
      alert('No se pudo eliminar la persona')
    }
  }

  // Limpiar el formulario
  function limpiarFormulario() {
    setTipoDocumento('')
    setNumeroDocumento('')
    setNombre('')
    setApellido('')
    setDireccion('')
    setCiudad('')
    setFechaNacimiento('')
    setCorreo('')
    setCelular('')

    setModoActualizar(false)
    setIdActualizar(null)
  }

  return (
    <div>
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62FCO5p0jXwGw4MDWsTFVV6O3ARioSsK_9pUpA9ZZTPCCD3BpR0waXW6X&s=10%22"
          alt="Logo de la institución"
        />

        <h1>Formulario de registro</h1>

        <h2>
          Tecnología de Antioquia - Institución Universitaria
        </h2>
      </header>

      <form
        onSubmit={
          modoActualizar
            ? actualizarPersona
            : guardarPersona
        }
      >
        <label>Tipo de documento</label>

        <select
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="CE">Cédula de extranjería</option>
        </select>

        <label>Número de documento</label>

        <input
          type="text"
          value={numeroDocumento}
          onChange={(e) => setNumeroDocumento(e.target.value)}
        />

        <label>Nombre</label>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Apellido</label>

        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <label>Dirección</label>

        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <label>Ciudad</label>

        <select
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="Cucuta">Cúcuta</option>
          <option value="Bogota">Bogotá</option>
          <option value="Medellin">Medellín</option>
          <option value="Barranquilla">Barranquilla</option>
        </select>

        <label>Fecha de nacimiento</label>

        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />

        <label>Correo</label>

        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Celular</label>

        <input
          type="tel"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />

        <div className="botones">
          <button
            type="submit"
            className="btnGuardar"
          >
            {modoActualizar ? 'Actualizar' : 'Guardar'}
          </button>

          <button
            type="button"
            className="btnLimpiar"
            onClick={limpiarFormulario}
          >
            Limpiar
          </button>
        </div>

        <div className="tabla-contenedor">
          <table>
            <thead>
              <tr>
                <th>Tipo de documento</th>
                <th>Número de documento</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Dirección</th>
                <th>Ciudad</th>
                <th>Fecha de nacimiento</th>
                <th>Correo</th>
                <th>Celular</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {personas.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.tipoDocumento}</td>
                  <td>{persona.numeroDocumento}</td>
                  <td>{persona.nombre}</td>
                  <td>{persona.apellido}</td>
                  <td>{persona.direccion}</td>
                  <td>{persona.ciudad}</td>
                  <td>{persona.fechaNacimiento}</td>
                  <td>{persona.correo}</td>
                  <td>{persona.celular}</td>

                  <td>
                    <button
                      type="button"
                      className="btnActualizar"
                      onClick={() => cargarPersona(persona)}
                    >
                      Actualizar
                    </button>

                    <button
                      type="button"
                      className="btnEliminar"
                      onClick={() => eliminarPersona(persona.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="total">
          Total personas: {personas.length}
        </h2>
      </form>
    </div>
  )
}

export default App
