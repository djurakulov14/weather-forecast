import Header from "@/Components/Header";
import Info from "@/Components/Info";
import Image from "next/image";
import { useEffect, useState } from "react";

const url = "https://api.weatherstack.com/current?access_key=5cd7099ac722fef06fe81c92768200e4&query=Samarqand"
const options = {
	method: 'GET'
};

export async function getServerSideProps() {

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return { props: { result } }
	} catch (error) {
		console.error(error);
	}
}


export default function Home({result}) {

	const [query, setQuerry] = useState('')
	const [data, setData] = useState([])

	useEffect(() => {
		if(query.length != 0){
			fetch(`https://api.weatherstack.com/current?access_key=5cd7099ac722fef06fe81c92768200e4&query=${query.length === 0 ? "samarqand" : query}`)
				.then(res => res.json())
				.then(res => setData(res))
		}
	}, [query])
	
	console.log(data);
	 
	console.log(result);
	
	
	
  return (
    <center className="py-[35px] flex flex-col justify-between items-center gap-5">
		<Header query={query} setQuery={setQuerry}/>
		<Image src={result.current.weather_icons[0]} alt='cloud' width={200} height={200}/>
		<Info result={data.length === 0 ? result : data} />
	</center>
  );
}
