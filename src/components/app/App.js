import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Spinner from "../spinner/Spinner"; 

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const OurCoffeePage = lazy(() => import('../pages/OurCoffeePage'));
const CoffeeItemSinglePage = lazy(() => import('../pages/CoffeeItemPage'));
const YourPleasurePage = lazy(() => import('../pages/YourPleasurePage'));


// 6) drill using another library and documentation from library
// to drill registration form

// Cart for every page???
// move to redux
// make staff in page with specific coffee button to add to cart coffee.



function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Header/>  
          <Routes>
            <Route path="/coffee-shop" element={<MainPage/>}/>
            <Route path="/ourCoffee" element={<OurCoffeePage/>}/>
            <Route path="/ourCoffee/:coffeeTitle" element={<CoffeeItemSinglePage/>}/>
            <Route path="/yourPleasure" element={<YourPleasurePage/>}/>
            <Route path="*" element={<Page404/>}/>  
          </Routes>
          <Footer/>
        </Suspense>
        
        
      </div>
    </Router>
  );
}

export default App;
