import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Products from "./components/Products";
import Footer from "./components/Footer";
import Ad from "./components/Ad";

function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>

            <Ad/>

            <Products/>

            <Footer/>
        </div>
    );
}

export default App;
