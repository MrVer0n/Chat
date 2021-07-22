import React from 'react'
import Button from './ButtonUsers'
function Test(props, nani){
  return (
    <div className="users-activ">       
        {props.fac.map(todo=>{
          return (
         // <p>
         //   <button className='fx' key={todo.id}>
         //     Пользователь {todo.title}
         //   </button>
         // </p>
            <Button  Name={todo} key={todo.id} Click={props.onClick} ></Button>
         )
        })}  
    </div>
  )
}
export default Test;