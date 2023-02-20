import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { MoviesContext } from "../context/moviesContext";

interface StarRatingProps {
  starCount: string;
  rating: number;
  handleRating: (rating: number) => void;
  size?: string;
  gap?: string;
  enableHistory?: boolean | undefined;
}

const StarRating: React.FC<StarRatingProps> = ({
  starCount,
  rating,
  handleRating,
  size,
  gap,
  enableHistory,
}) => {
  const createStarArray = (count: number): number[] => {
    return Array(count)
      .fill(0)
      .map((_, index) => index + 1);
  };
  const [stars, setStars] = useState<number[]>([]);
  const [fillStar, setFillStar] = useState<number>(0);
  const { rating_history, rating_history_loading, title_id } =
    React.useContext(MoviesContext)!;

  useEffect(() => {
    setStars(createStarArray(Number(starCount)));
  }, []);

  useEffect(() => {
    if (enableHistory) {
      setFillStar(Number(rating_history));
    }
  }, [rating_history, enableHistory]);

  return (
    <div
      className={`flex flex-row justify-center items-between ${
        gap ? `gap-${gap}` : "gap-4"
      }`}
      onMouseLeave={() => setFillStar(rating)}
    >
      {stars.map((id) => {
        return (
          <Icon
            key={id}
            icon="bi:star-fill"
            className={`${
              size ? `w-${size} h-${size}` : "w-8 h-8"
            } text-light-grey ${id <= fillStar && "text-yellow-400"}`}
            onClick={() => {
              // setFillStar(id);
              handleRating(id);
            }}
            onMouseEnter={() => setFillStar(id)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
