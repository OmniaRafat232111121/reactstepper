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
    return(
      (
        <div key={index}   className={index !== newStep.length-1 ? }>
        <div className='relative flex flex-col items-center text-teal-500'>
              <div className='rounded-full  transition duration-200 ease-in-out rounded-md border-2 border-gray-300 h-12 w-20 flex items-center justify-center py-3'>{/* Display number*/ }
              1 {/* Display number*/ }
              </div>
            <div className='absolute top-0 mt-16 w-32  text-center text-xs font-medium uppercase text-white'>
             description  {/* Display decsription*/ }
            </div>
            </div>
      
              <div className=' flex-auto border-t-2  text-white transition duration-500 ease-in-out'>
              {/* Display line*/ }
              
            
              </div>
      
        </div>
      
    )
    );
  } )
  
  return (
    <div className=' mx-4 my-6 p-5 flex justify-between items-center '>
        {displaySteps}
        

    </div>
  )
}

export default Stepper
