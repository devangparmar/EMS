import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
//import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'





 const App = () => {
//localStorage.clear()

// useEffect(() => {
//  // setLocalStorage()
//  getLocalStorage()

// }, )

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData,setuserData] = useContext(AuthContext)

// useEffect(() => {
//   if(authData){
//     const loggedInUser=localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//   }
//   }
// }, [authData])

useEffect(() => {
    
      const loggedInUser=localStorage.getItem('loggedInUser')
      if(loggedInUser){
       const userData=JSON.parse(loggedInUser)
        setUser(userData.data)
        setLoggedInUserData(userData.data)
    }
    
  }, [])




const handleLogin = (email,password) => { 
  if(email =='admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
   
}else if(userData ){
  const employee=userData.find((employee)=>employee.email===email && employee.password===password)
  if(employee){
  setUser('employee')
  setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
  }
 
}else{
  alert('Invalid credentials')
}
}

const data=useContext(AuthContext)
console.log(data)


  return (
    <>
    {!user?<Login handleLogin={handleLogin} />:'' }
   {user==='admin'?<AdminDashboard changeUser={setUser} />:(user == 'employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />:null)}
    </>
  )
}
export default App
