import MusicContainer from './MusicContainer'
import AlbumsContainer from './AlbumsContainer'


const RightPanel = () => {
    return (
        <div className=' w-full md:w-[88vw] flex flex-col items-center py-2 gap-2 md:gap-3 px-2'>
            <div className='h-full w-full bg-[#1b1b1b] rounded-xl'>

                <MusicContainer />
                <AlbumsContainer />
            </div>

        </div>
    )
}

export default RightPanel
