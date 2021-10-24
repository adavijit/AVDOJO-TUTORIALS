import React from "react";

function Movie({ movieName, releaseDate }) {
  console.log("Rendered from memoized movie component");
  return (
    <div>
      <p>Movie {movieName}</p>
      <p>Release Date {releaseDate}</p>
    </div>
  );
}

export const MemoizedMovie = React.memo(Movie);
