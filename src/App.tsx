import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

// Lazy-loaded routes for code splitting
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails").then((m) => ({ default: m.ServiceDetails })));
const Fleet = lazy(() => import("./pages/Fleet").then((m) => ({ default: m.Fleet })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Industries = lazy(() => import("./pages/Industries").then((m) => ({ default: m.Industries })));
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const Safety = lazy(() => import("./pages/Safety").then((m) => ({ default: m.Safety })));
const Commitment = lazy(() => import("./pages/Commitment").then((m) => ({ default: m.Commitment })));
const Privacy = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then((m) => ({ default: m.Terms })));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Suspense fallback={<div className="min-h-screen bg-primary flex items-center justify-center"><div className="w-8 h-8 border-4 border-secondary-container border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/commitment" element={<Commitment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/971555853160"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp Us"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.195 1.6 6.007L.175 24l6.103-1.428a11.968 11.968 0 005.753 1.478h.005c6.645 0 12.03-5.385 12.03-12.033A12.038 12.038 0 0012.03 0zm0 21.996h-.004a9.98 9.98 0 01-5.086-1.385l-.365-.216-3.784.886.902-3.69-.237-.377A9.957 9.957 0 012.051 12.03c0-5.508 4.482-9.99 9.985-9.99A9.98 9.98 0 0122.02 12.03c0 5.508-4.48 9.99-9.99 9.99zm5.48-7.488c-.3-.15-1.776-.877-2.052-.978-.276-.1-.477-.15-.677.15-.2.302-.777.978-.952 1.178-.175.201-.352.227-.652.077-1.554-.775-2.73-1.442-3.816-3.284-.175-.302-.018-.465.132-.616.135-.135.3-.35.45-.526.15-.175.201-.301.302-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.927-2.23-.243-.585-.49-.505-.677-.514-.175-.008-.377-.008-.577-.008a1.116 1.116 0 00-.802.376c-.276.301-1.052 1.03-1.052 2.508 0 1.48 1.077 2.91 1.228 3.111.15.201 2.122 3.238 5.14 4.538 2.012.864 2.802.775 3.327.65.577-.137 1.776-.726 2.027-1.428.25-.7.25-1.303.175-1.428-.075-.126-.276-.201-.577-.35z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
