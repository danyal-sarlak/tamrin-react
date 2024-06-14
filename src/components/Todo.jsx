import React, { useState } from 'react';
import './Todo.css';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {

    const [todos, settodos] = useState([
        {
            id: uuidv4(),
            title: 'go to school',
            status: false
        },
        {
            id: uuidv4(),
            title: 'go to gym',
            status: false
        }
    ]);

    const newtodo = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            settodos([
                ...todos,
                { id: uuidv4(), title: event.target.value, status: false }
            ]);
            event.target.value = '';
        }
    }

   const delettodohandler=(todo)=>{
    let newtodos = todos.filter((todoitem)=>{
        return todo.id != todoitem.id
     })
       settodos(newtodos)
   }

   const todostatusehandler=(todo)=>{
    let newtodos = todos.map((todoitem)=>{
        if(todo.id === todoitem.id){
            todoitem.status =!todoitem.status
           
        }
        return todoitem
        
    })
    settodos(newtodos)
    
   }

   const editTodoTitleHandler = (todo , newTitleValue ) => {
    let newTodos = todos.map( (todoItem) =>  {
        if(todo.id === todoItem.id) {
            todoItem.title = newTitleValue
        }

        return todoItem;
    })

    settodos(newTodos);
}

    return (
        <div>
            <div className='todoapp'>
                <h1 className='title'>TO DO APP</h1>
                <input placeholder='What needs to be done today?' type="text" className='taskinput' onKeyDown={newtodo} />
                <Todolist todos={todos} delettodo={delettodohandler} chanchstatus={todostatusehandler} edittodotitle={editTodoTitleHandler}/>
            </div>
        </div>
    );
}
