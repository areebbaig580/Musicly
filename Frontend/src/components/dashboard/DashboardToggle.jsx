import { CircleDot, Music } from 'lucide-react'

const DashboardToggle = ({ setActive, active }) => {
    return (
        <div className='h-fit w-fit px-4 py-1 flex gap-4 mt-4 bg-[#2a2a2a] rounded-lg'>
            <div className={active === 'music' ? 'flex gap-2 items-center cursor-pointer text-[#1db954]' : 'flex gap-2 items-center cursor-pointer'} onClick={() => setActive('music')}><Music size={17} /> Songs</div>
            <div className={active === 'album' ? 'flex gap-2 items-center cursor-pointer text-[#1db954]' : 'flex gap-2 items-center cursor-pointer'} onClick={() => setActive('album')}><CircleDot size={17} /> Albums</div>
        </div>
    )
}

export default DashboardToggle
