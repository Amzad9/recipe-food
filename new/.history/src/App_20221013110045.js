import {BrowserRouter, Routes,Route,} from "react-router-dom";
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import './App.css';
import Navigation from "./components/Navigation";
import Recipe from "./pages/recipe/Recipe";
import Product from "./pages/Product";
import RecipeDetails from "./pages/recipe/RecipeDetails";
import Menu from "./pages/menu/Menu";
import MenuDetails from "./pages/menu/MenuDetails"
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Navigation />
     <Routes>
      <Route path="/" element={<Recipe />}/>
      <Route path="/:id" element={<RecipeDetails />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/menu/:id" element={<MenuDetails />}/>
      <Route path="/product" element={<Product />}/>
     </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </div>
  );
}

export default App;
