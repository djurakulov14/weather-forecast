import Link from 'next/link';
import React from 'react'
import { PiWind } from "react-icons/pi";
import { RiDropLine } from "react-icons/ri";

const Info = ({result}) => {

    const today = new Date(); // Создаем объект даты, представляющий текущее время
    const day = today.getDate(); // Получаем текущий день
    const month = today.getMonth();

    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

  return (
    <div className=' flex flex-col justify-between items-center text-white bg-[#ffffff30] w-[80%] py-5 rounded-[20px] border-2 border-[#BFBFBFB2]'>
        <Link href={'/forecast'}>
            <h2 className=' shadow1 text-lg'>Today, {day} {monthNames[month]}</h2>
            <h1 className=' shadow2 text-[100px]'>{result?.current?.temperature}°</h1>
            <div className="bot">
                <div className="top flex items-center text-lg gap-[20px]">
                    <PiWind/>
                    <span>Wind</span>
                    <div className="line w-[2px] h-full bg-[#BFBFBFB2]"> </div>
                    <span>{result?.current?.wind_speed} km/h</span>
                </div>
                <div className="top flex items-center text-lg gap-[20px]">
                    <RiDropLine/>
                    <span>Hum</span>
                    <div className="line w-[2px] h-full bg-[#BFBFBFB2]"> </div>
                    <span>{result?.current?.humidity} %</span>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Info