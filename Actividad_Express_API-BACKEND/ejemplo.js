const express=require('express');
const cors=require("cors")
const app=express();
const PORT=2000
app.use(express.json());

app.use(cors({
    orgin: "http://localhost:5174" // url del fronten de la ejecucion
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

app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente " + PORT)
})