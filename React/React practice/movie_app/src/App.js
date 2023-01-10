import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    // console.log(movies.data.data.movies)
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(movies)
    // this.setState({movies:movies});
    // 앞의 movies는 state의 movies, 뒤의 movies는 axios를 통해 얻은 movies
    this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
}

export default App;
