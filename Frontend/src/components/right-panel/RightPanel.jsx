import MusicContainer from './MusicContainer'
import AlbumsContainer from './AlbumsContainer'

const RightPanel = () => {
    return (

        <div className='h-[92vh] w-full bg-[#212121] rounded-xl overflow-y-auto scroller'>

            <MusicContainer />
            <AlbumsContainer />

        </div>


    )
}

export default RightPanel
