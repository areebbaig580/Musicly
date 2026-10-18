import React from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import DashboardContainer from '../components/dashboard/DashboardContainer'
import Footer from '../components/right-panel/Footer'

const ArtistDashboard = () => {
  return (
    <div className='text-white min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden'>
      <LeftPanel />
      <div className='h-screen grow flex flex-col px-1 md:px-2 py-2 gap-2'>
        <UserInfo />
        <div className='h-full w-full rounded-xl overflow-y-auto scroller'>
          <div className='h-[92vh] md:bg-[#212121]'>

            <DashboardContainer />
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default ArtistDashboard
