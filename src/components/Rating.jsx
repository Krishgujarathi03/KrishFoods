import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Rating({ rating, onClick, style }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
}

export default Rating;
