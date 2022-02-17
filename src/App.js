import "./App.css";
// import Signin from './layout/authentication/signin';
import Signup from './layout/authentication/signup';
import NavHeader from "./layout/dashboard/components/navheader";
import Footer from './layout/dashboard/components/footer'
// import Books from './layout/books';
import Home from './layout/dashboard/home'

function App() {
  return (
    <div className="App">
      <NavHeader />
      {/* <Signup /> */}
       {/* <Books/> */}
       <Home/>
        <Footer/> 
    </div>
  );
}
export default App;
