import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { Icon } from "@iconify/react";

interface MovieSliderProps {
  contentList: any[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ contentList }) => {
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
        className="invisible group-hover:visible bg-light-grey text-white rounded-full w-10 h-10 absolute -left-4 z-10 hover:scale-110 self-center drop-shadow-lg"
      >
        <Icon
          icon="akar-icons:chevron-left"
          className="w-5 h-5 text-white m-auto"
        />
      </button>
      <div
        ref={sliderRef}
        className="grid grid-flow-col xl:auto-cols-7p lg:auto-cols-6p md:auto-cols-5p sm:auto-cols-4p auto-rows-[minmax(min-content,6rem)] width-full gap-6 overflow-auto no-scrollbar relative scroll-smooth snap-x"
      >
        {contentList.map((title) => {
          return <MovieCard key={title.id} {...title} />;
        })}
      </div>
      <button
        onClick={scrollRight}
        className="invisible group-hover:visible bg-light-grey text-white rounded-full w-10 h-10 absolute -right-4 z-10 hover:scale-110 self-center drop-shadow-lg"
      >
        <Icon
          icon="akar-icons:chevron-right"
          className="w-5 h-5 text-white m-auto"
        />
      </button>
    </div>
  );
};

export default MovieSlider;
