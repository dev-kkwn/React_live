import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Section1 from "./components/Home";
import Footer from "./components/Footer";
import { Gold } from "./components/serv-gold";
import { Route, Routes } from "react-router-dom";
import About from "./components/About-us";
import Servit from "./components/serv-it";
import { Petrochem } from "./components/serv-petrochem";
import { Solar } from "./components/serv-solar";
import { Realestate } from "./components/serv-realestate";
import Trade from "./components/serv-trade";
import Food from "./components/serv-food";
import ContactForm from "./components/contact";
import Whoweare from "./components/Who-we-are";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Section1 />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<ContactForm />} />
        <Route path="/services">
          <Route path="trade" exact element={<Trade />} />
          <Route path="metals" exact element={<Gold />} />
          <Route path="food" exact element={<Food />} />
          <Route path="petrochem" exact element={<Petrochem />} />
          <Route path="solar" exact element={<Solar />} />
          <Route path="itdiv" exact element={<Servit />} />
          <Route path="realestate" exact element={<Realestate />} />
        </Route>
      </Routes>
      <Footer />
      {/* <Whoweare /> */}
    </>
  );
}

export default App;
