import React from "react";
import { SlideShow, MovieSliderBox } from "../components";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <main className="block bg-carbon-black ml-1/6f h-full w-5/6 mt-24 mb-6">
      <SlideShow />
      <MovieSliderBox title="Trending" type="trending" />
      <MovieSliderBox title="Top Rated" type="top_rated" />
      <MovieSliderBox title="Action" type="action" />
      <MovieSliderBox title="Comedy" type="comedy" />
      <MovieSliderBox title="Drama" type="drama" />
    </main>
  );
};

export default Home;
