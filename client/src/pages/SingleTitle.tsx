import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CartListItem, GenreTag, Loading } from "../components";
import { MoviesContext } from "../context/moviesContext";
import {
  formatMovieYear,
  formatTVYear,
  formatTime,
  areObjectsEqual,
  isEqual,
} from "../utils/helpers";
import { UserContext } from "../context/userContext";

interface SingleTitleProps {}

const SingleTitle: React.FC<SingleTitleProps> = ({}) => {
  let { id } = useParams();
  const {
    single_title_loading,
    single_title_error,
    single_title,
    cast_loading,
    cast_list,
    cast_error,
    handleTitleId,
  } = React.useContext(MoviesContext)!;

  const { user_watch_list, addToWatchlist, removeFromWatchList } =
    React.useContext(UserContext)!;

  const {
    backdrop_path,
    poster_path,
    original_title,
    title,
    original_name,
    name,
    overview,
    genres,
    runtime,
    production_countries,
    last_episode_to_air,
    first_air_date,
    last_air_date,
    release_date,
    status,
    number_of_seasons,
    number_of_episodes,
  } = single_title!;

  const [castList, setCastList] = useState<any[]>([]);
  const [isCastExtended, setIsCastExtended] = useState<boolean>(false);

  const toggleSeeMoreCast = () => {
    setIsCastExtended((prev) => !prev);
  };

  useEffect(() => {
    handleTitleId(id!);
  }, [id]);

  useEffect(() => {
    setCastList(cast_list.slice(0, 5));
  }, [cast_list]);

  useEffect(() => {
    if (isCastExtended) {
      setCastList(cast_list);
    } else {
      setCastList(cast_list.slice(0, 5));
    }
  }, [isCastExtended]);

  if (single_title_loading) {
    return <Loading />;
  }

  return (
    <main className="block bg-carbon-black w-full h-full relative mb-10">
      <div className="flex w-full aspect-[21/9] object-cover">
        <img
          className="aspect-[21/9] object-cover"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title || name}
        />
        <div className="bottom-fade w-full h-36 absolute bottom-0">
          <div className="flex flex-row gap-16 mx-16 justify-start">
            <div className="flex w-1/4 justify-start items-start">
              <div className="flex justify-center w-[18rem] items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 aspect-[1/1.5]">
                <img
                  className="aspect-[1/1.5] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title || name}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 justify-start items-start mt-14">
              <h2 className="text-5xl font-semibold font-sarabun text-white">
                {title || name}
              </h2>
              <p className="text-normal font-light font-sarabun text-light-grey">
                Original Title: {original_title || original_name}
              </p>
              <p className="text-normal font-light font-sarabun text-white mt-2">
                {status === "Released" ? (
                  <>
                    <span>{String(formatMovieYear(release_date))}</span>
                    <span className="mx-3">•</span>
                    <span>{String(formatTime(runtime!))}</span>
                  </>
                ) : (
                  <>
                    <span>
                      {`Series ${
                        status === "Ended"
                          ? formatTVYear(first_air_date!, last_air_date!)
                          : formatTVYear(first_air_date!)
                      }`}
                    </span>
                    <span className="mx-3">•</span>
                    <span>{number_of_seasons} Seasons</span>
                    <span className="mx-3">•</span>
                    <span>{number_of_episodes} Episodes</span>
                  </>
                )}
              </p>
              <div className="flex flex-row items-center gap-3 my-6">
                <button className="flex justify-center items-center rounded-full w-36 h-12 text-normal font-normal font-sarabun text-white bg-royal-purple">
                  Write Review
                </button>
                <button
                  onClick={() => {
                    user_watch_list.some((title) => {
                      return (
                        JSON.stringify(title) === JSON.stringify(single_title)
                      );
                    })
                      ? removeFromWatchList(single_title)
                      : addToWatchlist(single_title);
                  }}
                  className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-light-grey hover:backdrop-brightness-200 hover:border-white"
                >
                  {user_watch_list.some((title) => {
                    return (
                      JSON.stringify(title) === JSON.stringify(single_title)
                    );
                  }) ? (
                    <Icon
                      icon="charm:tick"
                      className="w-6 h-6 text-white m-auto"
                    />
                  ) : (
                    <Icon
                      icon="eva:plus-fill"
                      className="w-6 h-6 text-white m-auto"
                    />
                  )}
                </button>
                <button className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-light-grey hover:backdrop-brightness-200 hover:border-white">
                  <Icon
                    icon="ion:play-outline"
                    className="w-6 h-6 text-white m-auto"
                  />
                </button>
              </div>
              <p className="text-normal font-light font-sarabun text-light-grey">
                {overview}
              </p>
              <div className="flex flex-col mt-8 gap-2 w-full">
                <h4 className="text-2xl font-semibold font-sarabun text-white">
                  Details
                </h4>
                <div className="flex flex-col justify-center items-start gap-1.5 mt-2 w-full">
                  <article className="flex flex-col gap-3 justify-center items-start w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex items-center w-1/4">
                        <p className="text-normal font-light font-sarabun text-white">
                          Genres
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-1.5 w-3/4 ml-4">
                        {genres &&
                          genres.map((genre) => {
                            return (
                              <GenreTag key={genre.id} label={genre.name} />
                            );
                          })}
                      </div>
                    </div>
                    <div className="flex justify-start items-center h-px w-full bg-darker-grey" />
                  </article>
                  <article className="flex flex-col gap-3 justify-center items-start w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex items-center w-1/4">
                        <p className="text-normal font-light font-sarabun text-white">
                          Country of Origin
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-1.5 w-3/4 ml-4">
                        {production_countries &&
                          production_countries.map((country, index) => {
                            return (
                              <p
                                key={index}
                                className="text-normal font-light font-sarabun text-light-grey"
                              >
                                {country.name}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                    <div className="flex justify-start items-center h-px w-full bg-darker-grey" />
                  </article>
                  <article className="flex flex-col gap-3 justify-center items-start w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex items-center w-1/4">
                        <p className="text-normal font-light font-sarabun text-white">
                          Runtime
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-1.5 w-3/4 ml-4">
                        <p className="text-normal font-light font-sarabun text-light-grey">
                          {runtime || last_episode_to_air?.runtime} min
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center h-px w-full bg-darker-grey" />
                  </article>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-1/4 mt-14 mr-16 overflow-hidden">
              <h4 className="text-2xl font-semibold font-sarabun text-white">
                Cast and Crew
              </h4>
              <div className="flex flex-col gap-4 mt-8">
                {castList.map((actor: any) => {
                  return <CartListItem key={actor.id} {...actor} />;
                })}
              </div>
              <button
                onClick={toggleSeeMoreCast}
                className="flex justify-start items-center gap-2 bg-transparent text-indigo-400 text-normal font-medium font-sarabun mt-6"
              >
                {isCastExtended ? "Show less" : "Show all"}
                {isCastExtended ? (
                  <Icon
                    icon="akar-icons:circle-chevron-left"
                    className="w-5 h-5 text-indigo-400 m-auto"
                  />
                ) : (
                  <Icon
                    icon="akar-icons:circle-chevron-right"
                    className="w-5 h-5 text-indigo-400 m-auto"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleTitle;
