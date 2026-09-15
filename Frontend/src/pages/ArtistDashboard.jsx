import React from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import DashboardContainer from '../components/dashboard/DashboardContainer'

const ArtistDashboard = () => {
  return (
    <div className='min-h-screen w-full flex'>
        <LeftPanel/>
        <div className='h-full grow flex flex-col px-2 py-2 gap-2'>
            <UserInfo/>
            <DashboardContainer/>
        </div>
      
    </div>
  )
}

export default ArtistDashboard
