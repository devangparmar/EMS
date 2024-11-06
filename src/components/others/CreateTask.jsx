import React from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData,setuserData] = useContext(AuthContext)

 const [tittle, settaskTittle] = useState('')
 const [description, settaskdescription] = useState('')
 const [date, settaskdate] = useState('')
  const [assignTo, settaskassign] = useState('')
 const [category, settaskcategory] = useState('')
 
 const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
      e.preventDefault()
      setNewTask({
        tittle,
       description,
        date,
       // assignTo,
        category,
        active:false,
        newTask:true,
        failed:false,
        completed:false
      })

     const data= userData
    // console.log(data)
     data.forEach(function(elem)  {
       if(assignTo == elem.firstname){
          elem.tasks.push(newTask)
          elem.taskCount.newTask=elem.taskCount.newTask+1
          
       }
     });

      setuserData(data)
      console.log(data)
 
      settaskTittle('')
      settaskdescription('')  
      settaskdate('')
      settaskassign('')
      settaskcategory('')

  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e=>{
      submitHandler(e)
    })}
     className='flex flex-wrap w-full items-start justify-between '>

      <div className='w-1/2'>
      <div>
      <div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Task Tittle</h3>
    <input value={tittle} 
    onChange={(e)=>{
      settaskTittle(e.target.value)
    }}
    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
    </div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
      <input value={date} 
    onChange={(e)=>{
      settaskdate(e.target.value)
    }}
       className='text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
      </div>
     <div>
     <h3 className='text-sm text-gray-300 mb-0.5'>Assign TO</h3>
      <input value={assignTo} 
    onChange={(e)=>{
      settaskassign(e.target.value)
    }}  
    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
      
     </div>
     <div>
     <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
     <input value={category} 
    onChange={(e)=>{
      settaskcategory(e.target.value)
    }}
      className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc..' />
     </div>
      </div>
   
    <div className='w-2/5 flex flex-col items-start'>
    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
    <textarea value={description} 
    onChange={(e)=>{
      settaskdescription(e.target.value)
    }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" cols="30" rows="10"></textarea>
    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
    </div>
      
    </form>
  </div>
  )
}

export default CreateTask