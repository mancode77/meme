import { useState } from "react"

export default function Nav () {
    const [ isPopup, setIsPopup ] = useState(false)
    
    if (isPopup) {
        return (
            <div className="upload-meme fixed w-[100%] h-[100%] bg-slate-200 flex justify-center items-center z-50">
                <div className="relative btn-upload-meme w-[300px] h-[300px] bg-white flex justify-center items-center rounded-lg">
                    <span className="close absolute -top-3 -right-3 bg-red-300 p-0 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer" onClick={() => setIsPopup(false)}>x</span>
                    <a href="#" className="p-3 bg-blue-400 rounded-lg">Upload Meme</a>
                </div>
            </div>
        )
    }

    return (
        <nav className="px-8 fixed w-full z-50">
            <div className="container flex justify-between py-4 items-center z-50 lg:w-[640px] m-auto shadow-md bg-white px-3 rounded-b-lg">
                <div className="logo">
                   <a href="" className="md:text-xl text-md">Per-Ngawian</a>
                </div>
               <div className="btn-upload-meme">
                    <button className="p-3 bg-blue-400 rounded-lg md:text-xl text-md" onClick={() => setIsPopup(true)}>Upload Meme</button>
               </div>
            </div>
        </nav>
    )
}