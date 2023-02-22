import {createContext,useContext,useState} from 'react'
const StepperContext=createContext({userData:'',setUserData:null});
export function UseContextProvider({children}){
const [userData,setUserData]=useState("");
return(
  <StepperContext>
  </StepperContext>
)
}