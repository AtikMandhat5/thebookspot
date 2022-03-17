import React from "react";

function Editbook(){

    return (
        <div className="main">
        <div className="container my-5">
          <h1 className="login-head">Edit Product</h1>
          <form>
            <div className="row my-5">
              <div className="col-lg-6">
                <div className="form-group">
                  <label for="fname">First Name *</label>
                  <input type="text" className="form-control" name="fname" required />
                </div>
                <div className="form-group my-3">
                  <label>Shop By Categories</label>
                  <select className="form-control" id="cate-select">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                <div className="form-group my-4 mb-5">
                  <div className="input-group form-control mb-2 p-0">
                      <div className="input-group-prepend form-control">
                          <input type="button" className="input-group-text btn bg-danger text-white" value="Upload"/>
                          <input type="file" className="form-control-file" id="files" />
                      </div>
                      
                   
                  </div>
                </div>
                <button className="btn btn-search me-2 my-sm-0 px-4" type="submit">
                  Save
                </button>
                <button className="btn btn-danger mx-1 my-sm-0 px-3" type="submit">
                  Cancel
                </button>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label for="lname">Last Name *</label>
                  <input type="text" className="form-control" name="lname" required />
                </div>
                <div className="form-group my-3">
                  <label for="desc">Description</label>
                  <input type="text" className="form-control" name="desc" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}
export default Editbook;