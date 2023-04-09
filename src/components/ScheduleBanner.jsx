import React from 'react'

function ScheduleBanner({event, time, location, color}) {
  return (
    <div className='flex my-4'>
      <div className='w-1.5 bg-black' style={{ backgroundColor: `${color}` }}/>
      <div className='p-1.5'>
        <p className='text-[14px] font-[600] text-[#666666]'>{event}</p> 
        <p className='text-[12px] font-[400] text-[#999999]'>{time}</p> 
        <p className='text-[12px] font-[400] text-[#999999]'>{location}</p> 
      </div>
    </div>
  )
}

export default ScheduleBanner
