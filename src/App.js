import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from './component/Todo';
const App = () => {
  const currentDate = ()=>{
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return `${day}/${month}/${year}`; 
  }
  const [data,setData] = useState({
    task:'',date:'',time:'',id:0
  })
  const [lists , setLists ] = useState([])
  const submitHandler = () =>{
    const task = data.task;
    if(task.trim() !== ""){
    const newdate = (input)=>{
      var p = input.split(/\D/g)
    return [p[2],p[1],p[0] ].join("/")
    }
    setLists((lists)=>{
      const updateData = {...data,id:uuidv4(),date:newdate(data.date)}
      const updatedList = [...lists,updateData]
      return updatedList
    })
    setData({task:'',date:'',time:'',id:0})
    console.log(lists)
    }else{
      alert("Please enter valid task")
    }}
    const editTask = ()=>{

    }
    const DeleteTask = ()=>{

    }
    const displayList = lists.map(list =>
    <li key={list.id} className='my-3'>
      {list.task}  {list.date === '//' ? ((list.time)? currentDate() : 'No due date'): list.date}  {list.time}
      <button onClick={editTask}>Edit</button>
      <button onClick={DeleteTask}>Delete</button>
    </li>
  )
  return (
    <div  className='flex flex-col items-center flex-nowrap justify-center justify-items-start'>
      <Todo displayList={displayList}/>
      <div className='block min-h-[50vh]'>
        <label htmlFor='task' className='text-xl'>Your Task:</label>
        <input type='text' name = 'task' id='task' onChange={(e)=>{setData({...data,task : e.target.value})}} value={data.task} className='bg-slate-200 rounded px-5 py-3 mx-3' required></input>
        <label htmlFor='Date' className='text-xl'>Deadline:</label>
        <input type='date' id='date' name='date' onChange={(e)=>{setData({...data,date :e.target.value})}} value={data.date} className='bg-slate-200 rounded px-5 py-3 mx-3'></input>
        <input type='time' name = 'task' id='task' onChange={(e)=>{setData({...data,time : e.target.value})}} value={data.time} className='bg-slate-200 rounded px-5 py-3 mx-3'></input>
        <button type='Submit' onClick={submitHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
      </div>
    </div>
  )
}

export default App
