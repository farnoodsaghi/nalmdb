import React, { useState } from "react";
import { Icon } from "@iconify/react";
import defaultProfile from "../assets/default_profile_path.png";

interface ReviewsProps {
  user_name: string;
  rating: string;
  content: string;
}

const Reviews: React.FC<ReviewsProps> = ({ user_name, rating, content }) => {
  const [liked, setLiked] = useState(false);
  const [stars, setStars] = useState<number[]>(
    new Array(5).fill(0).map((_, index) => index + 1)
  );
  return (
    <section className="flex flex-col justify-center items-start gap-3 bg-off-black drop-shadow-md border-b-4 border-royal-purple p-5 mb-8 rounded-t-md">
      <div className="flex flex-row justify-between items-start gap-4">
        <img
          src={defaultProfile}
          alt="profile-pic"
          className="rounded-full w-12 h-12"
        />
        <div className="flex flex-col justify-center items-start gap-3 text-white">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-start items-center gap-1">
              {stars.map((id) => {
                return (
                  <Icon
                    icon="bi:star-fill"
                    className={`w-4 h-4 ${
                      id <= Number(rating)
                        ? "text-yellow-400"
                        : "text-light-grey"
                    }`}
                  ></Icon>
                );
              })}
            </div>
          </div>
          <p className="text-base font-light font-sarabun text-light-grey w-full">
            <span className="text-base font-light font-sarabun text-cyan-500 mr-2">
              {user_name}
            </span>
            {content}
          </p>
          <div
            onClick={() => setLiked((prev) => !prev)}
            className={`flex flex-row justify-between items-center gap-1.5 text-light-grey cursor-pointer rounded-full px-3 py-2 border border-darker-grey mt-3 drop-shadow-2xl ${
              liked && "bg-darker-grey"
            }`}
          >
            <span className="self-center mb-[3px]">
              <p
                className={`align-middle text-sm font-sarabun ${
                  liked && "text-white"
                }`}
              >
                1.2k
              </p>
            </span>
            <span className="self-center">
              {liked ? (
                <Icon
                  icon="ant-design:heart-filled"
                  className={`h-4 w-4 text-rose-500 scale-110`}
                />
              ) : (
                <Icon icon="ant-design:heart-outlined" className={`h-4 w-4`} />
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
