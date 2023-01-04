import React, { useEffect, useRef } from "react";
import { MoviesContext } from "../context/moviesContext";
import LoadingDots from "./LoadingDots";
import StarRating from "./StarRating";

interface RatingBoxProps {
  ratingBoxLocation: RatingBoxLocation;
}

interface RatingBoxLocation {
  left?: number;
  top?: number;
}

const RatingBox: React.FC<RatingBoxProps> = ({ ratingBoxLocation }) => {
  const {
    handleRatingBox,
    rating_box_open,
    rating_history_loading,
    rating_history,
    submitTitleRating,
  } = React.useContext(MoviesContext)!;

  const ratingBoxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const { left, top } = ratingBoxLocation;
    ratingBoxRef!.current!.style.left = `${left}px`;
    ratingBoxRef!.current!.style.top = `${top}px`;
  }, [ratingBoxLocation]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ratingBoxRef]);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      ratingBoxRef.current &&
      !ratingBoxRef.current.contains(e.target as HTMLElement)
    ) {
      handleRatingBox(false);
    }
  };

  return (
    <div
      ref={ratingBoxRef}
      className={`${
        !rating_box_open && "hidden"
      } flex flex-row justify-center items-center p-3 absolute z-50 bg-off-black rounded-md`}
    >
      {rating_history_loading ? (
        <LoadingDots />
      ) : (
        <StarRating
          starCount="5"
          rating={rating_history}
          handleRating={submitTitleRating}
          size="2"
          gap="2"
        />
      )}
    </div>
  );
};

export default RatingBox;
