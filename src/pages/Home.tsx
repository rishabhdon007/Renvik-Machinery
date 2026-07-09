import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    text: "Renvik's project-based rental kept our Dubai site running seamlessly. The fleet was brand new and their technical support is unmatched.",
    name: "Ahmed Al Mansoori",
    role: "Project Director",
    company: "Al-Futtaim Construction",
    initial: "A"
  },
  {
    rating: 5,
    text: "We rely heavily on their cross-border support for our mining operations in Africa. Mobilization is always rapid and hassle-free.",
    name: "David Osei",
    role: "Logistics Head",
    company: "West Africa Mining Corp",
    initial: "D"
  },
  {
    rating: 5,
    text: "The dedicated equipment service ensures we never face downtime. Excellent preventative maintenance during our off-hours.",
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Gulf Logistics & Transport",
    initial: "S"
  },
  {
    rating: 5,
    text: "Their monthly rental flexibility saved us during a major spike in warehouse demand in Abu Dhabi. Truly a reliable partner.",
    name: "Omar Tariq",
    role: "Supply Chain Director",
    company: "Emirates Freight",
    initial: "O"
  },
  {
    rating: 5,
    text: "For long-term fleet expansion, Renvik provides modern technology without the heavy capital expenditure. Highly recommended.",
    name: "Michael Chen",
    role: "CFO",
    company: "Horizon Infrastructure",
    initial: "M"
  },
  {
    rating: 5,
    text: "Extremely professional team. Their turnaround time for delivering prime movers to our Oman site was incredibly fast.",
    name: "Khalid Al Busaidi",
    role: "Site Manager",
    company: "Muscat Civil Works",
    initial: "K"
  },
  {
    rating: 5,
    text: "We’ve partnered with them for over three years on long-term rental agreements. Their cost predictability helps our budget planning perfectly.",
    name: "James Robertson",
    role: "Procurement Lead",
    company: "Leading EPC Firm",
    initial: "J"
  },
  {
    rating: 5,
    text: "The customized fleet solutions for our port expansion project in Kenya were spot on. They understand international logistics perfectly.",
    name: "Amina Kiptoo",
    role: "Director of Operations",
    company: "East Africa Ports Authority",
    initial: "A"
  },
  {
    rating: 5,
    text: "Zero capital expenditure and a dedicated support team. What more could you ask for in a heavy machinery partner?",
    name: "Hassan Raza",
    role: "Managing Director",
    company: "Raza Steel & Fabrication",
    initial: "H"
  },
  {
    rating: 5,
    text: "Their goldhofer modular systems handled our extreme heavy haulage flawlessly. The on-site technicians were highly skilled.",
    name: "Francois Dubois",
    role: "Heavy Lift Coordinator",
    company: "Continental Engineering",
    initial: "F"
  }
];

const TypewriterText = ({ text, speed = 50, delay = 0 }: { text: string, speed?: number, delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isStarted, setIsStarted] = useState(delay === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const isComplete = displayText.length === text.length && isStarted;
  
  useEffect(() => {
    if (!isInView) return;
    
    let timer: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
      let i = 0;
      setDisplayText("");
      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed); // Typing speed
    }, delay);
    
    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [text, isInView, speed, delay]);

  return <span ref={ref}>{displayText}</span>;
};

