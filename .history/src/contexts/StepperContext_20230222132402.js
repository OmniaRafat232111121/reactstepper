import {createContext,useContext,useState} from 'react'
const stepperContext=createContext({userData:'',setUserData:null});
export function UseContextProvider({children}){
const [userData,setUserData]=useState("");
return(
  
)
}