const ws = require('ws');

const wss = new ws.Server({
    port: 5000,
}, () => console.log(`Server started on 5000`))


wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadcastMessage(message)
                break;
            case 'connection':
                broadcastMessage(message)
                break;
        }
    })
})

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}


// const express = require('express')
// const app = express()
// const WSServer = require('express-ws')(app)
// const aWss= WSServer.getWss()
// const PORT = process.env.PORT || 4000
// const Messages = [
//     {
//         id:"",
//         username: "Name",
//         message: "Messange",
//         method: "connection"
//     }
// ]
// i=0
// app.ws('/',(ws, req) =>{
//     console.log('Message:');
//     ws.send('Ты подключён')
//     ws.on('message', (msg) =>{
//         msg=JSON.parse(msg)
//         switch (msg.method) {
//             case "connection":
//                 connectionHend(ws, msg)
//                 break
//             case "write":
//                 broadcastConect(ws, msg)
//                 break
//         }
//     })
// })

// app.listen(PORT, () => {
//     console.log(`Server working on port ${PORT}`);
// })

// const connectionHend = (ws, msg) => {
//     ws.id = msg.id
//     console.log(ws.id, msg.id);
//     Messages.push(
//         {
//             id:msg.id,
//             username: msg.username,
//             message: msg.textmessage,
//             method: msg.method
//         }
//     )
//     i=i+1
//     console.log(i);
//     broadcastConect(ws, Messages[Messages.length-1])
//     console.log("IT IS",Messages[Messages.length-1]);
// }

// const broadcastConect = (ws, Messages) => {
//     aWss.clients.forEach(client => {
//         //console.log(msg.id,client.id)
//         if (client.id === Messages.id) {       
//             client.send(JSON.stringify(Messages))
//             //client.send(`Users id ${Messages.id} write`)
//         }
//     })
// }