const AnimatedCounter = ({ target, duration = 2 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const servicesList = [
  { title: "Monthly Rental", icon: "📅", img: "/images/Foto1.webp", cat: "FLEXIBLE", desc: "Short-term equipment rental tailored for immediate project requirements.", link: "/services/monthly-rental" },
  { title: "Long-term Rental", icon: "⏳", img: "/images/Foto2.webp", cat: "CONTRACT", desc: "Extended rental agreements designed for large-scale operations and cost efficiency.", link: "/services/long-term-rental" },
  { title: "Project-based Rental", icon: "🏗️", img: "/images/Foto3.webp", cat: "TURNKEY", desc: "Comprehensive equipment solutions aligned with your project lifecycle.", link: "/services/project-based-rental" },
  { title: "Fleet Agreements", icon: "🚜", img: "/images/Foto4.webp", cat: "SCALE", desc: "Complete fleet provisioning for major infrastructure developments.", link: "/services/fleet-rental-agreements" },
  { title: "Dedicated Equipment", icon: "⭐", img: "/images/Foto6.webp", cat: "CUSTOM", desc: "Specialized machinery sourced and maintained specifically for your operations.", link: "/services/dedicated-equipment" },
  { title: "Cross-border Support", icon: "🌍", img: "/images/Foto7.webp", cat: "GLOBAL", desc: "International equipment mobilization across the Middle East and Africa.", link: "/services/cross-border-support" }
];

const fleetList = [
  { title: "Tractor Heads", icon: "🚛", img: "/images/fleet_tractor.png", cat: "HAULAGE", desc: "Heavy-duty tractor heads for long-haul transport and logistics.", link: "/fleet" },
  { title: "Prime Movers", icon: "🚚", img: "/images/fleet_prime.png", cat: "HEAVY HAUL", desc: "Extreme heavy haulage prime movers for oversized cargo.", link: "/fleet" },
  { title: "Flatbed Trailers", icon: "🛏️", img: "/images/fleet_flatbed.png", cat: "TRANSPORT", desc: "Versatile flatbed trailers for general construction and steel materials.", link: "/fleet" },
  { title: "Low Bed Trailers", icon: "🔽", img: "/images/fleet_lowbed.png", cat: "SPECIALIZED", desc: "Low bed trailers designed for transporting heavy machinery.", link: "/fleet" },
  { title: "Hydraulic Modular", icon: "⚙️", img: "/images/fleet_hydraulic.png", cat: "MODULAR", desc: "Multi-axle hydraulic trailers for ultra-heavy industrial loads.", link: "/fleet" },
  { title: "Goldhofer Systems", icon: "🏗️", img: "/images/fleet_goldhofer.png", cat: "HEAVY HAUL", desc: "Specialized modular transport equipment for complex heavy haulage operations.", link: "/fleet" }
];

export const Home = () => {
  const [activeTab, setActiveTab] = useState<"services" | "fleet">("services");
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] xl:min-h-[95vh] flex items-center overflow-hidden bg-primary w-full">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center mix-blend-overlay opacity-60"
          >
            <source src="/heropage_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 z-10" />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left pt-10 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-7 sm:mb-9"
              >
                <div className="pb-3 font-headline text-[1.0625rem] font-bold leading-snug tracking-[-0.02em] text-balance text-white sm:pb-4 sm:text-xl md:text-2xl">
                  <span className="font-extrabold tracking-wide text-secondary-container drop-shadow-md">Reliable Equipment</span>
                  <span className="opacity-90"> &middot; Trusted Partnership</span>
                </div>
                <div className="h-0.5 max-w-xl bg-gradient-to-r from-secondary-container via-secondary-container/70 to-transparent" />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-headline font-extrabold leading-[1.05] tracking-tight mb-6 sm:mb-8 text-white">
                <TypewriterText text="Heavy Equipment Rental Solutions" /> <br className="hidden sm:block" />
                <span className="text-white/90"><TypewriterText text="for Industry, Infrastructure & Energy." delay={1600} /></span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05, delay: 1.5 }}
                className="mb-11 max-w-[min(42rem,100%)] text-pretty text-base font-light leading-[1.65] text-blue-100/82 sm:text-lg md:text-xl"
              >
                Renvik Machinery Rental Services is an international heavy equipment rental company headquartered in Dubai, United Arab Emirates, providing professional equipment rental solutions for construction, infrastructure, industrial, logistics, marine, mining, renewable energy and oil & gas projects.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05, delay: 1.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://wa.me/971555853160?text=Hello,%20I%20am%20interested%20in%20getting%20a%20free%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex min-h-12 flex-1 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-secondary-container px-8 py-3.5 text-center font-headline text-sm font-bold text-white shadow-[0_0_34px_-4px_rgba(253,148,18,0.45)] transition-all duration-200 hover:bg-[#e08310] active:translate-y-[1px] sm:min-h-[3.125rem] sm:flex-initial sm:py-4 sm:text-base"
                >
                  Get Free Quote &rarr;
                </a>
                <Link 
                  to="/fleet"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-3.5 text-center font-headline text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white/20 active:translate-y-[1px] sm:min-h-[3.125rem] sm:flex-initial sm:py-4 sm:text-base"
                >
                  View Our Fleet
                </Link>
              </motion.div>
            </div>
            
            {/* Right Column: Glassmorphism Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
              className="lg:col-span-5 relative mt-12 lg:mt-0 perspective-1000 hidden md:block"
            >
              <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -ml-10 -mb-10" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex -space-x-3">
                       {/* Placeholder avatars for "Happy Clients" */}
                      <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-300 overflow-hidden"><img src="/images/Foto1.webp" alt="Client" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                      <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-400 overflow-hidden"><img src="/images/Foto2.webp" alt="Client" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                      <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-500 overflow-hidden"><img src="/images/Foto3.webp" alt="Client" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
                    </div>
                    <div className="text-right">
                      <div className="font-headline font-black text-2xl text-white"><AnimatedCounter target={500} />+</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Successful Projects</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex gap-4 p-4 -mx-4 rounded-2xl transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center text-secondary-container text-lg shadow-[0_0_15px_rgba(253,148,18,0.3)]">
                        ⚡
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-white mb-1">Fast Equipment Mobilization</h3>
                        <p className="text-white/60 text-sm font-body">Deploying reliable heavy machinery to your site without delays.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 -mx-4 rounded-2xl transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center text-secondary-container text-lg shadow-[0_0_15px_rgba(253,148,18,0.3)]">
                        🛠️
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-white mb-1">Professional Technical Support</h3>
                        <p className="text-white/60 text-sm font-body">24/7 dedicated maintenance and operational assistance.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 -mx-4 rounded-2xl transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container/20 border border-secondary-container/30 flex items-center justify-center text-secondary-container text-lg shadow-[0_0_15px_rgba(253,148,18,0.3)]">
                        🛡️
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-white mb-1">High Safety Standards</h3>
                        <p className="text-white/60 text-sm font-body">Regular inspections and certified equipment for risk-free operations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                ACTIVE DEPLOYMENT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-24 md:py-32 bg-surface relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] md:opacity-[0.04]" 
          style={{ 
            backgroundImage: "url('/images/logo.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            transform: "scale(1.2)"
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 reveal-on-scroll">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Comprehensive Solutions</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6">Our Core Offerings</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Providing professional rental services for projects of every size, from single units to entire fleets.
              </p>
            </div>
            
            {/* Toggle Button Group */}
            <div className="flex bg-outline-variant/10 p-1.5 rounded-xl shadow-inner self-start md:self-end">
              <button 
                onClick={() => setActiveTab("services")}
                className={`px-8 py-3.5 rounded-lg font-bold text-sm transition-all duration-300 ${activeTab === "services" ? "bg-white text-primary shadow-md" : "text-secondary hover:text-primary"}`}
              >
                Services
              </button>
              <button 
                onClick={() => setActiveTab("fleet")}
                className={`px-8 py-3.5 rounded-lg font-bold text-sm transition-all duration-300 ${activeTab === "fleet" ? "bg-white text-primary shadow-md" : "text-secondary hover:text-primary"}`}
              >
                Fleet
              </button>
            </div>
          </div>
          
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {activeTab === "services" ? servicesList.map((item, i) => (
              <Link to={item.link} key={`services-${i}`} className={`group h-full reveal-on-scroll ${i >= 3 ? 'hidden md:block' : ''}`} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="bg-white rounded-[2.5rem] border border-outline-variant/10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative h-full flex flex-col">
                  {/* Image Section Wrapper */}
                  <div className="relative aspect-[16/10]">
                    {/* Actual Image with its own overflow clipping */}
                    <div className="absolute inset-0 rounded-t-[2.5rem] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-[0.15em] shadow-sm z-20">
                      {item.cat}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-headline font-bold text-primary mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow opacity-70">
                      {item.desc}
                    </p>

                    <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                      <span className="font-bold text-primary text-sm flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                        View Details
                        <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )) : fleetList.map((item, i) => (
              <div key={`fleet-${i}`} className={`group overflow-hidden bg-white rounded-3xl shadow-sm border border-outline-variant/30 hover:shadow-xl hover:border-primary/20 transition-all flex flex-col h-full reveal-on-scroll ${i >= 3 ? 'hidden md:flex' : ''}`} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 group-hover:text-secondary-container transition-colors">{item.title}</h3>
                  <p className="text-on-surface/70 font-body leading-relaxed flex-grow">{item.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-3 pt-6 border-t border-outline-variant/30">
                    <a 
                      href={`https://wa.me/971555853160?text=${encodeURIComponent(`Hello, I am interested in renting: ${item.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center h-12 px-4 rounded-xl bg-primary text-white font-bold font-headline text-sm transition-colors hover:bg-[#142a4f]"
                    >
                      Get Quote
                    </a>
                    <a 
                      href={`https://wa.me/971555853160?text=${encodeURIComponent(`Hello, I am interested in renting: ${item.title}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex justify-center items-center w-12 h-12 rounded-xl bg-[#25D366] text-white transition-transform hover:scale-105 shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.195 1.6 6.007L.175 24l6.103-1.428a11.968 11.968 0 005.753 1.478h.005c6.645 0 12.03-5.385 12.03-12.033A12.038 12.038 0 0012.03 0zm0 21.996h-.004a9.98 9.98 0 01-5.086-1.385l-.365-.216-3.784.886.902-3.69-.237-.377A9.957 9.957 0 012.051 12.03c0-5.508 4.482-9.99 9.985-9.99A9.98 9.98 0 0122.02 12.03c0 5.508-4.48 9.99-9.99 9.99zm5.48-7.488c-.3-.15-1.776-.877-2.052-.978-.276-.1-.477-.15-.677.15-.2.302-.777.978-.952 1.178-.175.201-.352.227-.652.077-1.554-.775-2.73-1.442-3.816-3.284-.175-.302-.018-.465.132-.616.135-.135.3-.35.45-.526.15-.175.201-.301.302-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.927-2.23-.243-.585-.49-.505-.677-.514-.175-.008-.377-.008-.577-.008a1.116 1.116 0 00-.802.376c-.276.301-1.052 1.03-1.052 2.508 0 1.48 1.077 2.91 1.228 3.111.15.201 2.122 3.238 5.14 4.538 2.012.864 2.802.775 3.327.65.577-.137 1.776-.726 2.027-1.428.25-.7.25-1.303.175-1.428-.075-.126-.276-.201-.577-.35z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* View All CTA */}
          <div className="mt-16 text-center">
            {activeTab === "services" ? (
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all duration-300 hover:bg-secondary-container hover:-translate-y-1 shadow-lg"
              >
                View All Services &rarr;
              </Link>
            ) : (
              <Link 
                to="/fleet" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all duration-300 hover:bg-secondary-container hover:-translate-y-1 shadow-lg"
              >
                View All Fleet &rarr;
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* About Renvik (Intro) */}
      <section className="py-24 bg-[#02182b] relative overflow-hidden">
        {/* Decorative background map-like pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-secondary-container/10 blur-[80px] pointer-events-none" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-[80px] pointer-events-none" />
        
        <div className="w-full px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative border border-white/10">
                <img src="/images/Foto3.webp" alt="Global reach" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">ABOUT RENVIK</span>
              <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-8 leading-tight"><TypewriterText text="Serving Industrial Markets Across the Region" /></h2>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                  hidden: {}
                }}
                className="space-y-6 font-body text-lg text-white/80 leading-relaxed"
              >
                <div className="overflow-hidden py-1">
                  <motion.p variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
                    Strategically located in one of the world’s leading commercial and logistics hubs, Renvik supports customers across the United Arab Emirates while serving industrial and infrastructure projects throughout strategic markets across Africa and the Middle East.
                  </motion.p>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.p variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
                    Our business is built around delivering reliable equipment, flexible rental solutions and responsive customer service to contractors, logistics providers, EPC companies and industrial operators working in demanding environments where reliability, safety and operational performance are essential.
                  </motion.p>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.p variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
                    Whether supporting local operations within the UAE or international projects across strategic markets, Renvik is committed to helping customers improve productivity, reduce operational downtime and complete projects safely, efficiently and on schedule.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section (Testimonials) */}
      <section className="py-24 bg-[#f0f4f8] overflow-hidden relative border-b border-outline-variant/30">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-primary mb-6"><TypewriterText text="Trusted by Businesses Like Yours" /></h2>
          <p className="text-secondary text-lg">Real stories from operators and industrial leaders who grow with us.</p>
        </div>

        <div className="relative w-full overflow-hidden flex pb-8">
          <div className="flex gap-8 animate-scroll pl-8">
            {[...testimonials, ...testimonials].map((review, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-8 w-[350px] md:w-[400px] flex-shrink-0 shadow-sm border border-outline-variant/30 relative flex flex-col justify-between"
              >
                {/* Large Quotation Mark */}
                <div className="absolute top-6 right-6 opacity-[0.03] text-primary">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>

                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 text-[#b87000]">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-secondary italic text-lg leading-relaxed mb-8 relative z-10 font-body">
                    "{review.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full border-2 border-outline-variant/30 flex items-center justify-center font-bold text-xl text-primary bg-surface flex-shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-headline">{review.name}</h4>
                    <p className="text-xs text-secondary font-medium tracking-wide mt-0.5">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Renvik */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6"><TypewriterText text="More Than Equipment Rental" /></h2>
              <div className="text-lg text-primary/80 mb-8 leading-relaxed min-h-[84px]">
                <TypewriterText text="Choosing the right equipment rental partner means choosing a company capable of understanding your project, your schedule and your operational objectives." speed={15} />
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                  hidden: {}
                }}
                className="space-y-6 font-body font-medium text-primary/80"
              >
                <div className="overflow-hidden py-1">
                  <motion.li variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div className="pt-2">Modern and continuously expanding fleet</div>
                  </motion.li>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.li variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="pt-2">Flexible short-term and long-term contracts</div>
                  </motion.li>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.li variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div className="pt-2">Fast equipment mobilization</div>
                  </motion.li>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.li variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div className="pt-2">Professional technical support</div>
                  </motion.li>
                </div>
              </motion.ul>
              <div className="mt-10">
                <Link to="/about" className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-8 font-headline font-bold text-white transition-colors hover:bg-[#142a4f]">
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="reveal-on-scroll order-1 lg:order-2">
              <img src="/images/customer_support.webp" alt="Customer Support" loading="lazy" decoding="async" className="rounded-3xl shadow-xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
