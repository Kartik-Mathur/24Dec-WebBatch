import React from 'react'
import './MovieCards.css';
import Card from '../card/Card';

const MovieCards = (props) => {
    const movie = props.movies;

    return (
        <div>MovieCards:
            <div className='movieCards'>
                {movie.map(item => {
                    return <Card movie={item} />
                })}
            </div>
        </div>
    )
}

// const MovieCards = (props) => {
//     const movie = props.movies;
//     let imageStyle = {
//         "height": "100px"
//     }

//     return (
//         <div>MovieCards:
//             <div className='movieCards'>
//                 {movie.map(item => {
//                     return <div className='movieCard'>
//                         <div>Actors : {item.Actors}</div>
//                         <div>Genre : {item.Genre}</div>
//                         <div className='imageList'>
//                             {item.Images.map(image => {
//                                 return <img style={imageStyle} src={image} />
//                             })}
//                         </div>
//                         {/* <div>Images : <img style={imageStyle} src={item.Images[0]} />
//                             <img style={{ "height": "100px" }} src={item.Images[1]} />
//                             <img style={{ "height": "100px" }} src={item.Images[2]} />
//                             <img style={{ "height": "100px" }} src={item.Images[3]} /></div> */}
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }

// const MovieCards = (props) => {
//     const movie = props.movies[0];
//     const movie1 = props.movies[1];
//     const movie2 = props.movies[2];
//     console.log(movie)
//     let imageStyle = {
//         "height":"100px"
//     }
//     return (
//         <div>MovieCards:
// <div>Actors : {movie.Actors}</div>
// <div>Genre : {movie.Genre}</div>
// <div>Images : <img style={imageStyle}  src={movie.Images[0]} />
// <img style={{"height": "100px"}} src={movie.Images[1]} />
// <img style={{"height": "100px"}} src={movie.Images[2]} />
// <img style={{"height": "100px"}} src={movie.Images[3]} /></div>

//             <div>Actors : {movie1.Actors}</div>
//             <div>Genre : {movie1.Genre}</div>
//             <div>Images : <img style={imageStyle}  src={movie1.Images[0]} />
//             <img style={{"height": "100px"}} src={movie1.Images[1]} />
//             <img style={{"height": "100px"}} src={movie1.Images[2]} />
//             <img style={{"height": "100px"}} src={movie1.Images[3]} /></div>


//             <div>Actors : {movie2.Actors}</div>
//             <div>Genre : {movie2.Genre}</div>
//             <div>Images : <img style={imageStyle}  src={movie2.Images[0]} />
//             <img style={{"height": "100px"}} src={movie2.Images[1]} />
//             <img style={{"height": "100px"}} src={movie2.Images[2]} />
//             <img style={{"height": "100px"}} src={movie2.Images[3]} /></div>

//             <div>Actors : {movie.Actors}</div>
//             <div>Genre : {movie.Genre}</div>
//             <div>Images : <img style={imageStyle}  src={movie.Images[0]} />
//             <img style={{"height": "100px"}} src={movie.Images[1]} />
//             <img style={{"height": "100px"}} src={movie.Images[2]} />
//             <img style={{"height": "100px"}} src={movie.Images[3]} /></div>
//         </div>
//     )
// }
// const MovieCards = ({movies}) => {
// console.log(movies)
//   return (
//     <div>MovieCards: </div>
//   )
// }

export default MovieCards