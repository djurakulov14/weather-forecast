import Image from 'next/image'
import React from 'react'

const ForecastLine = () => {
  return (
    <div className=' flex justify-between py-[15px] items-center'>
        <span className=' font-bold text-lg'>Sep, 13</span>
        <Image src={'/cloud.png'} alt="cloud" width={45} height={45}/>
        <span className=' text-lg'>21°</span>
    </div>
  )
}

export default ForecastLine