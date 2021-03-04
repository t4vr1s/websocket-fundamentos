const socketController = (client) => {
  console.log('cliente conectado', client.id)
  client.on('disconnect', () => {
    console.log('cliente desconectado', client.id)
  })
  client.on('enviar-mensaje', (payload, callback) => {
    const id = 123456
    callback(id)
    client.broadcast.emit('enviar-mensaje', payload)
  })
}

module.exports = {
  socketController
}
