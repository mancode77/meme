import { useState } from "react"

export default function Meme () {
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

    const images = [
        {
            like: 700,
            img:  './../assets/images/1.png'
        },
        {
            like: 670,
            img:  './../assets/images/2.png'
        },
        {
            like: 20,
            img:  './../assets/images/3.png'
        },
        {
            like: 79,
            img:  './../assets/images/4.png'
        }
    ]
    return (
        <section className="relative">
            <main className="relative top-28">
                <div className="cards px-8 bg-gray-200">
                    {images.map((meme, key) => (
                        <div key={key} className="card mb-8 shadow-xl rounded-lg bg-white lg:w-[640px] lg:mb-8 lg:m-auto">
                            {/* Image dummy */}
                            <div className="image">
                                <img src={meme.img} className="rounded-lg m-auto" />
                            </div>
                            <div className="container-reactions px-6 py-8">
                                <div className="reactions flex gap-3 text-lg">
                                    <div className="like" onClick={function () {
                                        setLike(() => meme.like + 1)
                                    }}>
                                        <a href="#" className="p-2 bg-green-300 rounded-lg">&#9829; {(like === 0 ? meme.like : like)}</a>
                                    </div>
                                    <div className="dislike" onClick={function () {
                                        setDisLike(() => key + 1)
                                    }}>
                                        <a href="#" className="p-2 bg-red-300 rounded-lg">&#9746; {(disLike === 0 ? key : disLike)}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    )
}