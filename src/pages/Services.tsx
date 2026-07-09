import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const TypewriterText = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, isInView, speed]);

  return <span ref={ref}>{displayText}</span>;
};

export const Services = () => {
  const services = [
    { 
      title: "Monthly Rental", 
      desc: "Flexible month-to-month equipment rentals for short-term operational requirements.",
      img: "/images/Foto1.webp",
      category: "SHORT-TERM"
    },
    { 
      title: "Long-Term Rental", 
      desc: "Cost-effective, reliable machinery leasing for extended durations.",
      img: "/images/Foto2.webp",
      category: "LONG-TERM"
    },
    { 
      title: "Project-Based Rental", 
      desc: "Complete fleet solutions specifically scaled to your project timeline.",
      img: "/images/Foto3.webp",
      category: "PROJECT"
    },
    { 
      title: "Fleet Rental Agreements", 
      desc: "Comprehensive equipment supply contracts for major industrial operations.",
      img: "/images/Foto4.webp",
      category: "CONTRACT"
    },
    { 
      title: "Dedicated Equipment", 
      desc: "Specialized machinery reserved entirely for your site's exclusive use.",
      img: "/images/Foto6.webp",
      category: "DEDICATED"
    },
    { 
      title: "Fleet Expansion Programs", 
      desc: "Scale your capacity without the capital expenditure of purchasing new assets.",
      img: "/images/Foto7.webp",
      category: "SCALING"
    },
    { 
      title: "Cross-Border Support", 
      desc: "Reliable equipment mobilization across strategic markets in the Middle East and Africa.",
      img: "/images/ourbanner.webp",
      category: "INTERNATIONAL"
    }
  ];

  return (
    <div className="w-full bg-surface">
      {/* Hero Header matching Phinura style */}
      <section className="relative pt-32 pb-48 md:pt-48 md:pb-60 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="/service_page_banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent h-full" />
          <div className="absolute top-1/4 -right-1/4 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[100px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-1/4 -left-1/4 h-[440px] w-[440px] rounded-full bg-secondary-container/15 blur-[90px] mix-blend-screen pointer-events-none" />
          {/* Bottom fade merges with white section below */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[12%] w-full bg-gradient-to-t from-surface via-surface/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-30">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-lg border border-secondary-container/30 bg-secondary-container/10 text-secondary-container text-xs font-bold uppercase tracking-[0.2em] mb-10">
                OUR EXPERTISE
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
            >
              P<span className="text-secondary-container">R</span>emium <span className="text-secondary-container">E</span>quipment <span className="text-secondary-container">N</span>etworks &amp; <br className="hidden lg:block"/>
              <span className="text-secondary-container">V</span>ersatile <span className="text-secondary-container">I</span>ndustrial Wor<span className="text-secondary-container">K</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl font-body"
            >
              Renvik provides professional rental services tailored for projects of every size. Whether you require a single unit or an entire fleet, we deliver operational excellence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-10"
            >
              <Link
                to="/contact"
                className="inline-flex bg-secondary-container text-[#02182b] px-10 py-5 rounded-2xl font-headline font-bold text-xl hover:bg-white transition-colors items-center gap-3 shadow-xl"
              >
                Request a Quotation
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Grid matching Phinura style */}
      <section className="bg-surface pb-32 relative z-40 -mt-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6">
                <TypewriterText text="What We Help You With" />
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed">
                From monthly rentals to cross-border logistical support, our commercial team develops customized rental solutions designed entirely around your operational needs.
              </p>
            </div>
            <div className="hidden border-b border-primary/15 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50 md:block">
              Service Areas
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <Link
                key={i}
                to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group h-full cursor-pointer block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-[2.5rem] border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative h-full flex flex-col hover:-translate-y-2"
                >
                  {/* Image Section Wrapper */}
                  <div className="relative aspect-[16/10]">
                    <div className="absolute inset-0 rounded-t-[2.5rem] overflow-hidden bg-[#02182b]">
                      <img
                        src={service.img}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-primary px-4 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-[0.15em] shadow-sm z-20">
                      {service.category}
                    </div>

                    {/* Floating Icon Box */}
                    <div className="absolute -bottom-7 left-8 z-30 flex h-14 w-14 items-center justify-center rounded-2xl border border-outline-variant/30 bg-white text-secondary-container shadow-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 pt-12 flex flex-col flex-grow">
                    <h3 className="text-2xl font-headline font-bold text-primary mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant font-body text-base leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>

                    <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                      <span className="font-bold font-headline text-primary flex items-center gap-2 group-hover:gap-4 transition-all duration-300 group-hover:text-secondary-container">
                        View Details
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
