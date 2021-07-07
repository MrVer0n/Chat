import React from 'react'
function NewPerson(props){
    return(
        <div>
            <h1>Новые пользователи </h1>
            <div>{props.Persone.map(todo=>{
                return <p key={todo.id}><button key={todo.id} onClick={()=>props.AddPersone(todo)}>Добавить пользователя к чату: {todo.title}</button></p>
            })}</div>
            
            <button onClick={()=>props.OnPep(0)}>Вернуться к выбору пользователя</button>
            <button onClick={()=>props.OnPep(1)}>Вернуться в чат</button>
        </div>
    )
}
export default NewPerson;