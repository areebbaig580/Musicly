import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({title , img , artist , id}) => {
    return (
        <Link className='flex gap-2 px-2 py-1 hover:bg-[#434343] rounded-sm cursor-pointer' to={`/music/${id}`}>
            <img src={img} alt="" className='h-12' />
            <div className='flex flex-col'>
                <div>{title}</div>
                <div className='text-[#898989] text-sm'>{artist}</div>
            </div>
        </Link>
    )
}

export default SearchResult
