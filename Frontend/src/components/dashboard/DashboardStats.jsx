import { Library, ListMusic } from 'lucide-react'

const DashboardStats = ({songs, albums}) => {
    return (
        <div className='flex mt-4 gap-4'>
            <div className='h-fit w-fit flex bg-[#2a2a2a] gap-4 items-center px-2 md:px-4 py-2 rounded-xl'>
                <ListMusic className='h-fit w-fit bg-[#0a3e1c] text-[#5ada87] px-2 py-2 rounded-lg' />
                <div className='flex flex-col'>
                    <div className='text-[0.9rem] text-[#cdcdcd]'>Total Songs</div>
                    <div className='text-xl'>{songs}</div>
                </div>
            </div>
            <div className='h-fit w-fit flex bg-[#2a2a2a] gap-4 items-center px-2 md:px-4 py-2 rounded-xl'>
                <Library className='h-fit w-fit bg-[#4f1149] text-[#df65db] px-2 py-2 rounded-lg' />
                <div className='flex flex-col'>
                    <div className='text-[0.9rem] text-[#cdcdcd]'>Total Albums</div>
                    <div className='text-xl'>{albums}</div>
                </div>
            </div>

        </div>
    )
}

export default DashboardStats
