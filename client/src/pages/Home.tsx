import React from "react";
import { SlideShow, MovieSliderBox } from "../components";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <main className="block bg-carbon-black ml-1/6f h-full w-5/6 mt-24">
      <SlideShow />
      <MovieSliderBox title="Recently Viewed" />
      <MovieSliderBox title="Top Rated TV" />
    </main>
  );
};

export default Home;
