import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { Icon } from "@iconify/react";

interface MovieSliderProps {}

const MovieSlider: React.FC<MovieSliderProps> = ({}) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const scrollLeft = (): void => {
    const slider = sliderRef?.current?.getBoundingClientRect();
    const sliderWidth = slider!.right - slider!.left;
    // const sliderWidth = sliderRef.current!.clientWidth;
    const maxWidth =
      sliderRef.current!.scrollWidth - sliderRef.current!.clientWidth;
    sliderRef.current!.scrollLeft = sliderRef.current!.scrollLeft - sliderWidth;
    if (sliderRef.current!.scrollLeft === 0) {
      sliderRef.current!.scrollLeft = maxWidth;
    }
  };

  const scrollRight = (): void => {
    const slider = sliderRef?.current?.getBoundingClientRect();
    const sliderWidth = slider!.right - slider!.left;
    // const sliderWidth = sliderRef.current!.clientWidth;
    const maxWidth =
      sliderRef.current!.scrollWidth - sliderRef.current!.clientWidth;
    sliderRef.current!.scrollLeft = sliderRef.current!.scrollLeft + sliderWidth;
    if (sliderRef.current!.scrollLeft === maxWidth) {
      sliderRef.current!.scrollLeft = 0;
    }
  };

  return (
    <div className="flex w-full relative mt-4 mx-auto group">
      <button
        onClick={scrollLeft}
        className="invisible group-hover:visible bg-light-grey text-white rounded-full w-8 h-8 absolute -left-4 z-10 hover:scale-110 self-center drop-shadow-lg"
      >
        <Icon
          icon="akar-icons:chevron-left"
          className="w-4 h-4 text-white m-auto"
        />
      </button>
      <div
        ref={sliderRef}
        className="grid grid-flow-col xl:auto-cols-[calc(20%-0.6rem)] lg:auto-cols-[calc(25%-0.5625rem)] md:auto-cols-[calc(33.33%-0.5rem)] sm:auto-cols-[calc(50%-0.375rem)] auto-rows-[minmax(min-content,6rem)] width-full gap-3 overflow-auto no-scrollbar relative scroll-smooth snap-x"
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <button
        onClick={scrollRight}
        className="invisible group-hover:visible bg-light-grey text-white rounded-full w-8 h-8 absolute -right-4 z-10 hover:scale-110 self-center drop-shadow-lg"
      >
        <Icon
          icon="akar-icons:chevron-right"
          className="w-4 h-4 text-white m-auto"
        />
      </button>
    </div>
  );
};

export default MovieSlider;
