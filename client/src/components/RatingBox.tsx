import React, { useState, useEffect, useRef } from "react";
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
    handleTitleRating,
    handleRatingBox,
    current_rating,
    rating_box_open,
    title_media_type,
    title_id,
    rated_movies_list,
    rated_tv_list,
    rated_movies_loading,
    rated_tv_loading,
  } = React.useContext(MoviesContext)!;

  const ratingBoxRef = useRef<HTMLInputElement | null>(null);
  const [ratingHistory, setRatingHistory] = useState<any[]>([]);

  useEffect(() => {
    const { left, top } = ratingBoxLocation;
    ratingBoxRef!.current!.style.left = `${left}px`;
    ratingBoxRef!.current!.style.top = `${top}px`;
  }, [ratingBoxLocation]);

  useEffect(() => {
    if (title_id && title_media_type) {
      setRatingHistory(
        title_media_type === "movie"
          ? rated_movies_list.filter((title) => title.id === Number(title_id))
          : rated_movies_list.filter((title) => title.id === Number(title_id))
      );
    }
  }, [rated_tv_list, rated_movies_list, title_id, title_media_type]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ratingBoxRef]);

  useEffect(() => {
    if (ratingHistory.length > 0) {
      handleTitleRating(ratingHistory[0].rating / 2);
    }
  }, [ratingHistory]);

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
      {rated_movies_loading || rated_tv_loading ? (
        <LoadingDots />
      ) : (
        <StarRating
          starCount="5"
          rating={current_rating}
          handleRating={handleTitleRating}
          size="2"
          gap="2"
        />
      )}
    </div>
  );
};

export default RatingBox;
