import React from 'react'

function ProductItem({ title, percentage, color }) {
    return (
        <div className='flex'>
            <div
                className={`h-[10px] w-[10px] m-2 rounded-[10px]`}
                style={{
                    backgroundColor: `${color}`
                }}
            />
            <div>
                <p className='font-[700] text-[14px] whitespace-nowrap'>{title}</p>
                <p className={`font-[400] text-[12px] text-[#858585]`}>{percentage}</p>
            </div>
        </div>
    )
}

export default ProductItem
