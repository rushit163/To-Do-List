import React from 'react'
import { useState } from 'react'
const EditTodo = ({editTask,list}) => {
    const [editedData,setEditedData] = useState(list);
const handleEdit = (e)=>{
    e.preventDefault();
    editTask(editedData);
}
  return (
    <div className='flex lg:flex-row md:flex-row flex-col justify-around align-center border-b-2 pb-2'>
          <div className='col-span-1'><label htmlFor='task' className='text-sm lg:text-lg text-white '>Task:</label></div>
          <div className='col-span-3'><input className='bg-slate-200 rounded py-2 px-2' onChange={(e)=>{setEditedData({...editedData,task : e.target.value})}} value={editedData.task} required></input></div>  
          <div className='col-span-1'><label htmlFor='Date' className='text-lg text-white'>Deadline:</label></div>
          <div className='col-span-5'><input type='date' id='date' name='date'  className='bg-slate-200 py-2 px-2' onChange={(e)=>{setEditedData({...editedData,date : e.target.value})}} value={editedData.date}></input>
         <input type='time' name = 'task' id='task'  className='bg-slate-200 py-2 px-2' onChange={(e)=>{setEditedData({...editedData,time : e.target.value})}} value={editedData.time}></input></div>
          <div className='col-span-1'><button type='Submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-2' onClick={handleEdit}>Edit</button></div>
    </div>
  )
}

export default EditTodo
