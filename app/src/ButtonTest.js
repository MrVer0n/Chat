import React from 'react'

function TestB({Name, Click}){ 
return (
    <div>    
        <p><button className='fx'  onClick={()=> Click(Name)} >Пользователь {Name.title}</button></p>
    </div>   
)}

export default TestB;