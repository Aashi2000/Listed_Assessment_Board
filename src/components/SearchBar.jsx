import React from 'react'
import SearchIcon from '../assets/IconsSVG/SearchIcon'


function SearchBar() {
  return (
    <form >
      <div className='flex bg-[#ffffff] rounded-[10px] py-1 px-4 items-center'>
        <input placeholder='Search...' className='w-[150px] text-[14px]'/>
        <SearchIcon />
      </div>
    </form>
  )
}

export default SearchBar
