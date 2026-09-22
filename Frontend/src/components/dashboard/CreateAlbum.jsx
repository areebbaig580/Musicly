import axios from "axios";



const CreateAlbum = ({ setShow, artistMusic }) => {
    const Create = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/api/music/create-album', formData, {
            withCredentials: true,
        })
            .then((res) => {
                alert("Album Uploaded Succesfully")
                console.log(res)
                e.target.reset();
                setShow(false);

            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className='h-fit w-[35vw] bg-[#212121] absolute top-5 right-90 z-50 
  rounded-2xl shadow-2xl shadow-black/50 
  border border-white/10 px-4 py-4'>

            <div className="text-[#1db954] font-bold text-2xl mb-4">Add Album</div>
            <form onSubmit={Create} className=" flex flex-col gap-2">
                <div>Album name</div>
                <input type="text" placeholder='Name' className="h-fit w-full px-2 py-2 bg-[#303030] rounded-lg mb-2 cursor-pointer" name="title"/>
                <div>Album Cover image</div>
                <input type="file" className="h-fit w-full px-2 py-2 bg-[#303030] rounded-lg mb-2 cursor-pointer" name="cover"/>

                <div>Add songs</div>
                <div className="flex flex-col gap-2 h-[30vh] overflow-y-auto scroller px-1">

                {artistMusic.map((a, index) => (

                    <div className="flex justify-between items-center bg-[#303030] px-2 py-2 rounded-lg" key={index}>
                        <div className="flex gap-2 items-center">

                            <img src={a.imageUri} alt="" className="h-10" />
                            <label className="text-lg">{a.title}</label>
                        </div>
                        <input type="checkbox" className="text-xl cursor-pointer" value={a._id} name="musics"/>
                    </div>
                ))}
                </div>

                <div className=" flex gap-4 mt-2 w-full justify-end">
                    <button className="h-fit w-fit px-4 py-3 bg-black rounded-xl cursor-pointer" onClick={() => setShow(false)}>Cancel</button>
                    <button type="submit" className="h-fit w-fit px-4 py-3 bg-[#1db954] rounded-xl cursor-pointer">Add Album</button>
                </div>
            </form>

        </div>
    )
}

export default CreateAlbum
