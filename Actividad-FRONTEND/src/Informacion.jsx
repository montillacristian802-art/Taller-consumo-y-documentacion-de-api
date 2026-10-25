import { useState } from "react"

function Informacion() {

    const [servicios, setServicios] = useState("")
    const [version, setVersion] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [mensaje, setMensaje] = useState("")

    async function informacionAPI() {

        try {
            let respuesta = await fetch("http://127.0.0.1:2000/informacion")
            let datos = await respuesta.json()

            if (respuesta.ok) {
                setServicios(datos.servicios)
                setVersion(datos.version)
                setDescripcion(datos.descripcion)
                setMensaje("Información recibida correctamente.")
            }

        } catch (error) {
            setMensaje("No se pudo conectar con Express.")
        }
    }
    return (
        <div>
            <h2>Información</h2>
            <button onClick={informacionAPI}> Mostrar información </button>
            <p>Servicios: {servicios}</p>
            <p>Versión: {version}</p>
            <p>Descripción: {descripcion}</p>
            <p>{mensaje}</p>
        </div>
    )
}
export default Informacion