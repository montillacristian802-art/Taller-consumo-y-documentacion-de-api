const express=require('express');
const cors=require("cors")
const app=express();
const PORT=2000
app.use(express.json());

app.use(cors({
    orgin: "http://localhost:5173"
}))


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});



app.get('/inicio', (req,res)=>{
    res.json({"mensaje":"Bienvenido"})
});



app.get('/informacion', (req,res)=>{
    res.json({
        "servicios":"API de informacion",
        "version":"1.0",
        "descripcion":"Proporciona datos generales del servicio"
    })
});




app.post('/solicitudes', (req,res)=>{
    const {nombre,apellido,correo}=req.body
    res.json({
        "dato_nombre": nombre,
        "dato_apellido": apellido,
        "dato_correo": correo
    })
})



// puerto
app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente " + PORT)
})









app.post('/solicitudes_validar', (req, res) => {
    const {nombre, apellido, correo} = req.body;

    if (nombre == "" || apellido == "" || correo == "") {
        res.status(400).json({
            mensaje: "Completa todos los campos"
        });
    }
    else if (!correo.includes("@") || !correo.includes(".")) {
        res.status(400).json({
            mensaje: "Correo no valido"
        });
    }
    else {
        res.json({
            "mensaje": "Solicitud recibida correctamente"
        });
    }
});



app.use((req, res) => {
    res.status(404).json({
        mensaje: "Ruta no encontrada"
    });
});



// Ejercicio 5 Middleware propio
 
// para consultar las solicitudes con la ruta get
app.get('/registro-personas', (req, res) => {
    res.json("Consulta de registros realizada correctamente");
});

// Comprueba que el registro se genere al enviar una petición POST.
app.post('/nuevo-registro', (req, res) => {
    res.json("Registro recibido correctamente");
});



