import React from "react";

interface CircleRatingProps {
  rating: number;
}

const CircleRating: React.FC<CircleRatingProps> = ({ rating }) => {
  return (
    <div className="group relative w-40 h-40">
      <svg className="relative w-40 h-40 rotate-[270deg] drop-shadow-lg group-hover:scale-110">
        <circle
          cx="70"
          cy="70"
          r="70"
          className="w-40 h-40 fill-none stroke-black translate-x-[5px] translate-y-[5px] circle-dash circle-outline"
        ></circle>
        <circle
          cx="70"
          cy="70"
          r="70"
          className="w-40 h-40 fill-none stroke-black translate-x-[5px] translate-y-[5px] circle-dash circle-bar"
          style={{
            strokeDashoffset: `calc(440 - (440 * ${rating * 10}) / 100)`,
          }}
        ></circle>
      </svg>
      <div className="absolute top-0 left-0 flex items-center justify-center w-40 h-40">
        <h4 className="text-normal font-light font-sarabun text-white text-5xl group-hover:text-6xl">
          {Math.round(rating * 10)}
          <span className="text-base"> %</span>
        </h4>
      </div>
    </div>
  );
};

export default CircleRating;
