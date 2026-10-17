import MusicContainer from './MusicContainer'
import AlbumsContainer from './AlbumsContainer'
import Footer from './Footer'

const RightPanel = () => {
    return (

        <div className='h-[92vh] w-full rounded-xl overflow-y-auto scroller'>
            <div className='h-[82vh] md:h-[92vh] w-full md:bg-[#212121]'>

                <MusicContainer />
                <AlbumsContainer />
            </div>
            <Footer />
        </div>


    )
}

export default RightPanel
