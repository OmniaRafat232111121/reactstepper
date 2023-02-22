import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container  flex justify-around mt-5 mb-4'>
       {/*back button*/}
       <button
       onClick={() => handleClick()}
        className='bg-white text-slate-400 font-semibold  uppercase px-5 py-2  rounded-xl
       cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out
       '>
       Back
       </button>
        {/*next button*/}
        <button className='bg-green-500 text-white font-semibold  uppercase px-5 py-2  rounded-xl
        cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
        Next
        </button>
    </div>
  )
}

export default StepperControl
