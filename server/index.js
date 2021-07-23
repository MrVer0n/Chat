const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const aWss= WSServer.getWss()

const PORT = process.env.PORT || 4000

app.ws('/',(ws, req) =>{
    console.log('Have connected');
    ws.send('Ты подключён')
    ws.on('message', (msg) =>{
        msg=JSON.parse(msg)
        switch (msg.method) {
            case "connection":
                connectionHend(ws, msg)
                break
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`);
})

const connectionHend = (ws, msg) => {
    ws.id = msg.id
    broadcastConect(ws, msg)
}
const broadcastConect = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`Users ${msg.username} conected`)
        }
    })
}