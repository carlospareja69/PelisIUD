const express = require('express')
const {mongoconn} = require('./databases/configuration')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: '*'
}))
const generos = require('./routes/genero')
const directores = require('./routes/director')
const productoras = require('./routes/productora')
const tipos = require('./routes/tipo')
const medias = require('./routes/media')

mongoconn()


app.use('/generos', generos)
app.use('/directores', directores)
app.use('/productoras', productoras)
app.use('/tipos', tipos)
app.use('/medias', medias)



module.exports = app