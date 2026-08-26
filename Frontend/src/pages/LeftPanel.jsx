import React from 'react'
import { AudioLines, Disc3, Home, Music } from "lucide-react"
import { Link } from 'react-router-dom'

const LeftPanel = () => {
  return (
    <div className=' w-full h-fit md:min-h-screen md:w-[12vw] md:bg-[#212121] md:rounded-r-xl flex flex-col pb-2 md:py-0 px-4 md:px-0'>
      <div className='md:w-full flex md:justify-center py-2'>
        <div className='flex items-center gap-1 text-[#1db954] font-bold text-lg'><Music size={20} />Musicly</div>
      </div>
      <div className='md:mt-8 flex md:flex-col gap-6 md:gap-4 text-[0.9rem]  md:pl-9 cursor-pointer'>
        <div className='mb-2 text-[#b5b5b5] hidden md:visible'>Menu</div>
        <Link to={"/"} className='flex gap-2 md:w-full items-center hover:text-[#1db954]  md:hover:border-r-3 md:hover:border-[#1db954]'><Home size={20} />Home</Link>
        <Link to={'/all-musics'} className='flex gap-2 md:w-full items-center hover:text-[#1db954]  md:hover:border-r-3 md:hover:border-[#1db954]'><AudioLines size={20} />Musics</Link>
        <Link to={'/all-allbums'} className='flex gap-2 md:w-full items-center hover:text-[#1db954] md:hover:border-r-3 md:hover:border-[#1db954]'><Disc3 size={20} />Albums</Link>
      </div>
    </div>
  )
}

export default LeftPanel
