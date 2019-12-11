import React from 'react'
import './Movie.css'

const Movie = props =>{
    const apiKey = "121486b23802e0b6735125ff1892f340";
    return (
        <div className ='movie'>
            <img src ={`https://api.themoviedb.org/3/${props.movie.poster_path}?api_key=${apiKey}`} alt='poster'/>
            <h1>{props.movie.original_title}</h1>
            <p>{props.movie.overview}</p>
        </div>     
    )
}

export default Movie;