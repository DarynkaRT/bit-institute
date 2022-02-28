// console.log('Texto de prueba para nodemon');

const express = require('express');
const conectar_DB = require('./config/db');
const cors = require('cors');

const bodyParser = require('body-parser')


const app = express();
conectar_DB();
app.use(cors());

app.use(express.json());

app.use(bodyParser.json())
app.use('/api', require('./routes/api'));

app.listen(3000, () => {
    console.log("el servidor se esta ejecutando en el puerto 3000");
})
