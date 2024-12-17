import "./App.css";
import BestRestaurantsPage from "./components/BestRestaurants/BestRestaurantsPage";

import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import Nevbar from "./components/Nevbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BellaItalia from "./components/Restaurants/BellaItalia";

function App() {
  return (
    <>
      <Router>
        <Nevbar />
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/allrestaurants" element={<BestRestaurantsPage/>}></Route>
          <Route path="/bellaItalia" element={<BellaItalia/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
