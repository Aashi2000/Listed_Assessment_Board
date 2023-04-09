import React from 'react'

function ChartLabel({ label, color }) {
    return (
        <div className='flex mx-3'>
            <div className={`h-[10px] w-[10px] m-2 rounded-[10px]`} style={{ backgroundColor: `${color}` }} />
            <p>{label}</p>
        </div>
    )
}

export default ChartLabel
