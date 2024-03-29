import axios from 'axios';
import React from 'react';
import Movie from  '../components/Movie';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    // console.log(movies.data.data.movies)
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // this.setState({movies:movies});
    // 앞의 movies는 state의 movies, 뒤의 movies는 axios를 통해 얻은 movies
    this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return(
      <section className="container">
        {isLoading
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          : <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
          </div>
          }
      </section>
    );
  }
}

export default Home;
