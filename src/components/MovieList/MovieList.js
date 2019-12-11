import React, { Component } from 'react';
import Movie from '../Movie/Movie'

class MovieList extends Component {
    
    
    render() { 
        return <div>
            {this.props.movies.map(movie => {
                return <Movie key ={movie.id} movie={movie}/>
            })}
        </div>
       
    }
}
 
export default MovieList;