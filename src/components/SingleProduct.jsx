import React from "react";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="cardstyle my-3">
      <div className="card bg-dark text-light ">
        <img src={prod.image} className="card-img-top" alt={prod.name} />

        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">
            <span>₹ {prod.price}</span>
            <br />
            {prod.fastDelivery ? (
              <span>Fast delivery</span>
            ) : (
              <span>5 Days delivery</span>
            )}
            <br />
            <Rating rating={prod.ratings} />
          </p>

          <div className="d-inline-flex">
            {cart.some((p) => p.id === prod.id) ? (
              <button
                className="btn btn-danger me-3"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="btn btn-success"
                disabled={!prod.inStock}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  });
                }}
              >
                {!prod.inStock ? "Out of Stock" : "Add to Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
