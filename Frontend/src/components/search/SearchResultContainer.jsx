import React from 'react'
import SearchResult from './SearchResult'
import { Search } from 'lucide-react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const SearchResultContainer = ({ show, query }) => {
    const [musics, setMusics] = useState([]);
    useEffect(() => {
        if (query === '') return;
        axios.get(`http://localhost:3000/api/music/search?q=${encodeURIComponent(query)}`, {
            withCredentials: true,
        }).then((res) => {
            setMusics(res.data.musics)
        }).catch((err) => {
            console.log(err)
        })
    }, [query])

    return (
        <div className={show ? "h-fit md:w-[29vw] w-[80vw] absolute top-9 ml-10 z-50 flex flex-col bg-[#121212] rounded-lg border border-[#3b3b3b] px-2 py-2 shadow-xl shadow-black/50" : "hidden"}>
            <div className='flex gap-2 px-2 py-2 text-[#898989] rounded-sm cursor-pointer items-center'>
                <div className='h-6 w-10  flex items-center justify-center'>
                    <Search size={20} />
                </div>
                <div>Searching for {query}</div>
            </div>
            {musics.map((m, index) => (

                <SearchResult key={index} title={m.title} img={m.imageUri} artist={m.artist.username} id={m._id} />
            ))}
        </div>
    )
}

export default SearchResultContainer
