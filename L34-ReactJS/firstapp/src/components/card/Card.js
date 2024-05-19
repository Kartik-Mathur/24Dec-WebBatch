import React from 'react'

const Card = ({ movie }) => {
    let imageStyle = {
        "height": "100px"
    }

    return (
        <div className='movieCard'>
            <div>Actors : {movie.Actors}</div>
            <div>Genre : {movie.Genre}</div>
            <div className='imageList'>
                {movie.Images.map(image => {
                    return <img style={imageStyle} src={image} />
                })}
            </div>
        </div>
    )
}

export default Card