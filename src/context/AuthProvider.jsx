import React from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
export const AuthContext = React.createContext()
import { useState } from 'react'
import { useEffect } from 'react'

const AuthProvider = ({children}) => {
 

  const [userData, setuserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    
    const{employees}=getLocalStorage()
    setuserData(employees)

    
  }, [])
  

  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}> 
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider