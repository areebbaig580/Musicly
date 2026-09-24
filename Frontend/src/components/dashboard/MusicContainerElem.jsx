import axios from 'axios';
import { useEffect, useState } from 'react';
import MusicElem from './MusicElem';

const MusicContainerElem = ({ artistMusic, setChange }) => {
    const [artistId, setArtistId] = useState();
    useEffect(() => {
        if (artistMusic.length !== 0) {
            setArtistId(artistMusic[0].artist);
        }
    }, [artistMusic])

    const deleteMusic = async (musicId) => {
        axios.delete(`http://localhost:3000/api/music/${artistId}/${musicId}`, {
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
