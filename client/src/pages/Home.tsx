import React from "react";
import { SlideShow, MovieSliderBox, SearchResults } from "../components";
import { MoviesContext } from "../context/moviesContext";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { active_topbar, search_input } = React.useContext(MoviesContext)!;

  if (search_input) {
    return <SearchResults />;
  }
  return (
    <main className="block bg-carbon-black ml-1/6f h-full w-5/6 mt-24 mb-6">
      <SlideShow />
      <MovieSliderBox title="Trending Now" type="trending" />
      <MovieSliderBox title="Top Rated" type="top_rated" />
      <MovieSliderBox
        title={active_topbar === 1 ? "Action" : "Action and Adventure"}
        type="action"
      />
      <MovieSliderBox title="Comedy" type="comedy" />
      <MovieSliderBox title="Crime" type="crime" />
      <MovieSliderBox title="Drama" type="drama" />
      <MovieSliderBox
        title={active_topbar === 1 ? "Science Fiction" : "Fantasy and Sci-Fi"}
        type="scifi"
      />
    </main>
  );
};

export default Home;
