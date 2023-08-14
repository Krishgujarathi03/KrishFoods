import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [first, setFirst] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  function Change(event) {
    setFirst({ ...first, [event.target.name]: event.target.value });
  }

  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-light">
              Username
            </label>
            <input
              type="text"
              className="form-control bg-dark text-white"
              name="name"
              value={first.name}
              onChange={Change}
              required="true"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-light"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={first.email}
              onChange={Change}
              required="true"
            />
            <div id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-light"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control bg-dark text-light"
              id="exampleInputPassword1"
              name="password"
              value={first.password}
              onChange={Change}
              required="true"
            />
          </div>

          <button type="submit" className="m-3 btn btn-success text-light">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
