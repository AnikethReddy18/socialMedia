import apiClient from "./apiClient";
import { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext()

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(()=>{
        if(token){
            apiClient.defaults.headers.common["Authorization"] = "Bearer " + token
            localStorage.setItem('token', token)
        } else{ 
            delete apiClient.defaults.headers.common["Authorization"]
            localStorage.removeItem('token')
        }
    },[token])

    return ( 
        <authContext.Provider value={{token, setToken}}>{ children }</authContext.Provider>
     );
}

export function useAuth(){
    return useContext(authContext)
}

