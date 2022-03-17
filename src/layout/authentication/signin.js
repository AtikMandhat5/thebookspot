import React from "react";

function Signin() {
  return (
    <>
      <div className="main">
        <div className="container ">
          <div className="breadcrumb-wrapper">
            <ol>
              <li>
                <l href="#" title="Home">
                  Home
                </l>
              </li>
              <li>
                <p>Login</p>
              </li>
            </ol>
          </div>
          <h1 className="login-head">Login or Create an Account</h1>
          <div className="row mt-5 mb-4">
            <div className="col-lg-6">
              <h5 className="head-bor">New Customer</h5>
              <p className="text-secondary">Registration is free and easy.</p>
              <ul {{ style="padding-left: 20px"}} >
                <li>Faster checkout</li>
                <li>Save multiple shipping addresses</li>
                <li>View and track orders and more</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h5 className="head-bor">Registered Customers</h5>
              <p className="text-secondary">
                If you have an account with us,please log in
              </p>
              <form>
                <div className="form-group">
                  <label for="first-name" id="first-name-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control my-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-group my-4">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control my-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6">
              <button type="button" className="btn btn-danger my-1">
                Create an Account
              </button>
            </div>
            <div className="col-lg-6">
              <button type="button" className="btn btn-danger my-1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;