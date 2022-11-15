import React, { useEffect, useState, useRef } from "react";
import StarRating from "./StarRating";
import { MoviesContext } from "../context/moviesContext";
import { UserContext } from "../context/userContext";

interface ReviewModalProps {}

const ReviewModal: React.FC<ReviewModalProps> = ({}) => {
  const {
    review_model_open,
    review_form,
    handleReviewModal,
    handleReviewForm,
    title_media_type,
    title_id,
    handleReviewStarRating,
  } = React.useContext(MoviesContext)!;
  const { user_name, handleReviewSubmit } = React.useContext(UserContext)!;
  const modalRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as HTMLElement)
    ) {
      handleReviewModal(false);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    handleReviewModal(false);
    handleReviewSubmit({
      media_type: title_media_type,
      media_id: title_id,
      user_name: user_name,
      ...review_form,
    });

    console.log({
      media_type: title_media_type,
      media_id: title_id,
      user_name: user_name,
      ...review_form,
    });
  };
  if (review_model_open) {
    return (
      <div className="grid w-full h-full fixed top-0 left-0 bg-overlay-black z-[10] place-items-center">
        <div
          ref={modalRef}
          className="flex flex-col items-center justify-start bg-carbon-black drop-shadow-xl w-1/2 h-3/4 z-[100] rounded-md text-white font-sarabun font-normal text-lg"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-full items-center justify-center my-8 mx-8 gap-4"
          >
            <div className="flex flex-col w-full gap-6">
              <StarRating
                starCount="5"
                rating={review_form.rating}
                handleRating={handleReviewStarRating}
              />
              <div className="flex flex-col justify-start items-center mx-12 gap-1 mt-10">
                {/* <label htmlFor="" className="self-start text-base">
                Title
              </label> */}
                <input
                  name="title"
                  value={review_form.title}
                  onChange={(e) => handleReviewForm(e.target)}
                  type="text"
                  placeholder="Title"
                  className="flex w-full h-14 rounded-md bg-off-black p-3 border-none focus:outline outline-royal-purple placeholder:text-lg placeholder:text-light-grey"
                />
              </div>
              <div className="flex flex-col justify-start items-center mx-12 gap-1">
                {/* <label htmlFor="" className="self-start">
                Content
              </label> */}
                <textarea
                  name="content"
                  value={review_form.content}
                  onChange={(e) => handleReviewForm(e.target)}
                  placeholder="Review"
                  className="flex w-full h-56 rounded-md bg-off-black p-3 border-none focus:outline outline-royal-purple placeholder:text-lg placeholder:text-light-grey"
                />
              </div>
              <div className="flex flex-row justify-between items-center mx-12 gap-8">
                <button
                  type="submit"
                  className="rounded-md bg-royal-purple grow h-12"
                >
                  Submit
                </button>
                <button
                  onClick={() => handleReviewModal(false)}
                  className="rounded-md grow bg-off-black h-12"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return <></>;
};

export default ReviewModal;
