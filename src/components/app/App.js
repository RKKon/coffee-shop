import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import MainPage from "../pages/MainPage";
import OurCoffeePage from "../pages/OurCoffeePage";
import CoffeeItemSinglePage from "../pages/CoffeeItemPage";
import YourPleasurePage from "../pages/YourPleasurePage";

// 1) need loading add. 2) add error. 3) page 404. 4) add API. 5) better design 
// 6) drill using another library and documentation from library
// make from API thing like random coffee. try new coffee. 
// random coffee. button- try new coffee. before that desc tired from usual coffee? try new one.
// coffeePage put img if img not found. The same in list of coffee items need img if img not found
// to drill registration form
// check box that agree witch cooky in form

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/ourCoffee" element={<OurCoffeePage/>}/>
            <Route path="/:coffeeTitle" element={<CoffeeItemSinglePage/>}/>
            <Route path="/yourPleasure" element={<YourPleasurePage/>}/>    
          </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
