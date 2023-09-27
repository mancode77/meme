import { useState } from "react"

export default function Nav () {
    const [ isPopup, setIsPopup ] = useState(false)
    
    if (isPopup) {
        return (
            <div className="upload-meme text-white md:text-black fixed w-[100%] h-[100%] bg-white flex justify-center items-center z-50">
                <div className="relative btn-upload-meme w-[300px] bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 h-[300px] flex justify-center items-center rounded-lg">
                    <span className="close absolute -top-3 -right-3 bg-red-300 p-0 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer" onClick={() => setIsPopup(false)}>x</span>
                    <a href="#" className="p-3 rounded-lg border">Upload Meme</a>
                </div>
            </div>
        )
    }

    return (
        <nav className="fixed text-white md:text-black w-full z-50">
            <div className="container flex justify-between py-4 items-center z-50 lg:w-[640px] m-auto shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-3 rounded-b-lg">
                <div className="logo">
                   <a href="" className="md:text-xl text-md">Per-Ngawian</a>
                </div>
               <div className="btn-upload-meme">
                    <button className="p-3 border rounded-lg md:text-xl text-md" onClick={() => setIsPopup(true)}>Upload Meme</button>
               </div>
            </div>
        </nav>
    )
}