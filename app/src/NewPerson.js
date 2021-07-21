import React from 'react'
function NewPerson(props){
    return(
        <div>
            <button className="waves-effect waves-light btn button-add-users" onClick={()=>props.OnPep(0)}>Вернуться к активным чатам</button>
                <div>{props.Persone.map(todo=>{
                     return <div className="collection users-activ" key={todo.id}>
                        <a className="collection-item users-mess" key={todo.id} onClick={()=>props.AddPersone(todo)}>{todo.title}</a>
                    </div>
            })}</div>

        </div>
    )
}
//Возвращает на имя??
//<button class="waves-effect waves-light btn button-add-users" onClick={()=>props.OnPep(1)}>Вернуться в чат</button>    
export default NewPerson;