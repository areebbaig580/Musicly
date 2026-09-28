import React, { useEffect } from 'react'
import { AudioLines, Disc3, Home, LucideLayoutDashboard, Music } from "lucide-react"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Nav'

const LeftPanel = () => {
  const [isArtist , setArtist] = useState(false)

  useEffect(()=>{
    JSON.parse(localStorage.getItem('userInfo')).user.role === 'artist' ? setArtist(true) : '';
  },[])
  return (
    <div className=' w-full h-fit md:min-h-screen md:w-[12vw] md:bg-[#212121] md:rounded-r-xl flex flex-col pb-2 md:py-0 px-4 md:px-0'>
      <div className='md:w-full flex md:justify-center py-2'>
        <div className='flex items-center gap-1 text-[#1db954] font-bold text-lg'><Music size={20} />Musicly</div>
      </div>
      <Nav isArtist={isArtist}/>
    </div>
  )
}

export default LeftPanel
