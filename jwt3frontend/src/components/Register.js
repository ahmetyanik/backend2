import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="App d-flex justify-content-center align-items-center mt-5 flex-column">
      <h1>REGISTER PAGE</h1>

      <form className="border p-3 shadow">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            required
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to={`/`}>
          <button type="button" class="btn btn-success mx-2">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;