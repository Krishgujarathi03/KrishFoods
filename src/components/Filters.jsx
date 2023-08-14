import React from "react";
import Rating from "./Rating";
import { CartState } from "../context/Context";
function Filters() {
  const { productState, productDispatch } = CartState();

  return (
    <div className="filters text-light w-100">
      <span className="title mx-2 px-3 my-3 fs-4">Filter Products</span>
      <span>
        <input
          type="radio"
          className="display-1"
          name="check"
          onChange={() =>
            productDispatch({
              type: "SORT_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={productState.sort === "lowToHigh" ? true : false}
        />
        <label className="ms-1 me-2 my-1 ">Asending</label>
      </span>
      <span>
        <input
          type="radio"
          className="d-inline"
          name="check"
          onChange={() =>
            productDispatch({
              type: "SORT_PRICE",
              payload: "highToLow",
            })
          }
          checked={productState.sort === "highToLow" ? true : false}
        />
        <label className="ms-1 me-2 my-1">Decending</label>
      </span>
      <span>
        <input
          type="checkbox"
          className="d-inline"
          onChange={() =>
            productDispatch({
              type: "FILTER_STOCK",
            })
          }
          checked={productState.byStock}
        />
        <label className="ms-1 me-2 my-1">Inclue Out of Stock</label>
      </span>
      <span>
        <input
          type="checkbox"
          className="d-inline"
          onChange={() =>
            productDispatch({
              type: "FILTER_DELIVERY",
            })
          }
          checked={productState.byFastDelivery}
        />
        <label className="ms-1 me-2 my-1">Fast Delivery Only</label>
      </span>

      <span>
        <label className="ms-1 me-2 my-1">Rating: </label>
        <Rating
          rating={productState.byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <button
        className="btn btn-success reset mt-3"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;
