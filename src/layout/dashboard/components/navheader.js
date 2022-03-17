import React from "react";

function NavHeader() {
  return (
    <>
      <div className="container header-class p-3 d-flex">
        <img className="logo-img" src='logo'   alt={"Tatva Soft LOGO"} />
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li className="nav-item active">
            <a className="nav-link text-danger" href="signin.html">
              Login
            </a>
          </li>
          <span className="text-secondary">&nbsp; | &nbsp;</span>
          <li className="nav-item">
            <a className="nav-link text-danger" href="signup.html">
              Register
            </a>
          </li>
          <li className="nav-item m-2">
            <a
              className="nav-link btn btn-outline-secondary text-black p-2"
              href="cart.html"
            >
              <span className="text-danger">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> 0{" "}
              </span>{" "}
              Cart
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-light bg-form d-flex align-items-center">
        <div className="container">
          <form className="form-inline d-flex justify-content-center">
            <input
              className="form-control mr-sm-2 input-search"
              type="search"
              placeholder="What are you looking for.."
              aria-label="Search"
            />
            <button className="btn btn-search mx-2 my-sm-0" type="submit">
              <i className="fa fa-search"></i> Search
            </button>
            <button className="btn btn-danger mx-1 my-sm-0" type="submit">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default NavHeader;
