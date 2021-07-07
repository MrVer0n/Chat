import './App.css';
import React from "react";
import Test from "./test"
import Chat from "./Chat";
import NewPerson from "./NewPerson";

function App(props) {

  //Пока нет api
const [todos, setTodos] = React.useState([
  {id: 1, title: 'Игорь'},
  {id: 2, title: 'Вася'},
  {id: 3, title: 'Избранное'},
  {id: 4, title: 'Петя'},
  {id: 5, title: 'Петя'}
])

  //Пока нет api
const [NewPer, setNewPer] = React.useState([
  {id: 6, title: 'Хлебум'},
  {id: 7, title: 'Тигрий'},
  {id: 8, title: 'Артём'},
  {id: 9, title: 'Яросланва'},
  {id: 10, title: 'Ярослава'}
])
  //Пока нет api
const [a,setA] = React.useState([
  {id: 5, state:true, title: 'Имя'}
])

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

  let [isLoggedIn,setLoggerIn] = React.useState(0);
  if (isLoggedIn===0) {//запуск окна с активными чатами
    return <div><button onClick={()=>setLoggerIn(isLoggedIn=2)}>Добавить нового пользователя</button>{todos.length ? <Test  fac={todos} onClick={Clikers}></Test>
    :<p>У вас нет пользоватлей</p>}</div>
  }
  if(isLoggedIn===1){//запуск окна с чатом
    return <div><Chat onClick={a} OnPep={Pepap}></Chat></div>
  }
  if(isLoggedIn===2){//запуск окна с не активными чатами
    return (<NewPerson OnPep={Pepap} Persone={NewPer} AddPersone={AddPer}></NewPerson>)
  }
}

export default App;
