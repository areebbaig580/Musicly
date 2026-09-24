import React from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import MoreMusic from '../components/more-album-music/MoreMusic'

const AllMusic = () => {
  return (
    <div className='min-h-screen w-full flex'>
        <LeftPanel/>
        <div className='h-full grow flex flex-col px-2 py-2 gap-2'>
            <UserInfo/>
            <div className='h-full w-full bg-[#212121] rounded-xl'>
              <MoreMusic/>
            </div>
        </div>
      
    </div>
  )
}

export default AllMusic
