import React from 'react'
import pen from '../Images/pen.png'
import remove from '../Images/remove.png';



const Todo = ({list,editTask,DeleteTask,editTodo}) => {
    const currentDate = ()=>{
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${month}/${year}`; 
    }

    
  return (
    <div key={list.id} className='grid grid-cols-9 lg:grid-cols-9 text-white my-3 mx-2 justify-items-start gap-1'>
        <input type='checkbox' className="self-start accent-emerald-400 w-5 h-5 mr-2"></input>
        <div className='col-span-2 lg:col-span-4 lg:text-xl md:text-xl text-md font-semibold'>{list.task}</div>  
        <div className='col-span-3 lg:col-span-1 '>{list.date === '//' ? ((list.time)? currentDate() : 'No due date'): list.date}</div> 
        <div className='col-span-1 pr-3'>{list.time}</div>
        <div className='col-span-1 pl-2'><button onClick={()=>editTodo(list.id)}><img src={pen} alt=' Logo' className='w-7 h-7 lg:w-9 lg:h-9'/></button></div>
        <div className='col-span-1 pl-2'><button  onClick={()=>DeleteTask(list.id)}><img src={remove} alt=' Logo' className='w-7 h-7 lg:w-9 lg:h-9'/></button></div>
    </div>
  )
}

export default Todo
