import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [data,setData] = useState({
    task:'',date:'',time:''
  })
  const [lists , setLists ] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault();
    setLists((lists)=>{
      const updatedList = [...lists,data]
      setData({task:'',date:'',time:''})
      return updatedList
    })
  }
  const displayList = lists.map(list =>
    <li key={uuidv4()}>{list.task},{list.date},{list.time}</li>
  )
  return (
    <div>
      <form onSubmit={submitHandler} className='form'>
        <label htmlFor='task'>Your Task</label>
        <input type='text' name = 'task' id='task' onChange={(e)=>{setData({...data,task : e.target.value})}}></input>
        <label htmlFor='Date'>Deadline</label>
        <input type='date' id='date' name='date' onChange={(e)=>{setData({...data,date : e.target.value})}}></input>
        <input type='time' name = 'task' id='task' onChange={(e)=>{setData({...data,time : e.target.value})}}></input>
        <button type='Submit'>Submit</button>
      </form>
      <div id='Tasks'>
        <ul>{displayList}</ul>
      </div>
    </div>
  )
}

export default App
