import React from "react";
import { Icon } from "@iconify/react";
import { MoviesContext } from "../context/moviesContext";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const { search_input, handleSearch } = React.useContext(MoviesContext)!;
  return (
    <div className="flex flex-row justify-between items-center bg-off-black text-light-grey rounded-md mr-12">
      <form>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent p-3 border-none outline-none placeholder:text-lg placeholder:text-light-grey"
          value={search_input}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
      <Icon icon="eva:search-fill" className="w-6 h-6 self-center mr-3" />
    </div>
  );
};

export default Search;
