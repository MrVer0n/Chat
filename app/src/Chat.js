import React from 'react'
//import PropTypes from 'prop-types'
//import Test from './test';
//import App from './App';
//import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
//import {Component} from 'react';
//import { from } from 'pumpify';

function Chat(props){
 let textInput= React.createRef();
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
  
return (   
  //true
<div className="">
  <div className="Wrapper5 center">
    {props.onClick.map(toso=>{
      return toso.id
    })} {props.onClick.map(toso=>{
      return toso.title
    })}
    <button className="BGWHITE" onClick={()=>props.OnPep(0)}  type="button"><svg aria-label="Новое сообщение" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg></button>
  </div>
  <div style={{height: 600, overflow: 'auto' }} className="one ">

<div  className="center">
  {props.MessageX.map((text)=>{
    if(text.id[0]===props.onClick.map(todo=>{return todo.id})[0]){
      return <p>{text.Name}:<br/>{text.message}</p>
    }else{
      console.log('Сообщение',text.id[0])
      console.log('Пользователь',props.onClick.map((todo)=>{return (todo.id)})[0])
    }
  })}
</div>

  </div>
    <div className="Wrapper2">
     <div className="">
       <div className="">
         <div className="">
  
           <textarea autoFocus className="Wrapper4" type="text" placeholder="Напишите сообщение..." rows="3" ref={textInput}></textarea>
            <input   onClick={()=>props.ReadMessange(textInput.current.value,props.onClick)} type="button" value="Отправить"></input>
         </div>
         <div className="">
         <form encType="multipart/form-data" method="POST" role="presentation">
           <input  accept="image/jpeg,image/png" className="tb_sK" type="file"></input>
          </form>
         </div>  
        </div>
     </div>
   </div>
   <div className="Wrapper3"></div>
  </div>
  )
}

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
export default Chat;