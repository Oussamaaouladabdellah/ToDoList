import React, { useRef } from 'react'
import "./task.css"
export default function Task({txt,fundelete}) {



  const taskref=useRef();

    function donetask(){
        taskref.current.classList.add('done');
    }




  return (
    <>
      <div className='task' ref={taskref}>
      <input type="text"  value={txt}  readOnly   className='text-center'  />    <input type="button" value="delete"className='button-92'   onClick={fundelete}  />   
           <input type="button" value="done"   className='button-90'   onClick={donetask}  />
      </div>
    </>
  )
}
