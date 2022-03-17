import React from "react";

function Cart(){
    
    return(
    <div className="main">
        <div className="container ">
            <h1 className="login-head my-4">Cart Page</h1>
            <div className="container-fluid p-0 mb-4 d-flex align-items-center justify-content-between">
                <h5>My shopping Bag(3 items)</h5>
                <form className="d-flex">
                    <div className="form-group d-flex align-items-center" style="white-space: nowrap;">
                    <h5 className="pe-3 m-0">Total price : 3000</h5>
                    </div>
                </form>
            </div>
            <div className="container-fluid p-0 ">
                <div className="custom-card d-flex">
                    <img src="img/book.jpg" alt="dummy-image" style="width: 200px;height: 200px;" />
                    <div className="d-flex justify-content-between" style="width: inherit;">
                        <div>
                            <h3 className="fw-bold ms-4">Elon Musk Book</h3>
                            <h6 className="text-danger ms-4 mb-3">Cart item name</h6>
                            <div className="d-flex">
                                <div className="ms-4">
                                    <button onclick="increment()" className="bg-danger text-white btn-as">+</button>
                                    <input id='demoInput' type='number' min='1' max='10' value="1"/>
                                    <button onclick="decrement()" className="bg-danger text-white btn-as">-</button>
                                    <script>
                                        function increment() {
                                            document.getElementById('demoInput').stepUp();
                                        }
                                        function decrement() {
                                            document.getElementById('demoInput').stepDown();
                                        }
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: end">
                            <p className="fw-bold mb-2">500</p>
                            <p className="text-secondary mb-2"><strike>1000</strike> <span className="text-danger fw-bold">50% Off</span></p>
                            <a href="#" className="text-danger mt-3">Remove</a>
                        </div>
                    </div>
                </div>
                <div className="custom-card d-flex">
                    <img src="img/book.jpg" alt="dummy-image" style="width: 200px;height: 200px;" />
                    <div className="d-flex justify-content-between" style="width: inherit;">
                        <div>
                            <h3 className="fw-bold ms-4">Elon Musk Book</h3>
                            <h6 className="text-danger ms-4 mb-3">Cart item name</h6>
                            <div className="d-flex">
                                <div className="ms-4">
                                    <button onclick="increment()" className="bg-danger text-white btn-as">+</button>
                                    <input id='demoInput' type='number' min='1' max='10' value="1"/>
                                    <button onclick="decrement()" className="bg-danger text-white btn-as">-</button>
                                    <script>
                                        function increment() {
                                            document.getElementById('demoInput').stepUp();
                                        }
                                        function decrement() {
                                            document.getElementById('demoInput').stepDown();
                                        }
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: end">
                            <p className="fw-bold mb-2">500</p>
                            <p className="text-secondary mb-2"><strike>1000</strike> <span className="text-danger fw-bold">50% Off</span></p>
                            <a href="#" className="text-danger mt-3">Remove</a>
                        </div>
                    </div>
                </div>
                <div className="custom-card d-flex">
                    <img src="img/book.jpg" alt="dummy-image" style="width: 200px;height: 200px;" />
                    <div className="d-flex justify-content-between" style="width: inherit;">
                        <div>
                            <h3 className="fw-bold ms-4">Elon Musk Book</h3>
                            <h6 className="text-danger ms-4 mb-3">Cart item name</h6>
                            <div className="d-flex">
                                <div className="ms-4">
                                    <button onclick="increment()" className="bg-danger text-white btn-as">+</button>
                                    <input id='demoInput' type='number' min='1' max='10' value="1"/>
                                    <button onclick="decrement()" className="bg-danger text-white btn-as">-</button>
                                    <script>
                                        function increment() {
                                            document.getElementById('demoInput').stepUp();
                                        }
                                        function decrement() {
                                            document.getElementById('demoInput').stepDown();
                                        }
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: end">
                            <p className="fw-bold mb-2">500</p>
                            <p className="text-secondary mb-2"><strike>1000</strike> <span className="text-danger fw-bold">50% Off</span></p>
                            <a href="#" className="text-danger mt-3">Remove</a>
                        </div>
                    </div>
                </div>
                
                <button className="btn btn-danger my-4" type="submit"> Place Order</button>
            </div>
        </div>
    </div>
    )
}

export default Cart;