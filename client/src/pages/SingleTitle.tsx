import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CartListItem, GenreTag, Loading } from "../components";
import { MoviesContext } from "../context/moviesContext";

interface SingleTitleProps {}

const SingleTitle: React.FC<SingleTitleProps> = ({}) => {
  let { id } = useParams();
  const { single_title_loading, handleTitleId } =
    React.useContext(MoviesContext)!;

  useEffect(() => {
    handleTitleId(id!);
  }, [id]);

  if (single_title_loading) {
    return <Loading />;
  }

  return (
    <main className="block bg-carbon-black w-full h-full relative mb-10">
      <div className="flex w-full aspect-[21/9] object-cover">
        <img
          className="aspect-[21/9] object-cover"
          src="https://m.media-amazon.com/images/M/MV5BZmI2MzU3NmMtNGVmMS00YzczLWIzMGQtNDU0MjcyNTYzODEyXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg"
          alt="backdrop"
        />
        <div className="bottom-fade w-full h-36 absolute bottom-0">
          <div className="flex flex-row gap-16 mx-16 justify-start">
            <div className="flex w-1/4 justify-start items-start">
              <div className="flex justify-center w-[18rem] items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 aspect-[1/1.5]">
                <img
                  className="aspect-[1/1.5] rounded-md"
                  src="https://www.themoviedb.org/t/p/w1280/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
                  alt="poster"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-1/2 justify-start items-start mt-14">
              <h2 className="text-5xl font-semibold font-sarabun text-white">
                Money Heist
              </h2>
              <p className="text-normal font-light font-sarabun text-light-grey">
                Original title: La Casa De Papel
              </p>
              <p className="text-normal font-light font-sarabun text-white mt-2">
                <span>Series (2017-2021)</span>
                <span className="mx-3">•</span>
                <span>5 Seasons</span>
                <span className="mx-3">•</span>
                <span>48 Episodes</span>
              </p>
              <div className="flex flex-row items-center gap-3 my-6">
                <button className="flex justify-center items-center rounded-full w-36 h-12 text-normal font-normal font-sarabun text-white bg-royal-purple">
                  Write Review
                </button>
                <button className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-white">
                  <Icon
                    icon="eva:plus-fill"
                    className="w-6 h-6 text-white m-auto"
                  />
                </button>
                <button className="flex justify-center items-center rounded-full w-12 h-12 text-white bg-transparent border-[1px] border-white">
                  <Icon
                    icon="ion:play-outline"
                    className="w-6 h-6 text-white m-auto"
                  />
                </button>
              </div>
              <p className="text-normal font-light font-sarabun text-light-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti possimus at dignissimos nihil quas nobis quia vitae,
                eos autem labore, aperiam recusandae exercitationem nisi quasi
                earum alias distinctio officia molestias, eligendi hic excepturi
                explicabo omnis! Dignissimos consequuntur, debitis vero
                excepturi eveniet in corrupti tempore repellendus dolor
                asperiores sunt perferendis blanditiis. Quas molestiae
                blanditiis exercitationem qui deserunt esse culpa beatae est
                quam odio sint atque numquam, accusantium dolorum.
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
                        <GenreTag label="Action" />
                        <GenreTag label="Crime" />
                        <GenreTag label="Drama" />
                        <GenreTag label="Thriller" />
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
                        <p className="text-normal font-light font-sarabun text-light-grey">
                          Spain
                        </p>
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
                          50 min
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center h-px w-full bg-darker-grey" />
                  </article>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-1/4 mt-14">
              <h4 className="text-2xl font-semibold font-sarabun text-white">
                Cast and Crew
              </h4>
              <div className="flex flex-col gap-4 mt-8">
                <CartListItem />
                <CartListItem />
                <CartListItem />
                <CartListItem />
                <CartListItem />
                <CartListItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleTitle;
