import React from 'react'
import { Link } from 'react-router-dom'

const Album = ({ img, title, artist , id}) => {
    return (
        <Link to={`/album/${id}`} className=' flex flex-col gap-1 items-center'>
            <div className='h-45 w-45 bg-[#393939] cursor-pointer '>
                <img src={img} alt="" />

            </div>
            <div className='text-[#b5b5b5]'>{title}</div>
            <div>{artist.username}</div>
        </Link>
    )
}

export default Album
