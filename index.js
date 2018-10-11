const express = require('express')
const cors = require('cors')
const app = express()
const WebSocket = require('ws')

import {randomUser} from './randomUser'

app.use(cors())

const wss = new WebSocket.Server({
  port: 8081
})

let clients = []
let animals = []


wss.on('connection', function connection(ws) {
  clients.push[ws]

  ws.on('message', function incoming(message) {

    let msg = JSON.parse(message)
    switch (msg.type) {
      case 'generateAnimal':
        let newAnimal = randomUser()
        animals.unshift(newAnimal)
        ws.send(JSON.stringify({
          type: 'single',
          data: newAnimal
        }))
        break;
      case 'getAllAnimals':
        ws.send(JSON.stringify({
          type: 'all',
          data: animals
        }))
    }
    console.log('received: %s', message);
  });

});



// run the server on port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listen on port ${port}`))
