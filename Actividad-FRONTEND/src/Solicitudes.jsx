import { useState } from "react"

function Solicitudes() {

    const [dato_nombre, setDatoNombre] = useState("")
    const [dato_apellido, setDatoApellido] = useState("")
    const [dato_correo, setDatoCorreo] = useState("")

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")

    const [mensaje, setMensaje] = useState("")

    async function solicitudesApi() {

        if (nombre == "" || apellido == "" || correo == "") {
            setMensaje("Complete todos los campos")
        } else if (!correo.includes("@") || !correo.includes(".")) {
            setMensaje("Ingrese un correo válido")
        } else {
            try {
                let resultado = await fetch("http://127.0.0.1:2000/solicitudes", {
                    method: "POST",
                    body: JSON.stringify({
                        nombre: nombre,
                        apellido: apellido,
                        correo: correo
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                let datos = await resultado.json()

                if (resultado.ok) {
                    setDatoNombre(datos.dato_nombre)
                    setDatoApellido(datos.dato_apellido)
                    setDatoCorreo(datos.dato_correo)
                    setMensaje(datos.mensaje)
                }

            } catch (error) {
                setMensaje("No se pudo conectar con Express")
            }
        }
    }

    return (
        <div>
            <input placeholder="Ingrese el nombre" onChange={(e) => setNombre(e.target.value)}/>
            <input placeholder="Ingrese el apellido" onChange={(e) => setApellido(e.target.value)}/>
            <input type="email" placeholder="Ingrese el correo" onChange={(e) => setCorreo(e.target.value)}/>
            <button onClick={solicitudesApi}>Aceptar</button>
            <p>{dato_nombre}</p>
            <p>{dato_apellido}</p>
            <p>{dato_correo}</p>
            <p>{mensaje}</p>
        </div>
    )
}

export default Solicitudes