import React from 'react'
import Todolistitem from './Todolistitem'

export default function Todolist({todos,delettodo,chanchstatus,edittodotitle}) {
  return (
    <div>
        <ul> 
            {todos.map((todo , index)=>  <Todolistitem key={index} todo={todo} delet={delettodo} chanchstatus={chanchstatus} edittodotitle={edittodotitle}/>)}
         
        </ul>    
    
    </div>
  )
}
