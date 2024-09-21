import "./styles.css";
import "./carousel.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/vehicles" exact element={<Vehicles />} />
          <Route path="/vehicles/:id" exact element={<VehicleDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
