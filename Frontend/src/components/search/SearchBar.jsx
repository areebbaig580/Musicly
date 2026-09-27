import { X } from 'lucide-react'
import { useState } from 'react'
import SearchResultContainer from './SearchResultContainer'

const SearchBar = () => {
    const [show, setShow] = useState(false)
    const [query, setQuery] = useState('');
    const[showX , setShowX] = useState(false);
    return (
        <div className='grow flex justify-center items-center gap-2 relative'>
            <div className='text-[0.9rem] text-[#cdcdcd]'>Search</div>
            <div className='md:w-4/10 w-9/10 px-2 py-1 mb-2 md:mb-0 rounded-2xl bg-[#212121] flex gap-1 items-center'>
                <input type="text" className='w-full px-2 outline-none' onChange={(e) => {setQuery(e.target.value), setShowX(true)}} placeholder='Search Music' onClick={() => setShow(true)} />
                <div className={show?"h-fit w-fit cursor-pointer hover:text-red-500":"hidden"} onClick={() => {setShow(false), setShowX(false)}}><X size={19} /></div>
            </div>
            <SearchResultContainer show={show} query={query} />
        </div>
    )
}

export default SearchBar
