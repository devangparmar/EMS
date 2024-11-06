import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const[email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log('email is', email)
        console.log('password', password)
        setEmail('')
        setpassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center' >
                <input required
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-6 rounded-full placeholder:text-grey-200' type="email" placeholder='Enter Your Email' />
                <input
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }} 
                className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-6 rounded-full placeholder:text-grey-200 mt-3' type="password" placeholder='Enter Password' />
                <button  className='mt-7 text-white border-none outline-none   bg-emerald-600 text-xl py-2 px-8 w-full rounded-full placeholder:text-white mt-3'>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login