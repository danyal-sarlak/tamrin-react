import React, { useState } from 'react'

export default function Todolistitem({todo,delet,chanchstatus,edittodotitle}) {

const [editmode , seteditmode] = useState(false)

const edithandler=(event)=>{
    if(event.key == 'Enter'){
        console.log(event.target.value);
        edittodotitle(todo , event.target.value)
        seteditmode(false)
       
    }
}


  return (
    <div>
         <li className='taskitem'>
                    
                        {
                            editmode
                            ?   <div className='editinput'>
                            <input type="text"  defaultValue={todo.title} onChange={()=> {}} onKeyDown={edithandler}/>
                            <button className='cancelbtn' onClick={()=>seteditmode(false)}>cancel</button>
                            </div>
                            :(<div className='todoitem'>
                             <div className='task'>
                            <input  type="checkbox" checked={todo.status? true:false} onChange={()=>chanchstatus(todo)}/>
                            <p>{todo.title}</p>
                            </div>
                            <div className='buttons'>
                            <button className='deletbtn' onClick={()=>delet(todo)}>DELET</button>
                            <button className='editbtn' onClick={()=>seteditmode(true)}>EDIT</button>
                            </div>
                            </div>
                            )

                        }
                    
                    </li>          
    </div>
  )
}
