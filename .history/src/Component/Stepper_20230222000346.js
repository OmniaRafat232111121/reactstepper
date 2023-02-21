import React from 'react'

const Stepper = () => {
  return (
    <div className=' mx-4 my-6 p-5 flex justify-between items-center'>
        <div className='relative flex flex-col items-center text-teal-500'>
        <div className='rounded-full transition duration-200 ease-in-out rounded-md border-2 border-gray-300 h-12 w-20 flex items-center justify-center py-3'>{/* Display number*/ }
        1 {/* Display number*/ }
        </div>
      <div className='abs'>
        {/* Display decsription*/ }
      </div>
        <div>
        {/* Display line*/ }
        </div>
        </div>

    </div>
  )
}

export default Stepper
