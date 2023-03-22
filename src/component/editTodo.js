import React from 'react'
import { useState } from 'react'
const EditTodo = ({editTask,list}) => {
    const [editedData,setEditedData] = useState(list);
const handleEdit = (e)=>{
    e.preventDefault();
    editTask(editedData);
}
  return (
    <div className='grid grid-col-4 lg:grid-cols-9  mb-3 pb-2 justify-items-start '>
          <div className='col-span-1'><label htmlFor='task' className='text-sm lg:text-xl text-white'>Task:</label></div>
          <div className='col-span-1 lg:col-span-3'><input className='bg-slate-200 rounded px-2 lg:px-4 py-2' onChange={(e)=>{setEditedData({...editedData,task : e.target.value})}} value={editedData.task} required></input></div>  
          <div className='col-span-1'><label htmlFor='Date' className='text-xl text-white'>Deadline:</label></div>
          <div className='col-span-1 lg:col-span-3 '><input type='date' id='date' name='date'  className='bg-slate-200 px-3 py-2 ' onChange={(e)=>{setEditedData({...editedData,date : e.target.value})}} value={editedData.date}></input>
        <input type='time' name = 'task' id='task'  className='bg-slate-200 px-3 py-2 ' onChange={(e)=>{setEditedData({...editedData,time : e.target.value})}} value={editedData.time}></input></div>
          <div className='col-span-1'><button type='Submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleEdit}>Edit</button></div>
    </div>
  )
}

export default EditTodo
