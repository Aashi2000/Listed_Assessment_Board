import React from 'react'

function ItemCard({ title, subTitle, color, Icon }) {
    return (
        <div className={`p-4 flex rounded-[20px] justify-between h-[120px] w-[220px]`} style={{ backgroundColor: `${color}` }}>
            <div className='flex flex-col justify-end'>
                <p className='font-[400]'>{title}</p>
                <p className='font-[700] text-[24px] '>{subTitle}</p>
            </div>
            {Icon}
        </div>
    )
}

export default ItemCard