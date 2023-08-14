import React from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
function Navbar() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-header">
        <Link className="navbar-brand fs-2 fw-bold px-2" to="/">
          KrishFoods
        </Link>

        {/* <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul
            className="navbar-nav dropdown-menu bg-dark"
            aria-labelledby="dropdownMenuButton1"
          >
            <li className="nav-item dropdown-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown-item">
              <Link className="nav-link" to="/createuser">
                SignUp
              </Link>
            </li>
            <li className="nav-item dropdown-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="navbar-collapse navbarbtn" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createuser">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>

          <form className="d-flex mx-5 w-25 navbarsearch">
            <input
              className="form-control me-2 bg-dark text-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_SEARCH",
                  payload: e.target.value,
                })
              }
            />
          </form>

          <Dropdown alignright="true" className="mx-auto">
            <Dropdown.Toggle varient="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }} className="dropdown-card">
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartitemimg"
                        alt={prod.name}
                      />
                      <div className="cartitemdetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <button className="btn btn-primary btnstyle">
                      Go To Cart
                    </button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
