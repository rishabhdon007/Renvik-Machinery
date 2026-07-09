import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import { TypewriterText } from "./AnimatedElements";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Fleet", to: "/fleet" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (to: string) => location.pathname === to || (location.pathname.startsWith(to) && to !== "/");

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[100] border-b border-primary/10 bg-white shadow-sm transition-all duration-300"
        aria-label="Primary"
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-secondary-container origin-left z-50"
          style={{ scaleX }}
        />
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            to="/"
            aria-label="Renvik Machinery Rental Services — Home"
            className="group flex items-center gap-2.5 rounded-lg py-2 pr-2 focus-visible:outline-offset-4"
          >
            <img
              src="/images/logo.webp"
              alt="Renvik Logo"
              className="h-16 md:h-20 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="flex items-center gap-2 leading-none">
                <span className="font-headline text-xl lg:text-2xl font-black text-primary tracking-tight">RENVIK</span>
                <span className="text-primary/30 text-lg">|</span>
                <span className="font-headline text-lg lg:text-xl font-bold text-primary/80 tracking-tight">Machinery Rental</span>
              </div>
              <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] text-primary/50 mt-1">
                <TypewriterText text="Heavy Equipment Solutions" delay={500} loop={true} />
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? "page" : undefined}
                className={`relative rounded-lg px-3 py-3 font-headline text-[0.9375rem] font-bold tracking-tight transition-colors duration-200 focus-visible:outline-offset-4 ${
                  isActive(link.to) ? "text-primary" : "text-on-surface-variant/75 hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-2 left-3 right-3 h-[3px] rounded-full bg-secondary-container"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/971555853160?text=Hello,%20I%20am%20interested%20in%20getting%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl border-2 border-primary bg-primary px-6 py-2.5 font-headline text-sm font-extrabold text-white shadow-[0_12px_32px_-8px_rgba(24,51,92,0.35)] transition-all duration-200 hover:border-primary hover:bg-[#142a4f] lg:inline-flex hover:brightness-[1.02] active:scale-[0.98]"
            >
              Get Free Quote
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-2 text-primary transition-colors hover:bg-primary/[0.06] lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            id="mobile-nav-drawer"
            style={{ backgroundColor: "#ffffff", position: "fixed", inset: 0, zIndex: 300 }}
            className="flex flex-col p-8 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            {/* Header row with logo + close button */}
            <div className="flex items-center justify-between mb-10 gap-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex min-w-0 items-center gap-3">
                <img src="/images/logo.webp" alt="Renvik Logo" className="h-14 w-auto shrink-0" />
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-headline text-xl font-black text-primary tracking-tight">RENVIK</span>
                    <span className="text-primary/30 text-lg">|</span>
                    <span className="font-headline text-lg font-bold text-primary/80 tracking-tight">Rental</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary/50 mt-1">
                    <TypewriterText text="Heavy Equipment" delay={500} loop={true} />
                  </span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-2 text-primary hover:bg-primary/[0.06]"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    aria-current={isActive(link.to) ? "page" : undefined}
                    className={`block rounded-xl py-2 text-4xl font-headline font-black tracking-tighter transition-colors focus-visible:outline-offset-[6px] ${
                      isActive(link.to) ? "text-primary" : "text-gray-400 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-12"
            >
              <Link
                to="/contact"
                className="flex min-h-[52px] w-full items-center justify-center rounded-[2rem] bg-primary px-6 py-4 text-center font-headline text-lg font-black text-white shadow-xl shadow-primary/25 transition-colors hover:bg-[#142a4f] active:scale-[0.99]"
              >
                Inquire Now
              </Link>
              <div className="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400">
                RENVIK MACHINERY RENTAL SERVICES L.L.C © {new Date().getFullYear()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
