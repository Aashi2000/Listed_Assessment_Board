import React from 'react'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import BellIcon from '../assets/IconsSVG/BellIcon'
import ProfileImage from '../components/ProfileImage'

function Schedules() {
  return (
    <div className='flex flex-col md:flex-row p-[8px] bg-[#F5F5F5]'>
      <SideBar />

      <div className='p-4 flex-1'>
        <div className='flex justify-between items-center flex-wrap md:flex-nowrap p-4'>
          <p className='text-[24px] font-[700] mb-2 md:mb-0 md:mr-4'>Schedules</p>
          <div className='flex items-center'>
            <SearchBar />
            <div className='mx-4'>
              <BellIcon />
            </div>
            <div>
              <ProfileImage />
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Schedules
