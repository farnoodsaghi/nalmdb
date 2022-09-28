const requests = {
  fetchTrendingMovies: `/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTrendingTV: `/trending/tv/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=28`,
  fetchActionTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10759`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`,
  fetchComedyTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`,
  fetchDramaMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=18`,
  fetchDramaTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=18`,
};

export default requests;
