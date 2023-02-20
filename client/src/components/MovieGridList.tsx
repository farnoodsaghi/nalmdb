import React from "react";
import MovieCard from "./MovieCard";

interface MovieGridListProps {
  list: any[];
}

const MovieGridList: React.FC<MovieGridListProps> = ({ list }) => {
  return (
    <main className="h-full md:ml-[5.25rem] md:w-[calc(100%-5.25rem)] lg:ml-1/6f lg:w-5/6 mt-24 mb-6 bg-carbon-black">
      <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 auto-rows-[minmax(min-content,6rem)] gap-6 mx-12">
        {list.map((title) => {
          return <MovieCard key={title.id} {...title} />;
        })}
      </div>
    </main>
  );
};

export default MovieGridList;
