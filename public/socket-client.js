// referencias
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')
const client = io()

client.on('connect', () => {
  lblOffline.style.display = 'none'
  lblOnline.style.display = ''
})

client.on('disconnect', () => {
  lblOnline.style.display = 'none'
  lblOffline.style.display = ''
})

client.on('enviar-mensaje', (payload) => {
  console.log(payload)
})

btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value
  const payload = {
    mensaje,
    id: '123asdf',
    fecha: new Date().getTime()
  }

  client.emit('enviar-mensaje', payload, (id) => {
    console.log('desde el server', id)
  })
})
