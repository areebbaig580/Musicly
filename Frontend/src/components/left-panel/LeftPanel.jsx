import { useEffect } from 'react'
import { LogOut, Music, User } from "lucide-react"
import { useState } from 'react'
import Nav from './Nav'


const LeftPanel = () => {
  const [isArtist, setArtist] = useState(false)
  const [userName, setUsername] = useState('');

  useEffect(() => {
    JSON.parse(localStorage.getItem('userInfo')).user.role === 'artist' ? setArtist(true) : '';
    const username = JSON.parse(localStorage.getItem('userInfo')).user.username;
    setUsername(username);
  }, [])
  return (
    <div className=' w-full h-fit md:min-h-screen md:w-[12vw] md:bg-[#212121] md:rounded-r-xl flex flex-col pb-2 md:py-0 px-4 md:px-0'>
      <div className='flex items-center justify-between'>

        <div className='md:w-full flex md:justify-center py-2'>
          <div className='flex items-center gap-1 text-[#1db954] font-bold text-lg'><Music size={20} />Musicly</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex md:hidden items-center gap-1 text-sm'><User size={16} />{userName}</div>

        </div>
      </div>
      <Nav isArtist={isArtist} />
    </div>
  )
}

export default LeftPanel
