import React from "react";

interface GenreTagProps {
  label: string;
}

const GenreTag: React.FC<GenreTagProps> = ({ label }) => {
  return (
    <span className="flex justify-center items-center bg-darker-grey text-sm font-light font-sarabun text-white rounded-full px-3 py-2 h-6">
      {label}
    </span>
  );
};

export default GenreTag;
