import React from 'react'
function NewPerson(props){
    return(
        <div>
            <button onClick={()=>props.OnPep(0)}>Вернуться к выбору пользователя</button>
            <button onClick={()=>props.OnPep(1)}>Вернуться в чат</button>    
            <div className="one" style={{height: '97vh', overflow: 'auto'}}>{props.Persone.map(todo=>{
                return <p key={todo.id}>
                    <button className="fx user" key={todo.id} onClick={()=>props.AddPersone(todo)}>{todo.title}</button>
                    </p>
            })}</div>

        </div>
    )
}
export default NewPerson;