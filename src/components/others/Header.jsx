import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'




const Header = (props) => {
  // const [username, setusername] = useState('')
  // if(!data){
  //   setusername('admin')
  // }else{
  //   setusername(data.firstname)
  // }

  const logoutuser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
   // window.location.reload()
    
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋 </span></h1>
        <button onClick={logoutuser}  className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-smalling'>Log Out</button>
    </div>

  )
}

export default Header