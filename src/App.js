import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [data,setData] = useState({
    task:'',date:'',time:'',id:0
  })
  const [lists , setLists ] = useState([])
  const submitHandler = () =>{
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
  }
  const displayList = lists.map(list =>
    <li key={list.id}>{list.task}{list.date}{list.time}</li>
  )
  return (
    <div  className='flex flex-col items-center flex-nowrap justify-center justify-items-start'>
      <div className='block my-5'>
        <ul>{displayList}</ul>
      </div>
      <div className='block'>
        <label htmlFor='task' className='text-xl'>Your Task:</label>
        <input type='text' name = 'task' id='task' onChange={(e)=>{setData({...data,task : e.target.value})}} className='bg-slate-200 rounded px-5 py-3 mx-3'></input>
        <label htmlFor='Date' className='text-xl'>Deadline:</label>
        <input type='date' id='date' name='date' onChange={(e)=>{setData({...data,date :e.target.value})}} className='bg-slate-200 rounded px-5 py-3 mx-3'></input>
        <input type='time' name = 'task' id='task' onChange={(e)=>{setData({...data,time : e.target.value})}}></input>
        <button type='Submit' onClick={submitHandler}>Submit</button>
      </div>
    </div>
  )
}

export default App
