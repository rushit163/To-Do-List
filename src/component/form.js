import React from 'react'

const Form = () => {
  return (
    <div>
        <label htmlFor='task' className='text-xl'>Your Task:</label>
        <input type='text' name = 'task' id='task' onChange={(e)=>{setData({...data,task : e.target.value})}} value={data.task} className='bg-slate-200 rounded px-5 py-3 mx-3' required></input>
        <label htmlFor='Date' className='text-xl'>Deadline:</label>
        <input type='date' id='date' name='date' onChange={(e)=>{setData({...data,date :e.target.value})}} value={data.date} className='bg-slate-200 rounded px-5 py-3 mx-3'></input>
        <input type='time' name = 'task' id='task' onChange={(e)=>{setData({...data,time : e.target.value})}} value={data.time} className='bg-slate-200 rounded px-5 py-3 mx-3'></input>
        <button type='Submit' onClick={submitHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
    </div>
  )
}

export default Form

