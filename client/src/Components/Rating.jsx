import React from "react";
import "../fontawesome/css/font-awesome.min.css";

const Rating = ({ value, text }) => {
  return (
    <div>
      <span className="text-yellow-600">
        <i
          className={
            value >= 1
              ? "fa fa-star"
              : value >= 0.5
              ? " fa fa-star-half-full"
              : "fa fa-star-half-empty"
          }
        >
          {" "}
        </i>
      </span>
      <span className="text-yellow-600">
        <i
          className={
            value >= 2
              ? "fa fa-star"
              : value >= 1.5
              ? " fa fa-star-half-full"
              : "fa fa-star-half-empty"
          }
        >
          {" "}
        </i>
      </span>
      <span className="text-yellow-600">
        <i
          className={
            value >= 3
              ? "fa fa-star"
              : value >= 2.5
              ? " fa fa-star-half-full"
              : "fa fa-star-half-empty"
          }
        >
          {" "}
        </i>
      </span>
      <span className="text-yellow-600">
        <i
          className={
            value >= 4
              ? "fa fa-star"
              : value >= 3.5
              ? " fa fa-star-half-full"
              : "fa fa-star-half-empty"
          }
        >
          {" "}
        </i>
      </span>
      <span className="text-yellow-600">
        <i
          className={
            value >= 5
              ? "fa fa-star"
              : value >= 4.5
              ? " fa fa-star-half-full"
              : "fa fa-star-half-empty"
          }
        >
          {" "}
        </i>
      </span>

      <span className="ml-2">{text && text}</span>
    </div>
  );
};

export default Rating;
