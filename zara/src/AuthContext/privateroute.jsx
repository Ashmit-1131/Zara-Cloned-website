import {useContext} from "react"
import Authcontext from "./AuthContext"
import { Navigate } from "react-router-dom"


let user = localStorage.getItem('User')

const Privateroute = ({children}) => {
 
   let token = localStorage.getItem('token')
    
   if(token ==='' || token===undefined || token === null){
    alert('user need to login')
    return <Navigate to='/login'/>

   }

  

    return children

}

export default Privateroute;
