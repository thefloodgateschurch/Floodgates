import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Leadership from "./pages/Leadership";
import Prayer from "./pages/Prayer";
import WomensMinistry from "./pages/WomensMinistry";
import LifeGroup from "./pages/LifeGroup";
import Give from "./pages/Give";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/ministries/womens" element={<WomensMinistry />} />
          <Route path="/life-group" element={<LifeGroup />} />
          <Route path="/give" element={<Give />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
