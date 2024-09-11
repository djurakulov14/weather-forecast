import Image from 'next/image'
import React from 'react'

const Hour = ({active}) => {
  return (
    <div className=' p-[15px] flex flex-col gap-5 rounded-2xl' style={active ? {backgroundColor: "#ffffff30", border: "#BFBFBFB2 solid 1px"} : {}}>
        <span>29°C</span>
        <Image src={'/cloud.png'} alt="cloud" width={45} height={45}/>
        <span>15.00</span>
    </div>
  )
}

export default Hour