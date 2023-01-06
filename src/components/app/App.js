import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Subheader from "../subheader/Subheader";
import OurCoffee from "../ourCoffee/OurCoffee";
import SearchAndFilterPanel from "../searchAndFilterPanel/SearchAndFilterPanel";
import ForYourPleasure from "../forYourPleasure/ForYourPleasure";
import CoffeeItemPage from "../coffeeItemPage/CoffeeItemPage";

import MainPage from "../pages/MainPage";
import OurCoffeePage from "../pages/OurCoffeePage";
import CoffeeItemSinglePage from "../pages/CoffeeItemPage";
import YourPleasurePage from "../pages/YourPleasurePage";

// import './App.css';
//import '../subheaderMain/subheaderMain.sass';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/ourCoffee" element={<OurCoffeePage/>}/>
            <Route path="/coffeeItem" element={<CoffeeItemSinglePage/>}/>
            <Route path="/yourPleasure" element={<YourPleasurePage/>}/>    
          </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
