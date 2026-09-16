import { useState } from "react"
import DashboardAlbumContainer from "./DashboardAlbumContainer"
import DashboardHeading from "./DashboardHeading"
import DashboardMusicContainer from "./DashboardMusicContainer"
import DashboardStats from "./DashboardStats"
import DashboardToggle from "./DashboardToggle"
import CreateMusic from "./CreateMusic"

const DashboardContainer = () => {
    const [active, setActive] = useState('music');
    const [show , setShow] = useState(null);
    return (
        <div className='h-full w-full bg-[#212121] rounded-xl px-4 py-2 relative'>
            <DashboardHeading  />
            <DashboardStats />
            <DashboardToggle setActive={setActive} active={active} />
            {active === "music" ? <DashboardMusicContainer setShow={setShow}/> : <DashboardAlbumContainer setShow={setShow}/>}
            {show==='Songs'? <CreateMusic setShow={setShow}/>:''}
            
        </div>
    )
}

export default DashboardContainer
