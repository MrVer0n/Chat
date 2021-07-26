import React, { useRef, useEffect, useState } from 'react'
import AppState from "./AppState"

function Chat(props){
let k=0;
let textInput= React.createRef();
const messagesEnd = useRef(null);

// const scrollToBottom = () => {
//   if (!messagesEnd) {
//     return;
//   }
//   messagesEnd.current.scrollIntoView({behavior: 'smooth'});
// };

// useEffect(() => {
//   scrollToBottom();
// });
const [drag, setDrag]=useState(false)
function dragStart(e){
  e.preventDefault()
  setDrag(true)
}
function dragLeave(e){
  e.preventDefault()
  setDrag(false)
}
function dragDrop(e){
  e.preventDefault()
  let files = [...e.dataTransfer.files]
  console.log(files)
  setDrag(false)
}

function Show(event){
  textInput.current.value=''
}

const [messages, setMessages] = useState([]);
const [value, setValue] = useState('');
const socket = useRef()
const [connected, setConnected] = useState(false);
const [username, setUsername] = useState('')

function connect() {
    socket.current = new WebSocket('ws://localhost:5000')

    socket.current.onopen = () => {
        setConnected(true)
        const message = {
            event: 'connection',
            username,
            id: Date.now()
        }
        socket.current.send(JSON.stringify(message))
    }
    socket.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        setMessages(prev => [message, ...prev])
    }
    socket.current.onclose= () => {
        console.log('Socket закрыт')
    }
    socket.current.onerror = () => {
        console.log('Socket произошла ошибка')
    }
}

const sendMessage = async () => {
    const message = {
        username,
        message: value,
        id: Date.now(),
        event: 'message'
    }
    socket.current.send(JSON.stringify(message));
    setValue('')
}


if (!connected) {
    return (
        <div className="center">
            <div className="form">
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder="Введите ваше имя"/>
                <button onClick={connect}>Войти</button>
            </div>
        </div>
    )
}


return (  
  <div className="all"> 
  <div className="chat">
    <div className="chat-users collection">
    <button className="waves-effect waves-light btn button-add-users-chat" onClick={()=>{props.OnPep(0)}}  type="button">Добавить пользователя</button>
    
      <a href="/#" className="collection-item">
        {props.onClick.map((toso)=>{
          return ""//toso.id
       })} {props.onClick.map(toso=>{
          return toso.title
       })}
      </a>
    </div>
    <div className="chat-messages"> 
      <div className="message">
        <div className="message-content z-depth-1">
        {messages.map(mess =>
                    <div key={mess.id}>
                        {mess.event === 'connection'
                            ? <div className="connection_message">
                                Пользователь {mess.username} подключился
                            </div>
                            : <div className="message">
                                {mess.username}. {mess.message}
                            </div>
                        }
                    </div>
                )}
        </div>
        <div ref={messagesEnd}></div>
      </div>
    </div>    
  </div>
   <div className="actions">
   <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea ref={textInput} value={value} onChange={e => setValue(e.target.value)} id="textarea1" className="materialize-textarea"></textarea>
      {drag 
      ?<div  
          onDragStart={e=> dragStart(e)}
          onDragLeave={e=>dragLeave(e)}
          onDragOver={e=>dragStart(e)}
          onDrop={e=>dragDrop(e)}
        >Отпустите файл</div>
        :<div 
          onDragStart={e=> dragStart(e)}
          onDragLeave={e=>dragLeave(e)}
          onDragOver={e=>dragStart(e)}
        >Перетащите файл для отправки</div>
      }
            <label id="textarea1">Введите сообщение:</label>
      </div>
        </div>
      </form>
      <input className="btn waves-effect waves-light" type="submit" name="action" onClick={()=>{props.ReadMessange(textInput.current.value,props.onClick);Show();sendMessage()}} value="Отправить"></input>
    </div>
  </div>
  </div>
  )
}
//<button className="get-users" onClick={()=>props.OnPep(0)}  type="button"><svg aria-label="Новое сообщение" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg></button>

// СВАЛКА!!!

// const [mes, setMes] = useState([])
// function Show(event){
//  // if (event.keyCode === 13) {
//    mes.push(textInput.current.value)
//    console.log(mes);
//    textInput.current.value=''
//    const socket = new WebSocket('ws://localhost:4000/')
//   props.onClick.map((toso)=>{
//   socket.onopen = () => {
//    // console.log("Подключено",toso.id,toso.title);
//    socket.send(JSON.stringify({
//      id: toso.id,
//      username: mes,
//      method: "connection"
//     }))
//   }
// return null
// })
// socket.onmessage = (event) => {
//   let msg = JSON.parse(event.data)
//         writeMessage(msg)
   
// }
  // props.MessageX.map((text)=>{
 ////   if(text.id[0]===props.onClick.map((todo)=>{return todo.id})[0]){
//text.message = msg.username
   // }
//console.log(); 
  //return null
  //})
//}
//}

// function writeMessage(msg) {
//  msg.username.map( (ms) => {
//     console.log(ms); 
//   })
    
//   //return null
//   //})
// }


// function print(event) {
//   const socket = new WebSocket('ws://localhost:4000/')
//   socket.onopen = () => {
//     //console.log('Connect');
//     props.MessageX.map((text)=>{
//       if(text.id[0]===props.onClick.map((todo)=>{return todo.id})[0]){
//         props.onClick.map((toso)=>{
//     socket.send(JSON.stringify({
//       id:toso.id,
//       textmessage: text.message,
//       method: "connection"
//     }))})
//   }
//   })
//   socket.onmessage = (event) => {
//     let msg =JSON.parse(event.data)
//     console.log(msg);
//        // console.log(`User id ${msg.id} connected`);
//         //console.log(msg.textmessage);
       
       
//       } 
    
//   }
// }
// React.useEffect(() =>{
//   const socket = new WebSocket('ws://localhost:4000/')
//   props.onClick.map((toso)=>{
//     console.log(toso.id);
//  })
//  props.MessageX.map((text)=>{
  
//    console.log(text.message);  
 
//  })
// })






//<form encType="multipart/form-data" method="POST" role="presentation">
//<input  accept="image/jpeg,image/png" className="tb_sK" type="file"></input>
//</form>

// const Message =({text, nam})=>
// <div><b>{nam}:</b><br/>{text}</div>
// const Messages = ({messages=[]})=>
// {
//   if (messages.length <1 ){
//     return 'Нет сообщений'
//   }
//   return messages.map((message, i) => <Message {...message} key={i}/>);
// }

/* <div  className="center">
<table>
  {mes.map((text)=>{
    return <tr>{props.onClick.map(toso=>{
     return  toso.title
    })}:
    <td>{text.mes}</td>
    </tr>
  })}
</table>
</div> */
 //let textOut= React.createRef();
 /*const [mes, setMes] = React.useState([
  {
    mes: 'Уже здесь!'
  }
  ])
 function Show(event){
  setMes(
  mes.concat([{mes: textInput.current.value}]))
  textInput.current.value=''
}*/
//<p ref={mes}></p>
export default Chat;