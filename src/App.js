import React, { Component } from "react";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
const apiKey = "121486b23802e0b6735125ff1892f340";

class App extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=${apiKey}`;
    const result = await fetch(url).then(response => response.json());

    this.setState({ movies: result.results });
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
