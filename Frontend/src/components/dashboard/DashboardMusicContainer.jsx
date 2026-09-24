import ContainerHeading from './ContainerHeading'
import ContainerHeading2 from './ContainerHeading2'
import MusicContainerElem from './MusicContainerElem'

const DashboardMusicContainer = ({ setShow, artistMusic, setChange }) => {
    return (
        <div className='h-[61vh] w-full bg-[#2a2a2a] mt-4 rounded-lg px-4 py-4'>
            <ContainerHeading title={"Songs"} setShow={setShow} />
            <ContainerHeading2 elem={['Title', 'Release Date', 'Actions']} />
            <MusicContainerElem artistMusic={artistMusic} setChange={setChange} />
        </div>
    )
}

export default DashboardMusicContainer
