import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import Navbar from "./Navbar";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Navbar />
      <div className="text-light cart mx-4">
        <div className="w-75 me-4 cart-first">
          <ul className="list-group">
            <li className="list-group-item bg-dark text-light border-0 cartitems">
              {cart.map((prod) => (
                <div key={prod.id} className="cart-left">
                  <img src={prod.image} alt={prod.name} className="cartimg" />
                  <span className="me-3 prod-name">{prod.name}</span>
                  <span className="me-4 prod-price">₹ {prod.price}</span>

                  <span>
                    <Rating
                      rating={prod.ratings}
                      onClick={(e) => {
                        return false;
                      }}
                    />
                  </span>
                  <select
                    className="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer", marginLeft: "20px" }}
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                    }
                  />
                </div>
              ))}
            </li>
          </ul>
        </div>

        <div className="w-25 cartprice">
          <span className="title fs-2">Total {cart.length} items</span>
          <span style={{ fontWeight: 700 }} className="fs-4 my-2 pricetotal">
            Total: ₹ {total}
          </span>
          <button className="btn btn-primary my-3" disabled={cart.length === 0}>
            Proceed to payment
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
