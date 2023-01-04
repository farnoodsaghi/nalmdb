import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  CartListItem,
  CircleRating,
  GenreTag,
  Loading,
  ReviewModal,
  Reviews,
  TrailerModal,
  RatingBox,
} from "../components";
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

interface RatingBoxLocation {
  left?: number;
  top?: number;
}

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
    handleReviewModal,
    current_title_reviews,
    title_media_type,
    title_id,
    handleRatingBox,
    handleMediaType,
  } = React.useContext(MoviesContext)!;

  const {
    user_watch_list,
    addToWatchlist,
    removeFromWatchList,
    postWatchlistToApi,
  } = React.useContext(UserContext)!;

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
    vote_average,
  } = single_title!;

  const [castList, setCastList] = useState<any[]>([]);
  const [isCastExtended, setIsCastExtended] = useState<boolean>(false);
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const [ratingBoxLocation, setRatingBoxLocation] = useState<RatingBoxLocation>(
    {}
  );
  const [didMount, setDidMount] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRatingBox(true);
    const node = e.target as HTMLElement;
    const position = node!.getBoundingClientRect();
    console.log(node!.scrollTop);
    const coordinates = {
      left: position.left + window.scrollX,
      top: position.bottom + 10 + window.scrollY,
    };
    console.log(window.scrollX);
    setRatingBoxLocation(coordinates);
  };

  const toggleSeeMoreCast = () => {
    setIsCastExtended((prev) => !prev);
  };

  const handleAddToWatchlist = () => {
    addToWatchlist(single_title);
    postWatchlistToApi(title_media_type!, Number(title_id!), true);
  };

  const handleRemoveFromWatchlist = () => {
    removeFromWatchList(single_title);
    postWatchlistToApi(title_media_type!, Number(title_id!), false);
  };

  useEffect(() => {
    handleTitleId(id!);
    handleMediaType(localStorage.getItem("media_type"));
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

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
    } else {
      handleMediaType(first_air_date ? "tv" : "movie");
    }
  }, [single_title]);

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
            <div className="flex flex-col w-1/4 justify-start items-start">
              <div className="flex justify-center w-[18rem] items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 aspect-[1/1.5]">
                <img
                  className="aspect-[1/1.5] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title || name}
                />
              </div>
              <div className="self-center mt-10">
                <CircleRating rating={vote_average} />
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
                <button
                  onClick={() => handleReviewModal(true)}
                  className="flex justify-center items-center rounded-full w-36 h-12 text-normal font-normal font-sarabun text-white bg-royal-purple"
                >
                  Write Review
                </button>
                <button
                  onClick={() => {
                    user_watch_list.some((title) => {
                      return (
                        // JSON.stringify(title) === JSON.stringify(single_title)
                        title.id === single_title.id &&
                        title.poster_path === single_title.poster_path
                      );
                    })
                      ? handleRemoveFromWatchlist()
                      : handleAddToWatchlist();
                  }}
                  className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-light-grey hover:backdrop-brightness-200 hover:border-white"
                >
                  {user_watch_list.some((title) => {
                    return (
                      // JSON.stringify(title) === JSON.stringify(single_title)
                      title.id === single_title.id &&
                      title.poster_path === single_title.poster_path
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
                <button
                  onClick={handleClick}
                  className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-light-grey hover:backdrop-brightness-200 hover:border-white"
                >
                  <Icon
                    icon="ion:star-outline"
                    className="w-6 h-6 text-white m-auto"
                  />
                </button>
                <button
                  onClick={() => setShowTrailer(true)}
                  className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-light-grey hover:backdrop-brightness-200 hover:border-white"
                >
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
              <div className="mt-10 mb-5 w-full">
                <div className="flex flex-row justify-start items-center gap-1 mb-10">
                  <h1 className="text-2xl font-semibold font-sarabun text-white">
                    Reviews
                  </h1>
                  {/* <p className="text-sm font-normal font-sarabun text-light-grey">
                    115
                  </p>
                  <Icon
                    icon="akar-icons:chevron-right"
                    className="text-white w-7 h-7 my-auto"
                  /> */}
                </div>
                {current_title_reviews.length > 0 ? (
                  current_title_reviews.map((review: any, index: number) => {
                    return <Reviews key={index} {...review} />;
                  })
                ) : (
                  <h5 className="text-normal font-light font-sarabun text-light-grey text-center -mt-5">
                    No reviews have been submitted for this title yet.
                  </h5>
                )}
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
      <ReviewModal />
      <TrailerModal showTrailer={showTrailer} setShowTrailer={setShowTrailer} />
      <RatingBox ratingBoxLocation={ratingBoxLocation} />
    </main>
  );
};

export default SingleTitle;
