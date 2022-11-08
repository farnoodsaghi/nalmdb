import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface StarRatingProps {
  starCount: string;
  rating: string;
}

const StarRating: React.FC<StarRatingProps> = ({ starCount }) => {
  const createStarArray = (count: number): number[] => {
    return Array(count)
      .fill(0)
      .map((_, index) => index + 1);
  };
  const [stars, setStars] = useState<number[]>([]);
  const [fillStar, setFillStar] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    setStars(createStarArray(Number(starCount)));
  }, [starCount, rating, fillStar]);

  return (
    <div
      className="flex flex-row justify-center items-between gap-4"
      onMouseLeave={() => setFillStar(rating)}
    >
      {stars.map((id) => {
        return (
          <Icon
            key={id}
            icon="bi:star-fill"
            className={`w-8 h-8 text-light-grey ${
              id <= fillStar && "text-yellow-400"
            }`}
            onClick={() => {
              setFillStar(id);
              setRating(id);
            }}
            onMouseEnter={() => setFillStar(id)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
