import './App.css';
import React, { useState } from "react";
import Test from "./test"
import Chat from "./Chat";
import NewPerson from "./NewPerson";

function App(props) {
 
  //Пока нет api
const [todos, setTodos] = React.useState([
  {id: 0, title: 'Гуров Игорь Андреевич'},
  {id: 2, title: 'Смирнов Егор Егорович'},
  {id: 3, title: 'Беляев Глеб Тимурович'},
  {id: 4, title: 'Петя'},
  {id: 5, title: 'Мария'},
  {id: 6, title: 'Николай'},
  {id: 7, title: 'Татьяна'},
  {id: 8, title: 'Иван'},
])

  //Пока нет api
const [NewPer, setNewPer] = React.useState([
  {id: 9, title: 'Куликов Тимур Тимофеевич'},
  {id: 10, title: 'Дмитриева Мия Константиновна'},
  {id: 11, title: 'Николаев Михаил Валерьевич'},
  {id: 12, title: 'Яросланва'},
  {id: 13, title: 'Тигрий'},
  {id: 14, title: 'Хлебум'},
  {id: 15, title: 'Ольга'},
  {id: 16, title: 'Анастасия'},
  {id: 17, title: 'Владислав'},
  {id: 18, title: 'Артём'},
  {id: 19, title: 'Олег'},
  {id: 20, title: 'Дарья'},
])
  //Пока нет api
const [a,setA] = React.useState([
  {id: 5, state:true, title: 'Имя'}
])
// const [allmasseg,setAllmesseg] = React.useState([
//   {id: 1, state:true, title: ''}
// ])


function Clikers(id){
  setA( a.map(todo=> {
    //if(todo.id ===id){
      //console.log(todo.title)
      todo.id=id.id
      todo.title=id.title  
      setLoggerIn(isLoggedIn=1)
      //console.log(isLoggedIn)
    //}
    return todo
  }))
}
//добавление пользователя в активный чат
  function AddPer(Name){
    setTodos(todos.concat([{//id: Date.now(),
      id: Name.id,
      title: Name.title,  
    }]))
    setNewPer(NewPer.filter(Per=>Per.id!==Name.id))
  }
  function Pepap(pe){
    setLoggerIn(isLoggedIn=pe)
    
  }

  // const [ChatAll, setChatAll]=React.useState([{
  //   id: 0,
  //   message:'Тест',
  //   Name:'Тест'
  // }])
  
  const [ChatPersone, setChatPersone]=React.useState([
    {key: 1,  id: 0, message:'Тест', Name: 'Какий'}
  ])

function ShowMessange(Messange,id){
  setChatPersone(
    ChatPersone.concat([{
      id: id.map(todo=>{return todo.id}),
      Name:id.map(todo=>{return todo.title}),
      message:Messange
    }])
    )
    
  
}




  let [isLoggedIn,setLoggerIn] = React.useState(0);
  if (isLoggedIn===0) {//запуск окна с активными чатами
    return <div><button onClick={()=>setLoggerIn(isLoggedIn=2)}>Добавить нового пользователя</button>{todos.length ? <Test  fac={todos} onClick={Clikers}></Test>
    :<p>У вас нет пользоватлей</p>}</div>
  }
  if(isLoggedIn===1){//запуск окна с чатом
    return <div><Chat onClick={a} MessageX={ChatPersone} OnPep={Pepap} ReadMessange={ShowMessange}  ></Chat></div>
  }
  if(isLoggedIn===2){//запуск окна с не активными чатами
    return (<NewPerson OnPep={Pepap} Persone={NewPer} AddPersone={AddPer} ></NewPerson>)
  }
}

export default App;
