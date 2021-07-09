import React from 'react'

function TestB({Name, Click}){ 
return (
    <div>    
        <p><button  className="fx user"  onClick={()=> Click(Name)}> {Name.title}</button></p>
    </div>   
)}

export default TestB;