import React from 'react'

function TestB({Name, Click}){ 
return (
    <div className="collection">    
        <a href="/#" className="collection-item users-mess"  onClick={()=> Click(Name)}> {Name.title}<br/> {Name.lastMeassage}</a>

    </div>   
)}

export default TestB;