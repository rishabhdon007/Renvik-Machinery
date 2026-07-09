import { Link } from "react-router-dom";
import { TypewriterText, AnimatedCounter } from "../components/AnimatedElements";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="w-full bg-surface">
      {/* Hero Header */}
      <section className="relative pt-32 pb-48 md:pt-48 md:pb-60 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[center_20%] opacity-50 scale-105 mix-blend-overlay"
          >
            <source src="/aboutusbanner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent h-full" />
          <div className="absolute top-1/4 -right-1/4 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[100px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-1/4 -left-1/4 h-[440px] w-[440px] rounded-full bg-secondary-container/15 blur-[90px] mix-blend-screen pointer-events-none" />
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
                OUR COMPANY
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-headline font-black text-white mb-8 tracking-tight leading-[1.05]"
            >
              <TypewriterText text="About Us" />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl font-body"
            >
              We deliver reliable heavy equipment solutions and build long-term industrial partnerships to support the most demanding projects across the Middle East and Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-surface relative z-40 -mt-16 rounded-t-[3rem]">
        <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start relative">
          
          {/* Left Column: Image & Logo (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-5/12 sticky top-32 hidden lg:block"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant/20 relative aspect-[4/5] bg-white">
              <img 
                src="/images/Foto3.webp" 
                alt="Industrial Operations" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl flex flex-col items-center text-center border border-white/50">
                <img src="/images/logo.webp" alt="Renvik Logo" className="w-32 md:w-40 h-auto mb-4" />
                <h3 className="font-headline font-black text-2xl text-primary leading-tight">RENVIK</h3>
                <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mt-1">Machinery Rental Services</p>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,rgba(24,51,92,0.1)_2px,transparent_2px)] bg-[length:12px_12px] -z-10 rounded-full" />
          </motion.div>

          {/* Mobile Image (Non-sticky) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8 }}
            className="lg:hidden w-full relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant/20 relative aspect-[4/5] bg-white">
              <img src="/images/Foto3.webp" alt="Industrial Operations" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl flex flex-col items-center text-center border border-white/50">
                <img src="/images/logo.webp" alt="Renvik Logo" className="w-24 h-auto mb-2" />
                <h3 className="font-headline font-black text-xl text-primary leading-tight">RENVIK</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Scrolling Text Content */}
          <div className="lg:w-7/12 flex flex-col gap-24 lg:gap-32 pb-12">
            
            {/* Section 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center lg:min-h-[50vh]"
            >
              <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-primary mb-8 leading-tight">
                Building Long-Term <br/><span className="text-secondary-container">Industrial Partnerships</span>
              </h2>
              
              <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Renvik Machinery Rental Services was established to provide professional heavy equipment rental services to industrial customers requiring reliability, flexibility and operational excellence.
                </p>
                <p>
                  Headquartered in Iris Bay Tower, Business Bay, Dubai, our company combines the strategic advantages of the United Arab Emirates with the capability to support customers operating throughout the region and across strategic international markets.
                </p>
                
                <div className="pl-6 border-l-4 border-secondary-container py-2 my-8 bg-primary/[0.02] rounded-r-2xl pr-4">
                  <p className="font-bold text-primary text-xl italic leading-snug">
                    "Our ambition is to establish long-term partnerships based on trust, professionalism, reliability and consistent service excellence."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 1.5: Industries We Serve */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center lg:min-h-[50vh]"
            >
              <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">Industries We Serve</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-primary mb-8 leading-tight">
                Supporting Major <br/><span className="text-secondary-container">Industrial Sectors</span>
              </h2>
              
              <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                <p>
                  Renvik provides equipment rental solutions for customers operating in:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 font-headline font-bold text-primary/90">
                {[
                  "Oil & Gas", "Construction", "Infrastructure", "Logistics",
                  "Heavy Transportation", "Mining", "Marine & Ports", "Power Generation",
                  "Renewable Energy", "Industrial Plants", "Government Projects", 
                  "EPC Contractors", "Manufacturing", "Engineering Companies"
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-outline-variant/20 hover:border-secondary-container/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-secondary-container flex-shrink-0" />
                    <span className="text-sm md:text-base">{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center lg:min-h-[50vh]"
            >
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-8 leading-tight">
                Global Reach & Expertise
              </h2>
              <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                <p>
                  While serving projects across the UAE, Renvik also supports industrial developments throughout strategic markets in Africa and the Middle East, providing heavy equipment rental solutions tailored to the specific operational requirements of each customer.
                </p>
                <p>
                  Our management team combines experience in heavy transportation, industrial logistics, construction support and project operations. This knowledge allows us to understand complex operational challenges and develop customized rental solutions that maximize efficiency while minimizing operational risk.
                </p>
                <p className="font-medium text-primary">
                  Every project is different. Every customer has different priorities. For this reason, we believe every rental agreement should be tailored to the customer’s specific operational requirements rather than following a standard commercial model.
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-primary px-8 font-headline font-bold text-white transition-all shadow-lg hover:bg-[#142a4f] hover:shadow-xl hover:-translate-y-1">
                  Get in Touch
                </Link>
                <Link to="/fleet" className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white border-2 border-primary/10 px-8 font-headline font-bold text-primary transition-all hover:bg-primary/5 hover:border-primary/20">
                  Explore Our Fleet
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>

    {/* Why Renvik Section - Phinura Style */}
      <div className="w-full bg-[#02182b] py-24 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: office image + floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.35, duration: 1.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative order-2 lg:order-1 mt-6 lg:mt-0"
            >
              <div
                className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/40 lg:max-w-none leading-[0]"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src="/images/whychooseus.webp"
                  alt="Why Choose Renvik"
                  className="block h-full w-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 lg:bottom-8 left-4 lg:left-6 bg-white text-[#02182b] px-6 py-4 lg:px-8 lg:py-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-10"
              >
                <div className="text-4xl lg:text-5xl font-headline font-extrabold leading-none"><AnimatedCounter target={4} duration={2} />+</div>
                <div className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-[#02182b]/60 mt-2">Core Advantages</div>
              </motion.div>
            </motion.div>

            {/* RIGHT: title + feature list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6 leading-tight text-left">
                More Than <span className="text-secondary-container">Equipment Rental</span>
              </h2>
              <p className="text-blue-100/90 text-lg leading-relaxed mb-10 max-w-lg font-body text-left">
                Choosing the right equipment rental partner means choosing a company capable of understanding your project, your schedule and your operational objectives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
                {[
                  { title: "Modern and continuously expanding fleet" },
                  { title: "Flexible short-term & long-term contracts" },
                  { title: "Fast equipment mobilization" },
                  { title: "Competitive commercial solutions" },
                  { title: "Professional technical support" },
                  { title: "Experienced management team" },
                  { title: "International project capability" },
                  { title: "High safety standards" },
                  { title: "Reliable maintenance" },
                  { title: "Long-term partnership approach" },
                  { title: "Responsive customer service" }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-headline font-bold text-sm leading-tight">{feature.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-white/80 font-body text-base leading-relaxed mt-10 mb-8">
                Our objective is to become a trusted extension of our customers’ operations by providing equipment that performs when it matters most.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <Link to="/about" className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-secondary-container px-8 font-headline font-bold text-[#02182b] transition-all shadow-lg hover:bg-white hover:scale-[1.02]">
                  Learn About Us
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Safety & Quality Section */}
      <div className="w-full py-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">SAFETY & QUALITY</span>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-6"><TypewriterText text="Core Principles of Our Business" /></h2>
            
            <div className="space-y-4 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>
                Every piece of equipment supplied by Renvik undergoes regular inspection, preventive maintenance and operational testing before delivery.
              </p>
              <p>
                Our commitment to quality helps customers reduce downtime, improve operational efficiency and maintain the highest safety standards throughout the duration of every project.
              </p>
              <p className="font-bold text-primary italic border-l-4 border-secondary-container pl-4 mt-4">
                We believe equipment reliability is fundamental to project success.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video relative">
              <img src="/images/Foto4.webp" alt="Safety and Quality" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="w-full py-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video relative">
              <img src="/images/customer_support.webp" alt="Our Commitment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
          >
            <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">OUR COMMITMENT</span>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-6"><TypewriterText text="Measuring Success Through Relationships" /></h2>
            
            <div className="space-y-4 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>
                At Renvik, we measure success through the long-term relationships we build with our customers. Our commitment extends beyond equipment rental.
              </p>
              <p>
                We aim to become a reliable business partner by delivering flexible commercial solutions, professional support and dependable machinery that contributes directly to the successful completion of every project.
              </p>
              <p>
                As our customers continue to grow, we are committed to expanding our fleet, strengthening our capabilities and investing in new equipment and technologies to meet the evolving needs of the industrial sector.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
