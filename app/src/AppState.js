class AppState {
    socket = null
    sessionid = null
    // ChatPersone = [
    //     {
    //         id:"",
    //         username: "Name",
    //         message: "Messange",
    //         method: "connection"
    //     }
    // ]
setSessionid(id) {
    this.sessionid = id
}
setSocket(socket) {
    this.socket = socket
}
getSessionid() {
    return this.sessionid
}
getSocket() {
    return  this.socket
}

// setChatPersone(id, username, textmessage, method){
//     this.ChatPersone.push(
//         {
//             id:id,
//             username: username,
//             message: textmessage,
//             method: method
//         }
//     )
// }
}
export default new AppState()