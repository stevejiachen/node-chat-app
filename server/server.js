const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3001;


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'John',
    text: 'See you then',
    createAt:123123
  })

  socket.on('createEmail',(newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message)
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
})


server.listen(PORT,()=>{
  console.log(`server on ${PORT}`)
})
