const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000


const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))


  
io.on('connection',() => {
    console.log('User connected')
})

server.listen(port, ()=>{
    console.log(`Server working on port ${port}...`)
})


// const port = 3000
// socketIO.on('connection', (client) => {
//     client.on('subscribeToTimer', (interval) => {
//       console.log('client is subscribing to timer with interval ', interval);
//       setInterval(() => {
//         client.emit('timer', new Date());
//       }, interval);
//     });
//   });
  
//   socketIO.listen(port);
//   console.log('listening on port ', port);


// const io = require("socket.io").listen(8888);

// io.sockets.on("connection", (socket) =>{
//     console.log("connection");

//     socket.on("message", (msg) =>{
//         console.log(msg);
//         socket.broadcast.emit("message", msg)
//     });
// });


//"test": "react-scripts test",