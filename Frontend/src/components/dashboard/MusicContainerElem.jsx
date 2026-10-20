import axios from 'axios';
import MusicElem from './MusicElem';

const MusicContainerElem = ({ artistMusic, setChange }) => {
    
    const deleteMusic = async (musicId) => {
        axios.delete(`http://localhost:3000/api/music/${musicId}`, {
            withCredentials: true,
        }).then((res) => {
            console.log(res)
            setChange('delete')
            alert('Music deleted Succesfully')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='mt-2 flex flex-col gap-2 h-[40vh] overflow-y-auto scroller'>
            <MusicElem artistMusic={artistMusic} deleteMusic={deleteMusic} setChange={setChange} />
        </div>
    )
}

export default MusicContainerElem
