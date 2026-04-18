import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./components/ModalContext";
import ContactModal from "./components/ContactModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <ContactModal />
      </ModalProvider>
    </BrowserRouter>
  );
}
