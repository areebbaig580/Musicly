import React from 'react'
import UserInfo from '../components/right-panel/UserInfo'
import MusicContainer from '../components/right-panel/MusicContainer'


const RightPanel = () => {
    return (
        <div className='min-h-screen w-full md:w-[90vw] flex flex-col items-center py-2 gap-2 md:gap-5 px-2 md:px-0'>
            <UserInfo/>
            <MusicContainer/>
            
        </div>
    )
}

export default RightPanel
