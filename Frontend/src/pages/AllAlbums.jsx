import React from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import { useParams } from 'react-router-dom'
import MoreAlbum from '../components/more-album-music/MoreAlbum'
import Footer from '../components/right-panel/Footer'


const AllAlbums = () => {

  return (
    <div className='text-white min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden'>
      <LeftPanel />
      <div className='h-screen grow flex flex-col px-2 py-2 gap-2 '>
        <UserInfo />
        <div className='h-full w-full rounded-xl overflow-y-auto scroller'>
          <div className='h-[92vh] bg-[#212121]'>

          <MoreAlbum />
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default AllAlbums
