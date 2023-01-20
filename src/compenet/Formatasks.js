import React, { useState } from 'react'
import "./tasks.css"
import "./Style.css"
import Task from './Task'
import {v4 as uuidv4} from 'uuid'
export default function Formatasks() {

    const [tasks,settasks]=useState([
        {id:uuidv4(),nom:'sport'},
        {id:uuidv4(),nom:'meeting friends'},
        {id:uuidv4(),nom:'Home Work'}
    ])
    


    


    const [task,settask]=useState('');



    function addtask(){
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=uuidv4();
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        settask("");
    };


    function deltask(id){
        let ntasks = tasks.filter((a)=>{
            return a.id !== id;
        })
        settasks(ntasks);
    };

    
    

  return (
    <div className='container'>
      
        



        <form>
            <h1 className='title'>Enter the task : </h1><br />
            <input type="text"  className='input_task'  value={task}  onChange={(a)=>{settask(a.target.value)}}  placeholder='Enter the task' />    
              <input type="button"  onClick={addtask}   className='button-29'  value="add" />


        </form>
        <br />
        <hr />
        <br />
        <br />
        <h1 className='title1'>List of tasks</h1>
        <br /><br />
        {
        tasks.map((t)=>{
            return <Task  key={t.id}  txt={t.nom}  fundelete={()=>deltask(t.id)}  />
        })
        }
    </div>
  )
}
