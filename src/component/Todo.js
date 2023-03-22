import React from 'react'

const Todo = ({displayList}) => {
  return (
    <div className='my-5'>
        <ul>{displayList}</ul>
    </div>
  )
}

export default Todo
