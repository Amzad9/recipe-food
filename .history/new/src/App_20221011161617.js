import {BrowserRouter, Routes,Route,} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navigation />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product" element={<Product />}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
