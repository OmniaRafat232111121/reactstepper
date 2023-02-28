import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps, localization }) => {
  return (
    <div className='container  flex justify-around mt-5 mb-4'>
       {/*back button*/}
       <button
       onClick={() => handleClick()}
        className={`bg-white text-slate-400 font-semibold  uppercase px-5 py-2  rounded-xl
        cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out
        ${currentStep ===1 ? " cursor-not-allowed opacity-50 " : ""}`}>
       {localization.back}
       </button>
        {/*next button*/}
        <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? localization.confirm : localization.next}
      </button>
    </div>
  )
}

export default StepperControl
