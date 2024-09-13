import React from 'react'
import MyInput from './MyInput'

const Header = ({query, setQuery}) => {
  return (
    <header className='w-full text-black'>
        <MyInput query={query} setQuery={setQuery}/>
    </header>
  )
}

export default Header