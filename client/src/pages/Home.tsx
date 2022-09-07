import React from "react";
import { SlideShow, MovieSliderBox } from "../components";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <main className="block bg-carbon-black ml-1/6f mr-1/5f h-full w-19/30f mt-24 mx-8">
      <SlideShow />
      <MovieSliderBox title="Recently Viewed" />
      <MovieSliderBox title="Top Rated TV" />
    </main>
  );
};

export default Home;
