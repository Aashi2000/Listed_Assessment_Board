import React from 'react'
import DashboardIcon from '../assets/IconsSVG/DashboardIcon'
import TransactionsIcon from '../assets/IconsSVG/TransactionsIcon'
import SchedulesIcon from '../assets/IconsSVG/SchedulesIcon'
import UsersIcon from '../assets/IconsSVG/UsersIcon'
import SettingsIcon from '../assets/IconsSVG/SettingsIcon'
import { Link } from 'react-router-dom'

const sideBarData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    link: '/dashboard'
  },
  {
    icon: <TransactionsIcon />,
    name: "Transactions",
    link: '/transactions'
  },
  {
    icon: <SchedulesIcon />,
    name: "Schedules",
    link: '/schedules'
  },
  {
    icon: <UsersIcon />,
    name: "Users",
    link: '/users'
  },
  {
    icon: <SettingsIcon />,
    name: "Settings",
    link: '/settings'
  }
]

function SideBar() {
  return (
    <div className='flex flex-col flex-wrap h-screen min-w-min w-[15%] px-[50px] py-[60px] bg-black rounded-[30px] justify-between '>
      <div className=''>
        <p className='text-white font-[700] text-[36px]'>Board.</p>
        <ul>
          {
            sideBarData.map((item) => {
              return (
                <Link to={item.link}>
                  <li className='flex items-center my-4'>
                    <p className='h-5 w-5 m-2'>{item.icon}</p>
                    <p className='text-[#ffff]'>{item.name}</p>
                  </li>
                </Link>

              )
            })
          }
        </ul>
      </div>
      <div className=''>
        <Link to={'/help'}>
          <p className='text-[#ffff] font-[200] text-[14px]' >Help</p>
        </Link>
        <Link to={'/contactus'}>
        <p className='text-[#ffff] font-[200] text-[14px]' >Contact Us</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
