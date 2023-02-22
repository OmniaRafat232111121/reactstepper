import React,{useEffect,useState,useRef} from 'react'

const Stepper = ({steps,currentStep}) => {
  const [newStep,setNewStep]=useState([]);
  const stepRef=useRef();
  const updateStep=(stepNumber,step)=>{

  }
  useEffect(()=>{
    const stepsState=steps.map((step,index)=>{
      Object.assign({},{
        description:step,
        completed:false,
        highlighted:index === 0 ? true:false,
        selected:index === 0 ? true: false
      })
    })
   stepRef.current=stepsState;
   const current=updateStep(currentStep-1 ,stepRef.current)
   setNewStep(current);
  },[steps,currentStep])
  const displaySteps= newStep.map((step,index)=>{
    
  } )
  
  return (
    <div className=' mx-4 my-6 p-5 flex justify-between items-center '>
        {displaySteps}
        

    </div>
  )
}

export default Stepper
