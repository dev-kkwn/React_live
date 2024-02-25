import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Section1 from "./components/Home";
import Footer from "./components/Footer";
import { Gold } from "./components/serv-gold";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Section1 />
      <Routes>
        <Route path="/services">
          <Route path="metals" exact element={<Gold />} />
          {/* <Route path="" exact element={<Wedding />} /> */}
          {/* <Route path="" exact element={<Party />} /> */}
        </Route>
      </Routes>
      {/* <Gold/> */}
      <Footer />
    </>
  );
}

export default App;
