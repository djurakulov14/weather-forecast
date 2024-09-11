import Header from "@/Components/Header";
import Info from "@/Components/Info";
import Image from "next/image";

export async function getServerSideProps() {
	const url = "https://api.weatherstack.com/current?access_key=5cd7099ac722fef06fe81c92768200e4&query=Samarqand"
	const options = {
		method: 'GET'
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		return { props: { result } }
	} catch (error) {
		console.error(error);
	}

}


export default function Home({result}) {

	console.log(result);
	
  return (
    <center className="py-[35px] flex flex-col justify-between items-center">
		<Header/>
		<Image src='/cloud.png' alt='cloud' width={350} height={350}/>
		<Info result={result} />
	</center>
  );
}
