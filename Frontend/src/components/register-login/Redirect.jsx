import React from 'react'
import { Link } from 'react-router-dom'

const Redirect = ({text , link, icon}) => {
    return (
        <div className="absolute flex right-15 top-10 gap-2 items-center">
            <div className="font-semibold">{text}</div>
            <Link to={link} className="h-fit w-fit px-7 py-2 rounded-2xl bg-[#1db954] font-semibold cursor-pointer text-lg z-90">{icon}</Link>
        </div>
    
    )
}

export default Redirect
