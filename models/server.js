const express = require('express')
const cors = require('cors')
const { socketController } = require('../sockets/controller')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    // socket.io
    this.server = require('http').createServer(this.app)
    this.io = require('socket.io')(this.server)
    // routes
    this.path = {

    }
    // middlewares
    this.middlewares()
    // rutas de la app
    this.routes()
    // eventos sockets
    this.sockets()
  }

  middlewares () {
    // cors
    this.app.use(cors())
    // directorio público
    this.app.use(express.static('public'))
  }

  routes () {
    // this.app.use(this.path.auth, require('../routes/auth'))
  }

  sockets () {
    this.io.on('connection', socketController)
  }

  listen () {
    this.server.listen(this.port, () => {
      console.log(`Escuchando en http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
