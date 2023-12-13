// 1 Importar express
const express = require('express')
const petRouter = require('./api/v1/pets')
const cakeRouter = require('./api/v1/cakes')
const pokeRouter = require('./api/v1/pokemon')

// 2 Crear una instancia de express
const app = express()

// 3 Configurar la aplicación de Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 4 Definir las rutas de la aplicación
app.get('/', (req, res) => {
  res.send('Hola mundo')
})

// app.get('/hola', (req, res) => {
//   res.send('Hola Iván');
// });

// app.get('/adios', (req, res) => {
//   res.send('Adiós Iván');
// });

// 6 Importar las rutas de archivos con ayuda del router de express
app.use(petRouter)
app.use(cakeRouter)
app.use(pokeRouter)

// 5 Levantar el servidor
app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'))
