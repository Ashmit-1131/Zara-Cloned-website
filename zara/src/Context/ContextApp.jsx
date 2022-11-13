import { useState } from "react";
import { createContext } from "react";



export const AppContext=createContext()


function AppContextProvider({children}){


const [isAuth, setisAuth] = useState({ auth: false, name: null })
  const handleLogin = (name) => {
    setisAuth({ auth: true, name: name })
  }

  const handleLogout = () => {
    setisAuth({ auth: false, name: null })
  }

return(
    <AppContext.Provider value={{isAuth,handleLogin,setisAuth}}>
        {children}
    </AppContext.Provider>
)
}

export default AppContextProvider