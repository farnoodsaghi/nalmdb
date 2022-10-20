import React from "react";
import MovieCard from "./MovieCard";

interface MovieGridListProps {
  list: any[];
}

const MovieGridList: React.FC<MovieGridListProps> = ({ list }) => {
  return (
    <main className="h-full ml-1/6f w-5/6 mt-24 mb-6 bg-carbon-black">
      <div className="grid xl:gid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 auto-rows-[minmax(min-content,6rem)] gap-6 mx-12">
        {list.map((title) => {
          return <MovieCard key={title.id} {...title} />;
        })}
      </div>
    </main>
  );
};

export default MovieGridList;
