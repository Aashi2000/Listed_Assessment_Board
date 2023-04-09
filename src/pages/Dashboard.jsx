import React from 'react'
import ItemCard from '../components/ItemCard'
import SplineChart from '../components/SplineChart'
import PieChart from '../components/PieChart'
import ProductItem from '../components/ProductItem'
import ScheduleBanner from '../components/ScheduleBanner'
import { chartLabelData, itemCardData, productItemData, scheduleBannerData } from '../assets/Data/Data'
import SearchBar from '../components/SearchBar'
import BellIcon from '../assets/IconsSVG/BellIcon'
import ProfileImage from '../components/ProfileImage'
import ChartLabel from '../components/ChartLabel'
import SideBar from '../components/SideBar'

function Dashboard() {
  return (
    <div className='flex flex-col md:flex-row p-[8px] bg-[#F5F5F5]'>
      <SideBar />

      <div className='p-4 flex-1'>
        <div className='flex justify-between items-center flex-wrap md:flex-nowrap p-4'>
          <p className='text-[24px] font-[700] mb-2 md:mb-0 md:mr-4'>Dashboard </p>
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
        <div className='flex flex-wrap justify-between m-4'>
          {itemCardData.map((item) => {
            return (
              <ItemCard
                title={item.title}
                subTitle={item.subTitle}
                color={item.color}
                Icon={item.icon}
              />
            )
          })}
        </div>
        <div className='m-4 p-6 bg-white border rounded-[30px]'>
          <div className='flex flex-wrap items-center justify-between p-4'>
            <div className='pl-4 mb-2 md:mb-0 md:mr-4'>
              <p className='font-[700] text-[18px]'>Activities</p>
              <p>May - June 2021 </p>
            </div>
            <div className='flex'>
              {
                chartLabelData.map((item) => {
                  return (
                    <ChartLabel
                      label={item.label}
                      color={item.color}
                    />
                  )
                })
              }
            </div>
          </div>
          <SplineChart />
        </div>

        <div className='flex'>
          {/* Top Products */}
          <div className='border p-8 rounded-[30px] m-4 bg-white w-full md:w-1/2'>
            <div className='flex justify-between'>
              <p className='text-[18px] font-[700] '>Top products</p>
              <p className='text-[#858585] font-[400] text-[14px]'> May - June 2021 ▼</p>
            </div>
            <div className='flex flex-col md:flex-row p-[10px] justify-between'>
              <PieChart />
              <div className='flex flex-col justify-between'>
                {
                  productItemData.map((item) => {
                    return (
                      <ProductItem
                        title={item.title}
                        percentage={item.percentage}
                        color={item.dotColor}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>


          {/* Today's schedule */}
          <div className='border p-8 rounded-[30px] m-4 bg-white w-full md:w-1/2'>
            <div className='flex justify-between mb-4'>
              <p className='text-[18px] font-[700] '>Today's schedule</p>
              <p className='text-[#858585] font-[400] text-[14px]'>See All</p>
            </div>
            <div>
              {
                scheduleBannerData.map((item) => {
                  return (
                    <ScheduleBanner
                      event={item.event}
                      time={item.time}
                      location={item.location}
                      color={item.ribbonColor}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
