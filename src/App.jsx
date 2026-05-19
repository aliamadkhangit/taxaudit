import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import { pageTransition, pageTransitionTiming } from "./lib/animations";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransitionTiming}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
