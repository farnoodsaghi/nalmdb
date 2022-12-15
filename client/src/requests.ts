const requests = {
  fetchLatestMovies: `/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchLatestTV: `/tv/on_the_air?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTrendingTV: `/trending/tv/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=28`,
  fetchActionTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10759`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`,
  fetchComedyTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=80`,
  fetchCrimeTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=80`,
  fetchDramaMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=18`,
  fetchDramaTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=18`,
  fetchScifiMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=878`,
  fetchScifiTV: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10765`,
  fetchSearchResults: `/search/multi?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=`,
  fetchRequestToken: `/authentication/token/new?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
  fetchAccountInfo: `/account?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
};

export default requests;
