import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6 bg-white p-3 rounded-xl shadow-lg">
              <img
                src="/images/logo.webp"
                alt="Renvik Logo"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-white/80 font-body text-sm leading-relaxed max-w-sm mb-6">
              Renvik Machinery Rental Services is an international heavy equipment rental company headquartered in Dubai, United Arab Emirates, providing professional equipment rental solutions.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 font-body text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 font-body text-sm text-white/80">
              <li><Link to="/safety" className="hover:text-white transition-colors">Safety & Quality</Link></li>
              <li><Link to="/commitment" className="hover:text-white transition-colors">Our Commitment</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-bold text-lg mb-6">Contact Us</h3>
            <address className="not-italic space-y-5 font-body text-sm text-white/80">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 shrink-0 text-secondary-container mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="font-bold text-white mb-1">Renvik Machinery Rental Services L.L.C</p>
                  <p className="leading-relaxed">Office No. 903-94, Iris Bay Tower<br/>Business Bay, Dubai, UAE</p>
                  <p className="text-white/60 text-xs mt-2">License No. 1632454</p>
                </div>
              </div>
              
              <div className="pt-2 space-y-4">
                <a href="mailto:info@renvikservices.com" className="flex items-start gap-3 hover:text-secondary-container transition-colors text-white/80">
                  <svg className="w-5 h-5 shrink-0 text-secondary-container mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/60 mb-0.5 font-bold">Email Us</span>
                    <span className="font-bold text-white text-base">info@renvikservices.com</span>
                  </div>
                </a>
                <a href="https://wa.me/971555853160" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-secondary-container transition-colors text-white/80">
                  <svg className="w-5 h-5 shrink-0 text-secondary-container mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/60 mb-0.5 font-bold">Call / WhatsApp</span>
                    <span className="font-bold text-white text-base">+971 555853160</span>
                  </div>
                </a>
              </div>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 font-body gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Renvik Machinery Rental Services L.L.C. All rights reserved.</p>
          <p>Designed and developed by <a href="https://www.devyugsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-white font-bold tracking-wide hover:text-secondary-container transition-colors">Devyug Solutions</a></p>
        </div>
      </div>
    </footer>
  );
};
