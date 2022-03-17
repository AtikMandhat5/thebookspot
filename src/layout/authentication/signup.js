import React from "react";

function Signup() {
  return (
    <>
      <div class="main">
        <div class="container">
          <div class="breadcrumb-wrapper">
            <ol>
              <li>
                <l href="#" title="Home">
                  Home
                </l>
              </li>
              <li>
                <p>Create an Account</p>
              </li>
            </ol>
          </div>
          <h1 class="login-head">Create an Account</h1>
          <form>
            <div class="row mt-5 mb-2">
              <h5 class="head-bor">Personal Information</h5>
              <p class="text-secondary">
                Please enter the following information to create your account.
              </p>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="fname">First Name *</label>
                  <input
                    type="text"
                    class="form-control"
                    name="fname"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="lname">Last Name *</label>
                  <input
                    type="text"
                    class="form-control"
                    name="lname"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label for="first-name" id="first-name-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    class="form-control my-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row my-5">
              <h5 class="head-bor">Login Information</h5>
              <p class="text-secondary">
                Please enter the following information to create your account.
              </p>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="exampleInputPassword1">Password *</label>
                  <input
                    type="password"
                    class="form-control my-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="button" class="btn btn-danger my-4">
                  Register
                </button>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password *</label>
                  <input
                    type="password"
                    class="form-control my-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
