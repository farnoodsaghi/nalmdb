import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import defaultProfile from "../assets/default_profile_path.png";
import { UserContext } from "../context/userContext";
import axios from "../axios";

interface ReviewPreviewProps {
  rating: number;
  user_name: string;
  content: string;
  review_id: string;
  user_avatar: string;
  media_id: string;
  media_type: string;
}
interface SubmenuLocation {
  left?: number;
  top?: number;
}

const ReviewPreview: React.FC<ReviewPreviewProps> = ({
  rating,
  content,
  user_name,
  user_avatar,
  review_id,
  media_type,
  media_id,
}) => {
  const [stars, setStars] = useState<number[]>(
    new Array(5).fill(0).map((_, index) => index + 1)
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const submenuRef = useRef<HTMLInputElement | null>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<Boolean>(false);
  const [submenuLocation, setSubmenuLocation] = useState<SubmenuLocation>({});
  const { removeFromReviewList } = React.useContext(UserContext)!;
  const [singleTitleLoading, setSingleTitleLoading] = useState(true);
  const [singleTitle, setSingleTitle] = useState<any>({});

  const fetchSingleTitleById = async (id: string, mediaType: string) => {
    setSingleTitleLoading(true);
    try {
      const response = await axios.get(
        `/${mediaType}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
      );
      setSingleTitle(response!.data);
      setSingleTitleLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleTitleById(media_id, media_type);
    console.log(singleTitle);
  }, []);

  useEffect(() => {
    const { left, top } = submenuLocation;
    submenuRef!.current!.style.left = `${left}px`;
    submenuRef!.current!.style.top = `${top}px`;
  }, [submenuLocation]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuRef]);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(e.target as HTMLElement)
    ) {
      setIsSubmenuOpen(false);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsSubmenuOpen(true);
    const node = e.target as HTMLElement;
    const position = node!.getBoundingClientRect();
    const coordinates = {
      left: position.left,
      top: position.bottom + 3,
    };
    setSubmenuLocation(coordinates);
  };
  return (
    <div
      className={`${
        !isExpanded && "grid-flow-col"
      } grid grid-cols-9 bg-off-black rounded-md py-4 px-8 mb-4`}
    >
      <div className="flex flex-row justify-start items-center col-span-3 gap-4 grow">
        <img
          src={user_avatar || defaultProfile}
          alt="profile-pic"
          className="rounded-full w-12 h-12"
        />
        <div className="flex flex-col justify-between items-start gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
          <h4 className="text-base font-semibold font-sarabun text-light-grey">
            {user_name}
          </h4>
          {!isExpanded && (
            <p className="text-base font-light font-sarabun text-light-grey w-full">
              {content}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 col-span-2">
        <img
          src={`https://image.tmdb.org/t/p/original/${singleTitle.poster_path}`}
          alt="movie-poster"
          className="w-10 aspect-[1:1.33] rounded"
        />
        {/* <div className="flex flex-col justify-between items-start">
          <h5 className="text-base font-semibold font-sarabun text-light-grey">
            The Joker
          </h5>
          <p className="text-sm font-light font-sarabun text-light-grey w-full mt-auto">
            2019
          </p>
        </div> */}
      </div>
      <div className="flex flex-row justify-center items-center col-span-2">
        <div className="flex flex-row justify-start items-center gap-1">
          <h5 className="text-2xl font-normal font-sarabun text-light-grey mr-3">
            {rating.toFixed(1)}
          </h5>
          {stars.map((id: number) => {
            return (
              <Icon
                icon="bi:star-fill"
                className={`w-4 h-4 ${
                  id <= Number(rating) ? "text-yellow-400" : "text-light-grey"
                }`}
              ></Icon>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-end items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-row justify-center items-center h-12 bg-darker-grey rounded text-base font-normal font-sarabun text-white px-4 gap-0.5"
        >
          {isExpanded ? "Collapse" : "Expand"}
          {isExpanded ? (
            <Icon icon="ion:chevron-up" className="w-4 h-4" />
          ) : (
            <Icon icon="ion:chevron-down" className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="flex flex-row justify-end items-center">
        <button
          onClick={handleClick}
          className="flex flex-row justify-center items-center w-12 h-12 bg-darker-grey rounded text-base font-light font-sarabun text-white"
        >
          <Icon icon="bi:three-dots" className="w-4 h-4" />
        </button>
        <div
          className={`${
            !isSubmenuOpen && "hidden"
          } flex flex-col justify-center items-start gap-3 z-50 absolute bg-darker-grey p-4 w-max rounded-md drop-shadow-2xl`}
          ref={submenuRef}
        >
          <p
            onClick={() => removeFromReviewList(review_id)}
            className="font-sarabun text-white font-medium text-sm cursor-pointer"
          >
            Delete
          </p>
        </div>
      </div>
      {isExpanded && (
        <div className="flex flex-row justify-start col-span-9 mt-8">
          <p className="text-base font-light font-sarabun text-light-grey w-full">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewPreview;
