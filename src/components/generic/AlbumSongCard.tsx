import React from 'react'

interface InputProps {
    number?: number,
    imgUrl?: string,
    title?: string,
    author?: string
}

export default function AlbumSongCard({ number, imgUrl, title, author} : InputProps) {

    return (
        <div className="albumSongCardWrapper">
            <div className="albumSongCardNumber">
                {number}
            </div>
            <img src={imgUrl}/>
            <div className="albumSongCardDetailsWrapper">
                <div className="albumSongCardTitle">{title}</div>
                <div className="albumSongCardAuthor">{author}</div>
            </div>
        </div>

    )
}
