const socket = io();
socket.on('connect', ()=>{
  console.log('Connected to server');

  socket.emit('createMessage',{
    from:'steve',
    text:'works for me'
  })
});

socket.on('disconnect', () => {
  console.log('Disconnect from server');
});

socket.on('newEmail', function(email) {
  console.log('New email', email);
})

socket.on('newMessage', function(message){
  console.log('newMessage', message);
})
