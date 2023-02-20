import React from "react";
import { ReviewPreview } from "../components";
import { UserContext } from "../context/userContext";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = ({}) => {
  const { user_reviews_list } = React.useContext(UserContext)!;
  return (
    <main className="h-full md:ml-[5.25rem] md:w-[calc(100%-5.25rem)] lg:ml-1/6f lg:w-5/6 mt-24 mb-6 bg-carbon-black">
      <div className="m-12">
        {user_reviews_list.map((review, index) => {
          return <ReviewPreview key={index} {...review} />;
        })}
      </div>
    </main>
  );
};

export default Reviews;
