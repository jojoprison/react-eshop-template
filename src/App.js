import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Popular from "./components/Popular";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Header/>
            <Nav/>
        <Popular/>
        <Products/>
        <Footer/>
        </div>
  );
}

export default App;
