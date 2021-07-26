import React from 'react'
import Button from './ButtonUsers'

function Test(props, nani){
  return (
    <div className="users-activ">       
        {props.fac.map(todo=>{
          return (
            <Button  Name={todo} key={todo.id} Click={props.onClick} ></Button>
         )
        })}  
    </div>
  )
}
export default Test;