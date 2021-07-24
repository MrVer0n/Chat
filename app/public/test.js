const socket = new WebSocket('ws://localhost:4000/')

socket.onopen = function(){
    socket.send(JSON.stringify({
        method: "connection",
        id: 1,
        textmessage: ""
    }))
}

socket.onmessage = (event) => {
   // console.log('Сообщение с сервера', event.data);
}

// btn.onclick = () => {
//     socket.send(JSON.stringify({
//         method: "message",
//         id: 1,
//         textmessage: ""
//     }))
// }