import { useState } from "react"
import DashboardAlbumContainer from "./DashboardAlbumContainer"
import DashboardHeading from "./DashboardHeading"
import DashboardMusicContainer from "./DashboardMusicContainer"
import DashboardStats from "./DashboardStats"
import DashboardToggle from "./DashboardToggle"

const DashboardContainer = () => {
    const [active, setActive] = useState('music');
    return (
        <div className='h-full w-full bg-[#212121] rounded-xl px-4 py-2'>
            <DashboardHeading />
            <DashboardStats />
            <DashboardToggle setActive={setActive} active={active} />
            {active === "music" ? <DashboardMusicContainer /> : <DashboardAlbumContainer />}
        </div>
    )
}

export default DashboardContainer
