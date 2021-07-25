import './App.css';
import React from "react";
import Test from "./Users"
import Chat from "./Chat";
import NewPerson from "./NewPerson";
import logo from './logo.png'


function App(props) {
 
  //Пока нет api
const [todos, setTodos] = React.useState([
  {id: 0, title: 'Гуров Игорь Андреевич', lastMeassage:''},
  {id: 2, title: 'Смирнов Егор Егорович', lastMeassage:''},
  {id: 3, title: 'Беляев Глеб Тимурович', lastMeassage:''},
  {id: 4, title: 'Петя', lastMeassage:''},
  {id: 5, title: 'Мария', lastMeassage:''},
  {id: 6, title: 'Николай', lastMeassage:''},
  {id: 7, title: 'Татьяна', lastMeassage:''},
  {id: 8, title: 'Иван', lastMeassage:''},
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
const [autorizeyt]=React.useState('This Login Name')

//const [autorizeyt,setAutorizeyt]=React.useState('Артём Ктотович')

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
    
  ])

function ShowMessange(Messange,id){
//  console.log(Messange);
  const socket = new WebSocket('ws://localhost:4000/')
  socket.onopen = () => {
   // console.log('Write');
    socket.send(JSON.stringify({
      id:id[0].id,
     textmessage: Messange,
      method: "connection"
    }))
  }

  socket.onmessage = (event) => {
     let msg =JSON.parse(event.data)
    console.log(msg.textmessage);
    //console.log(`User id ${msg.id} connected`);  
  
 setChatPersone(
   ChatPersone.concat([{
      id: id.map(todo=>{return todo.id}),
      Name:id.map(todo=>{return todo.title}),
      message:msg.textmessage
   }])
  )
  }
 setTodos(todos.map(todo=>{
   //console.log(id.map(todo=>{return todo.id})[0],'Айди пользователя:',todo.id)
    if(id.map(todo=>{return todo.id})[0]===todo.id){
      todo.lastMeassage=Messange
    }
   return todo
 }))


 // console.log(ChatPersone);
  //<Chat onClick={a} MessageX={ChatPersone} OnPep={Pepap} ReadMessange={ShowMessange} Me={autorizeyt} ></Chat>
 // <App isLoggedIn={1}/>
}

  let [isLoggedIn,setLoggerIn] = React.useState(0);
  if (isLoggedIn===0) {//запуск окна с активными чатами
    return <div> 
      <nav>
       <div className="nav-wrapper">
       <img  src={logo} style={{height: 60, white :60 }} alt="fireSpot"/>
       <a href="/#" className="brand-logo">Существующие чаты</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=2)}>Новый чат</a></li>
            <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=0)}>Существующие чаты</a></li>
            <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=1)}>Активный чат</a></li>
        </ul>
      </div>
  </nav>
  {todos.length ? <div className="mas-users"><Test  fac={todos} onClick={Clikers}></Test></div>
    :<p>У вас нет пользоватлей</p>}</div>
  }
  if(isLoggedIn===1){//запуск окна с чатом
    return <div>
           <nav>
       <div className="nav-wrapper">
       <img  src={logo} style={{height: 60, white :60 }} alt="fireSpot"/>
       <a href="/#" className="brand-logo">Активный чат</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=2)}>Новый чат</a></li>
            <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=0)}>Существующие чаты</a></li>
            <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=1)}>Активный чат</a></li>
        </ul>
      </div>
  </nav>
      <Chat onClick={a} MessageX={ChatPersone} OnPep={Pepap} ReadMessange={ShowMessange} Me={autorizeyt} ></Chat></div>
  }
  if(isLoggedIn===2){//запуск окна с не активными чатами
    return  <div>     <nav>
    <div className="nav-wrapper">
    <img  src={logo} style={{height: 60, white :60 }} alt="fireSpot"/>
      <a href="/#" className="brand-logo">Начать чат</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=2)}>Новый чат</a></li>
         <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=0)}>Существующие чаты</a></li>
         <li><a href="/#" onClick={()=>setLoggerIn(isLoggedIn=1)}>Активный чат</a></li>
     </ul>
   </div>
</nav> <div className="mas-users"><NewPerson OnPep={Pepap} Persone={NewPer} AddPersone={AddPer} ></NewPerson></div>
</div>
  }
}

export default App;
