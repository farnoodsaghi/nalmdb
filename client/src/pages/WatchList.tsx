import React from "react";
import { Loading } from "../components";
import MovieGridList from "../components/MovieGridList";
import { UserContext } from "../context/userContext";

interface WatchListProps {}

const WatchList: React.FC<WatchListProps> = ({}) => {
  const { user_watch_list, user_watch_list_loading } =
    React.useContext(UserContext)!;

  if (user_watch_list_loading) {
    return <Loading />;
  }
  if (user_watch_list.length < 1) {
    return (
      <main className="flex flex-col justify-center items-center h-full ml-1/6f w-5/6 mt-24 mb-6 bg-carbon-black">
        <h3 className="text-light-grey font-sarabun text-xl font-light mt-24 text-center">
          Your list is empty! Browse some titles and start adding some.
        </h3>
      </main>
    );
  }
  return <MovieGridList list={user_watch_list} />;
};

export default WatchList;
