import axios from "axios";
import { useEffect, useState } from "react"

const UpdateAlbum = ({ artistMusic, setShow, albumIndex, artistAlbum }) => {
    const [albumSongs, setAlbumSongs] = useState([]);
    const [notAlbSongs, setNotAlbSongs] = useState([]);
    const [musicsArr, setMusicsArr] = useState([]);
    const [removeArr, setRemoveArr] = useState([])

    useEffect(() => {
        setAlbumSongs(artistMusic.filter((a) => artistAlbum[albumIndex].musics.includes(a._id)))
        setNotAlbSongs(artistMusic.filter((a) => !artistAlbum[albumIndex].musics.includes(a._id)))
        console.log("artistId=", artistAlbum[albumIndex].artist)
        console.log("albumId=", artistAlbum[albumIndex]._id)
    }, [artistMusic])

    const handleRemoveChange = (e) => {
        const id = e.target.value;
        setRemoveArr((prev = []) =>
            e.target.checked ? prev.filter((x) => x !== id) : [...prev, id]
        )
    }

    const handleAddChange = (e) => {
        const id = e.target.value;
        setMusicsArr((prev = []) =>
            e.target.checked ? [...prev, id] : prev.filter((x) => x !== id)
        )
    }

    const sumbit = async (e) => {
        e.preventDefault();
        if (removeArr.length < 0 && musicsArr.length < 0) return;

        axios.post(`http://localhost:3000/api/music/edit-album/${artistAlbum[albumIndex].artist}/${artistAlbum[albumIndex]._id}`, { musicsArr, removeArr }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='h-fit w-[35vw] bg-[#212121] absolute top-5 right-90 z-50 
  rounded-2xl shadow-2xl shadow-black/50 
  border border-white/10 px-4 py-4'>

            <div className="text-[#1db954] font-bold text-2xl mb-4">Update Album</div>
            <form onSubmit={sumbit} className=" flex flex-col gap-2">
                <div>
                    <div>Remove songs</div>
                    <div className="text-[#939393] text-sm">Uncheck to remove songs</div>
                </div>
                <div className="flex flex-col gap-2 h-[18vh] overflow-y-auto scroller px-1">

                    {albumSongs.map((a, index) => (

                        <div className="flex justify-between items-center bg-[#303030] px-2 py-2 rounded-lg" key={index}>
                            <div className="flex gap-2 items-center">

                                <img src={a.imageUri} alt="" className="h-10" />
                                <label className="text-lg">{a.title}</label>
                            </div>
                            <input type="checkbox" defaultChecked className="text-xl cursor-pointer accent-green-600" value={a._id} name="removeArr" onChange={handleRemoveChange} />
                        </div>
                    ))}

                </div>
                <div>
                    <div>Add songs</div>
                    <div className="text-[#939393] text-sm">Check to Add songs</div>
                </div>
                {notAlbSongs.length > 0 ?
                    <div className="flex flex-col gap-2 h-[30vh] overflow-y-auto scroller px-1">
                        {notAlbSongs.map((a, index) => (

                            <div className="flex justify-between items-center bg-[#303030] px-2 py-2 rounded-lg" key={index}>
                                <div className="flex gap-2 items-center">
                                    <img src={a.imageUri} alt="" className="h-10" />
                                    <label className="text-lg">{a.title}</label>
                                </div>
                                <input type="checkbox" className="text-xl cursor-pointer" value={a._id} name="musicsArr" onChange={handleAddChange} />
                            </div>

                        ))}
                    </div>
                    :
                    <div className="bg-[#303030] flex items-center justify-center py-2 rounded-lg">No more songs to add</div>
                }

                <div className=" flex gap-4 mt-2 w-full justify-end">
                    <button className="h-fit w-fit px-4 py-3 bg-black rounded-xl cursor-pointer" onClick={() => setShow(false)}>Cancel</button>
                    <button type="submit" className="h-fit w-fit px-4 py-3 bg-[#1db954] rounded-xl cursor-pointer">Update Album</button>
                </div>
            </form>

        </div>
    )
}

export default UpdateAlbum
