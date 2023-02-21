import React from 'react'

const StepperControl = () => {
  return (
    <div className='container  flex justify-around mt-5 mb-4'>
       {/*back button*/}
       <button className='bg-white text-slate-500 font-medium  uppercase px-5 py-2  rounded-xl
       cursor-pointer border-2 border-'>
       Back
       </button>
        {/*next button*/}
        <button>
    Next
       </button>
    </div>
  )
}

export default StepperControl
