import React from 'react'
//import PropTypes from 'prop-types'
import Button from './ButtonTest'
function Test(props, nani){
  return (
    <div className="one" style={{height: '97vh', overflow: 'auto' }}>       
        {props.fac.map(todo=>{
          return (
         // <p>
         //   <button className='fx' key={todo.id}>
         //     Пользователь {todo.title}
         //   </button>
         // </p>
            <Button Name={todo} key={todo.id} Click={props.onClick} ></Button>
         )
        })}  
    </div>
  )
}
export default Test;