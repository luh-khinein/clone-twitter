import React from 'react'

const YourList: React.FC = () => {
  return (
    <div className='w-full flex flex-col'>
      <h2 className='text-xl font-bold py-3 px-4'>
        Your Lists
      </h2>
      <div className='w-full py-10 flex justify-center items-center text-slate-400 text-base'>
        You haven't created or followed any Lists. When you do,
        they'll show up here.
      </div>
    </div>
  )
}

export default YourList
