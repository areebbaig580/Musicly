import AlbumContainerElem from './AlbumContainerElem'
import ContainerHeading from './ContainerHeading'
import ContainerHeading2 from './ContainerHeading2'

const DashboardAlbumContainer = ({setShow, artistAlbum}) => {
    return (
        <div className='h-[61vh] w-full bg-[#2a2a2a] mt-4 rounded-lg px-4 py-4'>
            <ContainerHeading title={"Album"} setShow={setShow}/>
            <ContainerHeading2 elem={['Title', 'Release Year', 'Songs', 'Actions']} />
            <AlbumContainerElem artistAlbum={artistAlbum}/>
        </div>
    )
}

export default DashboardAlbumContainer
