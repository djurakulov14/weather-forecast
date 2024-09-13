import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const MyInput = (props) => {
  return (
    <div className=' p-4 bg-white rounded-2xl w-[80%] m-auto flex justify-between' >
        <CiSearch size={20} color='black'/>
        <input {...props} className=' outline-0' placeholder='Search here' type='search' value={props.query} onChange={(e) => props.setQuery(e.target.value)}/>
        <FaMicrophone size={20} color='black'/>
    </div>
  )
}

export default MyInput