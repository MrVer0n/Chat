import React from 'react'
//import PropTypes from 'prop-types'
import Button from './ButtonTest'
function Test(props, nani){
  return (
    <div >
      <h1 className='Wrapper'>    
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
      </h1>  
    </div>
  )
}

export default Test;