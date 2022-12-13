const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://decodeblock:Juan1605@cluster0.anllxke.mongodb.net/tangle?retryWrites=true&w=majority');

const objectdb=mongoose.connection;

objectdb.on('connected',()=>{
    console.log('Conexión correcta a MongoDB');
})

objectdb.on('error',()=>{
    console.log('Error en la conexión a MongoDB');
})

module.exports=mongoose;