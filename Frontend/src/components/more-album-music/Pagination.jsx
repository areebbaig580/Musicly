
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { use, useEffect, useState } from 'react';

const Pagination = ({ page, setPage, paginationData }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (paginationData) { setLoading(false) };
        console.log(paginationData)

    }, [paginationData])

    if (loading) {
        return (
            <div className='absolute top-2 right-2 flex gap-2 items-center px-4 '>Loading pages</div>
        )
    } else {
        return (
            <div className='absolute top-2 right-2 flex gap-2 items-center px-4 '>
                <div >Page</div>
                <div className={paginationData.hasPrevPage ? 'flex items-center gap-1 cursor-pointer text-[#919090] hover:text-[#1db954]' : 'hidden'} onClick={()=>setPage(page-1)}>

                    <ChevronLeft size={18} />
                    <div>Prev</div>
                </div>
                <div className='text-lg h-fit w-fit px-2 bg-white text-black rounded-full'>{page}</div>
                <div className={paginationData.hasNextPage ? 'flex items-center gap-1 cursor-pointer text-[#919090] hover:text-[#1db954]' : 'hidden'} onClick={()=>setPage(page+1)}>

                    <div>Next</div>
                    <ChevronRight size={18} />
                </div>

            </div>
        )
    }
}

export default Pagination
