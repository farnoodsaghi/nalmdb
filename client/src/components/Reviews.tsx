import React, { useState } from "react";
import { Icon } from "@iconify/react";
import defaultProfile from "../assets/default_profile_path.png";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = ({}) => {
  const [liked, setLiked] = useState(false);
  return (
    // <section className="flex flex-col justify-center items-start gap-3">
    //   <div className="flex flex-row justify-between items-start gap-4">
    //     <img
    //       src={defaultProfile}
    //       alt="profile-pic"
    //       className="rounded-full w-14 h-14"
    //     />
    //     <div className="flex flex-col justify-center items-start gap-1 text-white">
    //       <h4 className="text-base font-semibold font-sarabun text-white">
    //         Greg Smith
    //       </h4>
    //       <p className="flex flex-row text-sm font-medium font-sarabun text-light-grey gap-2">
    //         <div className="flex flex-row justify-start items-center gap-1">
    //           <Icon
    //             icon="bi:star-fill"
    //             className="w-5 h-5 text-yellow-400"
    //           ></Icon>
    //           <Icon
    //             icon="bi:star-fill"
    //             className="w-5 h-5 text-yellow-400"
    //           ></Icon>
    //           <Icon
    //             icon="bi:star-fill"
    //             className="w-5 h-5 text-yellow-400"
    //           ></Icon>
    //           <Icon
    //             icon="bi:star-fill"
    //             className="w-5 h-5 text-yellow-400"
    //           ></Icon>
    //           <Icon
    //             icon="bi:star-fill"
    //             className="w-5 h-5 text-yellow-400"
    //           ></Icon>
    //         </div>
    //         posted 14h ago
    //       </p>
    //       <p className="text-base font-normal font-sarabun text-white mt-3">
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
    //         ipsum doloremque at neque ea ducimus? Consectetur doloremque totam,
    //         nulla, vero accusantium sequi, nesciunt officiis facere aliquam odio
    //         nobis eum commodi?"
    //       </p>
    //     </div>
    //     <div
    //       onClick={() => setLiked((prev) => !prev)}
    //       className="flex flex-row justify-between gap-1 items-center text-light-grey cursor-pointer"
    //     >
    //       {liked ? (
    //         <Icon
    //           icon="ant-design:heart-filled"
    //           className={`h-5 w-5 text-rose-700 scale-110`}
    //         />
    //       ) : (
    //         <Icon icon="ant-design:heart-outlined" className={`h-5 w-5`} />
    //       )}
    //       <p className="font-sarabun">1.2k</p>
    //     </div>
    //   </div>
    //   <hr className="flex self-center w-full border-t border-dark-grey my-5" />
    // </section>
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
              <Icon
                icon="bi:star-fill"
                className="w-4 h-4 text-yellow-400"
              ></Icon>
              <Icon
                icon="bi:star-fill"
                className="w-4 h-4 text-yellow-400"
              ></Icon>
              <Icon
                icon="bi:star-fill"
                className="w-4 h-4 text-yellow-400"
              ></Icon>
              <Icon
                icon="bi:star-fill"
                className="w-4 h-4 text-yellow-400"
              ></Icon>
              <Icon
                icon="bi:star-fill"
                className="w-4 h-4 text-yellow-400"
              ></Icon>
            </div>
          </div>
          <p className="text-base font-light font-sarabun text-light-grey w-full">
            <span className="text-base font-light font-sarabun text-cyan-500 mr-2">
              Greg Smith
            </span>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            ipsum doloremque at neque ea ducimus? Consectetur doloremque totam,
            nulla, vero accusantium sequi, nesciunt officiis facere aliquam odio
            nobis eum commodi?"
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
