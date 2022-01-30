## The Complete Node.js Developer Course (3rd Edition)

## Real-Time Web Applications with Socket.io (Chat App)**

### Creating the Chat App Project

chat-app

-  public/index.html
-  src/index.js

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
      Chat App
  </body>
</html>
```

```javascript
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
```



### WebSockets

[WebSockets](https://github.com/chesterheng/web-platform/blob/master/websockets.md)

- WebSockets allows for full-duplex communication
- WebSocket is a separate protocol from HTTP
- Persistent connection between client and server



### Getting Started with Socket.io

- [socket.io-client](https://github.com/socketio/socket.io-client)
- [CDN](https://cdn.jsdelivr.net/npm/socket.io-client@2/dist/socket.io.js)
- [socket.io](https://socket.io/)
- [socket.io Github](https://github.com/socketio/socket.io)

chat-app

-  public/index.html
-  public/js/chat.js
-  src/index.js

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    Chat App
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chat.js"></script>
  </body>
</html>
```

```javascript
// public/js/chat.js
io()
```

```javascript
// src/index.js
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
// one connection per client
io.on('connection', () => {
  console.log('New WebSocket connection')
})
server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
```


### Socket.io Events

Emit 
| Client  | Server  | Event        | Message                       |
| ------- | ------- | ------------ | ----------------------------- |
| emit    | receive | connection   | New WebSocket connection      |
| receive | emit    | countUpdated | The count has been updated! 0 |
| emit    | receive | increment    | count = 1                     |
| receive | emit    | countUpdated | The count has been updated! 1 |

| Client 1 | Client 2 | Server  | Event        | Message                       |
| -------- | -------- | ------- | ------------ | ----------------------------- |
| emit     |          | receive | connection   | New WebSocket connection      |
|          | emit     | receive | connection   | New WebSocket connection      |
| receive  | receive  | emit    | countUpdated | The count has been updated! 0 |
| emit     |          | receive | increment    | count = 1                     |
| receive  | receive  | emit    | countUpdated | The count has been updated! 1 |

```javascript
...
let count = 0
io.on('connection', socket => {
  console.log('New WebSocket connection')
  socket.emit('countUpdated', count)
  socket.on('increment', () => {
    count++
    io.emit('countUpdated', count)
  })
})
server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
```

```javascript
const socket = io()
socket.on('countUpdated', count => {
  console.log('The count has been updated!', count)
})
document.querySelector('#increment').addEventListener('click', () => {
  console.log('Clicked')
  socket.emit('increment')
})
```



### Broadcasting Events

```javascript
...
io.on('connection', socket => {
  console.log('New WebSocket connection')
  
  socket.emit('message', 'Welcome!')
  socket.broadcast.emit('message', 'A new user has joined!')
  
  socket.on('sendMessage', message => {
    io.emit('message', message)
  })
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left!')
  })
})
```


### Sharing Your Location

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chat App</title>
  </head>
  <body>
    <h1>Chat App</h1>
    <form id="message-form">
      <input name="message" placeholder="Message">
      <button>Send</button>
    </form>
    <button id="send-location">Send location</button>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chat.js"></script>
  </body>
</html>
```

```javascript
const socket = io()
document
  .querySelector('#send-location')
  .addEventListener('click', () => {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by your browser.')
    }
    navigator.geolocation.getCurrentPosition((position) => {
      socket.emit('sendLocation', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
})
```

```javascript
io.on('connection', socket => {
  console.log('New WebSocket connection')
  socket.on('sendLocation', (coords) => {
    io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
  })
})
```


### Event Acknowledgements

[bad-words](https://github.com/web-mech/badwords)

```javascript
const socket = io()
socket.on('message', message => console.log(message))
document
  .querySelector('#message-form')
  .addEventListener('submit', event => {
    event.preventDefault()
    const message = event.target.elements.message.value
    
    socket.emit('sendMessage', message, error => {
      if (error) {
        return console.log(error)
      }
      console.log('Message delivered!')
  })
})
document
  .querySelector('#send-location')
  .addEventListener('click', () => {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by your browser.')
    }
    navigator.geolocation.getCurrentPosition((position) => {
      socket.emit('sendLocation', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }, () => {
        console.log('Location shared!')
      })
    })
})
```

```javascript
io.on('connection', socket => {  
  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter()
    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed!')
    }
    io.emit('message', message)
    callback()
  })
  socket.on('sendLocation', (coords, callback) => {
    io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    callback()
  })
})
server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
```



### Form and Button States



