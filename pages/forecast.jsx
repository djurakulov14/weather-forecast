import ForecastLine from '@/Components/ForecastLine';
import Hour from '@/Components/Hour';
import { useRouter } from 'next/router';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";

export async function getServerSideProps() {
    const url = 'https://api.weatherstack.com/forecast?access_key=5cd7099ac722fef06fe81c92768200e4&query=Samarqand&historical_date_start=2024-09-04&historical_date_end=2024-09-10';
    const options = {
        method: 'GET'
    };

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return { props: { result } }
	} catch (error) {
		console.error(error);
	}

}

const forecast = ({result}) => {

    console.log(result);
    
    const today = new Date(); // Создаем объект даты, представляющий текущее время
    const day = today.getDate(); // Получаем текущий день
    const month = today.getMonth();

    const router = useRouter()
    

    
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


  return (
    <div className='w-[90%] m-auto py-5'>
        <header>
            <IoIosArrowBack onClick={() => router.back()}/>
        </header>
        <div className="time flex justify-between mt-3">
            <span className=' text-xl font-bold'>Today</span>
            <span className=' text-xl'>{day}, {monthNames[month]}</span>
        </div>
        <div className="hours flex justify-between mb-[50px]">
            <Hour/>
            <Hour/>
            <Hour active={true}/>
            <Hour/>
            <Hour/>
        </div>
        <div className="time flex justify-between mt-3">
            <span className=' text-xl font-bold'>Next Forecast</span>
            <span className=' text-xl'><IoMdCalendar/></span>
        </div>
        <div className="lines">
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
        </div>
    </div>
  )
}

export default forecast