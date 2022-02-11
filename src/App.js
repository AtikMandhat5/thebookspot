import './App.css';
import Signin from './layout/authentication/signin';
import NavHeader from './layout/dashboard/components/navheader'
import Footer from './layout/dashboard/components/footer'
import Books from './layout/books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavHeader/>
        <Signin/>
        <Books/>
        <Footer/>
      </header>
    </div>
  );
}
export default App;
