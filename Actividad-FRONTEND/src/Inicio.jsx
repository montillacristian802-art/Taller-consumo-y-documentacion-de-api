import { useState } from "react"

function Inicio() {

    const [mensaje, setMensaje] = useState("")
    async function consumoApi() {

        try {
            let respuesta = await fetch("http://127.0.0.1:2000/inicio")
            let datos = await respuesta.json()

            if (respuesta.ok) {
                setMensaje(datos.mensaje)
            }

        } catch (error) {
            setMensaje("No se pudo conectar con Express.")
        }
    }

    return (
        <div>
            <h2>Inicio</h2>
            <button onClick={consumoApi}> Llamar API </button>
            <p>{mensaje}</p>
        </div>
    )
}

export default Inicio