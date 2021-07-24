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
            case "write":
                broadcastConect(ws, msg)
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
    console.log(ws.id, msg.id);
}
const broadcastConect = (ws, msg) => {
    aWss.clients.forEach(client => {
        //console.log(msg.id,client.id)
        if (client.id === msg.id) {
            client.send(JSON.stringify(msg))
            //client.send(`Users id ${msg.id} write`)
        }
    })
}