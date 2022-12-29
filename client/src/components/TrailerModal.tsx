import React, { useRef, useEffect } from "react";
import { MoviesContext } from "../context/moviesContext";

interface TrailerModalProps {
  showTrailer: boolean;
  setShowTrailer: (value: boolean) => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({
  showTrailer,
  setShowTrailer,
}) => {
  const { title_trailer, getTitleTrailer, title_id, title_media_type } =
    React.useContext(MoviesContext)!;
  const modalRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as HTMLElement)
    ) {
      setShowTrailer(false);
    }
  };

  useEffect(() => {
    if (title_id && title_media_type) {
      getTitleTrailer();
    }
  }, [title_id, title_media_type]);

  if (showTrailer) {
    return (
      <div className="grid w-full h-full fixed top-0 left-0 bg-overlay-black z-[10] place-items-center">
        <div
          ref={modalRef}
          className="flex flex-col items-center justify-start bg-carbon-black drop-shadow-xl w-3/5 z-[100] rounded-md text-white font-sarabun font-normal text-lg aspect-video"
        >
          <iframe
            src={`https://www.youtube.com/embed/${title_trailer.key!}?autoplay=1`}
            title="trailer"
            className="w-full h-full rounded-md"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    );
  }
  return <></>;
};

export default TrailerModal;
