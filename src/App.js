import React, { useState } from 'react'

const App = () => {
  const [data,setData] = useState({
    task:'',date:'',time:''
  })
  const [list , setList ] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault();
    setList({...list,data})
    console.log(list)
  }

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
        
      </div>
    </div>
  )
}

export default App
