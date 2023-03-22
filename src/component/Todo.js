import React from 'react'

const Todo = ({list,editTask,DeleteTask}) => {
    const currentDate = ()=>{
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${month}/${year}`; 
    }
  return (
    <div key={list.id} className='grid grid-cols-9 text-white my-3 mx-2'>
        <div className='col-span-1'><input type='checkbox' className="self-start accent-emerald-400 w-5 h-5"></input></div>
        <div className='col-span-4 text-xl font-semibold'>{list.task}</div>  
        <div className='col-span-1'>{list.date === '//' ? ((list.time)? currentDate() : 'No due date'): list.date}</div> 
        <div className='col-span-1'>{list.time}</div>
        <div className='col-span-1'><button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 rounded'>Edit</button></div>
        <div className='col-span-1'><button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 rounded' onClick={()=>DeleteTask(list.id)}>Delete</button></div>
    </div>
  )
}

export default Todo
