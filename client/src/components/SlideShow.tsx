import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { MoviesContext } from "../context/moviesContext";
import { Link } from "react-router-dom";

interface SlideShowProps {}

interface Movie {
  title?: string;
  name?: string;
  backdrop_path?: string;
}

const SlideShow: React.FC<SlideShowProps> = ({}) => {
  const { latest_loading, latest_list, latest_error } =
    React.useContext(MoviesContext)!;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [current, setCurrent] = useState<Movie>({});
  const [position, setPosition] = useState<number>(0);
  const slideShowRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev < latest_list.length - 1) {
        return prev + 1;
      }
      return 0;
    });
    setPosition((prev) => {
      if (prev > (latest_list.length - 1) * -100) {
        return prev - 100;
      } else {
        return 0;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return latest_list.length - 1;
      }
      return prev - 1;
    });
    setPosition((prev) => {
      if (prev === 0) {
        return (latest_list.length - 1) * -100;
      } else {
        return prev + 100;
      }
    });
  };

  useEffect(() => {
    slideShowRef.current!.style!.transform = `translateX(${position}%)`;
  }, [position]);

  useEffect(() => {
    console.log(latest_list.length, currentIndex);
    setCurrent(latest_list[currentIndex]);
  }, [currentIndex, latest_list]);

  return (
    <div className="flex justify-start items-center w-[calc(100%-6rem)] bg-dark-grey flex-1 mx-auto rounded-md mt-6 relative group aspect-[21/9] object-cover overflow-hidden">
      <div className="flex flex-row transition-transform" ref={slideShowRef}>
        {latest_list.map((movie, index) => {
          return (
            <div key={index} className="flex min-w-full min-h-full">
              <Link to={`/title/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                  className="w-full h-full aspect-[21/9] object-cover rounded-md"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        className="invisible group-hover:visible bg-light-grey text-white rounded-full bg-opacity-60 w-10 h-10 absolute left-8 z-10 hover:backdrop-brightness-50"
      >
        <Icon
          icon="akar-icons:chevron-left"
          className="w-5 h-5 text-white m-auto"
        />
      </button>
      <button
        onClick={handleNext}
        className="invisible group-hover:visible bg-light-grey text-white rounded-full bg-opacity-60 w-10 h-10 absolute right-8 z-10 hover:backdrop-brightness-50"
      >
        <Icon
          icon="akar-icons:chevron-right"
          className="w-5 h-5 text-white m-auto"
        />
      </button>
      <div className="flex flex-col w-3/5 absolute bottom-14 left-20 whitespace-normal">
        <h3 className="text-white font-sarabun text-5xl font-semibold drop-shadow-xl text-shadow-lg">
          {current?.title || current?.name}
        </h3>
        <div className="flex flex-row items-center gap-1.5 z-10 mt-8">
          <button className="bg-royal-purple text-white rounded-md font-normal text-lg w-28 h-12 p-2 bg-opacity-80 hover:backdrop-brightness-50">
            Review
          </button>
          <button className="bg-light-grey text-white rounded-md bg-opacity-80 w-12 h-12 p-2 hover:backdrop-brightness-50">
            <Icon icon="eva:plus-fill" className="w-6 h-6 text-white m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
