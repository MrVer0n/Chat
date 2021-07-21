import React from 'react'

function TestB({Name, Click}){ 
return (
    <div>    
        <p><button  className="fx user"  onClick={()=> Click(Name)}> {Name.title}</button></p>
        <h1 className="Wrapper6">{Name.lastMeassage}</h1>
    </div>   
)}

export default TestB;