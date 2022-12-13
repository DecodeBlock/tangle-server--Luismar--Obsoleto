const express= require('express');
const app=express();
const filebd=require('./conexion');

const rutaUsuario=require('./rutas/usuario')

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/users',rutaUsuario);

//rutas

app.get('/', (req, res) => {
    res.end('Bienvenidos')
  })


app.listen(5000, function(){
    console.log('El servidor está corriendo correctamente');
})