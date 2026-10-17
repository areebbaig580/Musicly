import { AudioLines, Disc3, Home, LucideLayoutDashboard } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Nav = ({ isArtist }) => {
    return (
        <div className='md:mt-8 flex md:flex-col gap-6 md:gap-4 text-[0.9rem]  md:pl-9 cursor-pointer'>
            <div className='mb-2 text-[#b5b5b5] hidden md:visible'>Menu</div>
            <NavLink to={"/home"} className={({ isActive }) => isActive ? 'activeNav' : 'inactive'}><Home size={20} className='hidden md:flex'/>Home</NavLink>
            <NavLink to={'/Musics'} className={({ isActive }) => isActive ? 'activeNav' : 'inactive'}><AudioLines size={20} className='hidden md:flex'/>Musics</NavLink>
            <NavLink to={'/Albums'} className={({ isActive }) => isActive ? 'activeNav' : 'inactive'}><Disc3 size={20} className='hidden md:flex'/>Albums</NavLink>
            {isArtist ?
                <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'activeNav' : 'inactive'}><LucideLayoutDashboard size={20} className='hidden md:flex'/> Dashboard</NavLink> : ''
            }
        </div>
    )
}

export default Nav
