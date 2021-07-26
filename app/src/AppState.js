class AppState {
    socket = null
    sessionid = null
    username = null
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
setusername(username) {
    this.username = username
}
getSessionid() {
    return this.sessionid
}
getSocket() {
    return  this.socket
}
getusername() {
    return this.username
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