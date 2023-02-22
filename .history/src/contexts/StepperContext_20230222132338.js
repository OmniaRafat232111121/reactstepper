import {createContext,useContext,useState} from 'react'
const stepperContext=createContext({userData});
export function UseContextProvider({children}){
const [userData,setUserData]=useState("");
}