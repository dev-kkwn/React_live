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

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" exact element={<Section1 />} />
        <Route path="/services">
          {/* <Route path="metals" exact element={<Gold />} /> */}
          <Route path="metals" exact element={<Gold />} />
          {/* <Route path="" exact element={<Wedding />} /> */}
          <Route path="petrochem" exact element={<Petrochem />} />
          <Route path="solar" exact element={<Solar />} />
          {/* <Route path="" exact element={<Party />} /> */}
          {/* <Route path="" exact element={<Party />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
