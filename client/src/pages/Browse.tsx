import React from "react";
import { MoviesContext } from "../context/moviesContext";
import { Loading, MovieGridList, MovieCard, Submenu } from "../components";
import { SORT_VALUES, GENRE_VALUES } from "../utils/constants";

interface BrowseProps {}

const Browse: React.FC<BrowseProps> = ({}) => {
  const {
    browse_list,
    browse_loading,
    current_sort,
    current_genre,
    handleCurrentSort,
    handleCurrentGenre,
  } = React.useContext(MoviesContext)!;

  if (browse_loading) {
    return <Loading />;
  }
  return (
    <main className="h-full md:ml-[5.25rem] md:w-[calc(100%-5.25rem)] lg:ml-1/6f lg:w-5/6 mt-24 mb-6 bg-carbon-black">
      <div className="flex flex-row justify-between items-center mx-12 mb-6">
        <div className="flex flex-row justify-start items-baseline gap-2">
          <h5 className="font-dosis uppercase text-xs font-semibold text-light-grey">
            Genres:
          </h5>
          <Submenu
            values={GENRE_VALUES}
            current={current_genre}
            updateFunction={handleCurrentGenre}
          />
        </div>
        <div className="flex flex-row justify-start items-baseline gap-2">
          <h5 className="font-dosis uppercase text-xs font-semibold text-light-grey">
            Sort by:
          </h5>
          <Submenu
            values={SORT_VALUES}
            current={current_sort}
            updateFunction={handleCurrentSort}
          />
        </div>
      </div>
      <div className="grid xl:gid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 auto-rows-[minmax(min-content,6rem)] gap-6 mx-12">
        {browse_list.map((title) => {
          return <MovieCard key={title.id} {...title} />;
        })}
      </div>
    </main>
  );
};

export default Browse;
