import {BrowserRouter, Routes,Route,} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Recipe from "./pages/recipe/Recipe";
import Product from "./pages/Product";
import RecipeList from "./pages/recipe/RecipeLIst";
import RecipeDetails from "./pages/recipe/RecipeDetails";
import Menu from "./pages/menu/Menu";
import MenuDetails from "./pages/menu/MenuDetails"
import MenuList from "./pages/menu/MenuList";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navigation />
     <Routes>
      <Route path="/" element={<Recipe />}/>
      <Route path="/recipelist/:name" element={<RecipeList />}/>
      <Route path="/recipelist/:name/:id" element={<RecipeDetails />}/>
      <Route path="/:id" element={<RecipeDetails />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/menu/:name" element={<MenuList />}/>

      <Route path="/menu/:name/:id" element={<MenuDetails />}/>
      <Route path="/product" element={<Product />}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
