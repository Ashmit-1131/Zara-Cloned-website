
import {createContext, useState } from "react";
let Authcontext = createContext()

const AuthcontextProvider = ({children}) => {
 const [username,setUsername] = useState('')
const [isAuth,setAuth] = useState(false)
const [carttotal,setCarttotal] =useState([])


let loginAuth = (Email) => {
   setAuth(true)
   localStorage.setItem('userInfo',Email)
   localStorage.setItem('User',true)
}

let logoutAuth = () => {
    setAuth(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUsername('')
}
    return(
     <Authcontext.Provider value={{isAuth,loginAuth,logoutAuth,setUsername,username,setCarttotal,carttotal}}>{children}</Authcontext.Provider>
    )
}

export default Authcontext;
export {AuthcontextProvider}
