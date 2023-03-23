import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import EditTodo from './component/editTodo';
import Todo from './component/Todo';
import Delete from './Images/delete.png'
const App = () => {
  const [data,setData] = useState({
    task:'',date:'',time:'',id:0,completed:false,isEditing:false
  })
  const [lists , setLists ] = useState([])
  const newdate = (input)=>{
    var p = input.split(/\D/g)
  return [p[2],p[1],p[0] ].join("/")
  }
  const submitHandler = () =>{
    const task = data.task;
    if(task.trim() !== ""){
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
    const editTask = (list)=>{
        console.log(list)
        setLists(lists.map(task=>task.id ===list.id?task={...list,isEditing:!task.isEditing,date:newdate(list.date)}:task))
    }
    const editTodo = (id)=>{
        setLists(lists.map(list=>list.id === id?{...list,isEditing:!list.isEditing}:list))
    }
    const DeleteTask = (id)=>{
      setLists(lists.filter(list=>list.id !== id))
    }
    const removeAll = ()=>{
      setLists([])
    }
    const displayList = lists.map((list) =>(
      (list.isEditing)?<EditTodo key={list.id} editTask={editTask} list ={list}/>:
          <Todo key={list.id} list={list} editTask = {editTask} DeleteTask={DeleteTask} editTodo={editTodo}/>
    ))
  return (
    <div  className='flex flex-col items-center justify-center bg-indigo-900 h-[100vh]'>
      <div className='w-[100vw] lg:w-[70vw] flex flex-row justify-around items-center content-between'>
        <div className='text-white text-5xl font-bold'>To-Do List</div>
        <button onClick={removeAll} className='ml-7 pl-7'><img src={Delete} alt=' Logo' className='w-7 h-7 lg:w-9 lg:h-9'/></button>
      </div>
      <div className='w-[95vw] lg:w-[70vw] min-h-[50vh] max-h-[60vh] overflow-y-scroll bg-slate-800 p-3 rounded my-3'>
        {displayList}
      </div>
      <div className='flex flex-col lg:justify-center lg:items-center lg:flex-row min-w-[50vw] max-w-[100vw]  bg-slate-800 p-3 rounded '>
        <label htmlFor='task' className='text-xl text-white'>Task:</label>
        <input type='text' name = 'task' id='task' onChange={(e)=>{setData({...data,task : e.target.value})}} value={data.task} className='bg-slate-200 rounded px-5 py-3 lg:mx-3' required></input>
        <label htmlFor='Date' className='text-xl text-white'>Deadline:</label>
        <input type='date' id='date' name='date' onChange={(e)=>{setData({...data,date :e.target.value})}} value={data.date} className='bg-slate-200 px-5 py-3 mb-2 lg:mb-0 lg:ml-3'></input>
        <input type='time' name = 'task' id='task' onChange={(e)=>{setData({...data,time : e.target.value})}} value={data.time} className='bg-slate-200 px-5 py-3 lg:mr-3'></input>
        <button type='Submit' onClick={submitHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 lg:mt-0 mt-2  rounded'>Submit</button>
      </div>
    </div>
  )
}

export default App
