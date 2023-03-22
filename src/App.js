import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from './component/Todo';

const App = () => {
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
    <Todo key={list.id} list={list} editTask = {editTask} DeleteTask={DeleteTask}/>
  )
  return (
    <div  className='flex flex-col items-center justify-center justify-items-start bg-indigo-900 h-[100vh]'>
      <div className='flex flex-row justify-between items-center content-between'>
        <div className='text-white text-3xl font-bold'>To-Do List</div>
      </div>
      <div className='static min-w-[50vw] max-w-[60vw] min-h-[50vh] max-h-[60vh] overflow-y-scroll bg-slate-800 p-3 rounded m-3'>
        <div className='sticky grid grid-cols-9  border-b-2 mb-3 py-3'>
          <div className='col-span-1'></div>
          <div className='col-span-4 font-semibold text-xl font-bold text-white'>Tasks</div>  
          <div className='col-span-1 text-xl font-bold text-white'>Due Date&nbsp;/</div> 
          <div className='col-span-1 text-xl font-bold text-white'>&nbsp;Time</div>
          <div className='col-span-1 bg-blue-500 hover:bg-blue-700 text-white px-4 rounded font-semibold'><button>Remove All</button></div>
        </div>
        {displayList}
      </div>
      <div className='min-w-[50vw] max-w-[60vw]  bg-slate-800 p-3 rounded'>
        <label htmlFor='task' className='text-xl text-white'>Task:</label>
        <input type='text' name = 'task' id='task' onChange={(e)=>{setData({...data,task : e.target.value})}} value={data.task} className='bg-slate-200 rounded px-5 py-3 mx-3' required></input>
        <label htmlFor='Date' className='text-xl text-white'>Deadline:</label>
        <input type='date' id='date' name='date' onChange={(e)=>{setData({...data,date :e.target.value})}} value={data.date} className='bg-slate-200 px-5 py-3 ml-3'></input>
        <input type='time' name = 'task' id='task' onChange={(e)=>{setData({...data,time : e.target.value})}} value={data.time} className='bg-slate-200 px-5 py-3 mr-3'></input>
        <button type='Submit' onClick={submitHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
      </div>
    </div>
  )
}

export default App
