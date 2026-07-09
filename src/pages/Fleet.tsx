import { motion } from "framer-motion";
import { TypewriterText } from "../components/AnimatedElements";

export const Fleet = () => {
  const equipment = [
    { name: "Tractor Heads", desc: "Reliable heavy-duty tractor units designed for demanding transportation operations.", img: "/images/fleet_tractor.png" },
    { name: "Prime Movers", desc: "High-performance prime movers engineered for long-distance heavy haulage.", img: "/images/fleet_prime.png" },
    { name: "Flatbed Trailers", desc: "Ideal for transporting industrial materials, steel structures and project cargo.", img: "/images/fleet_flatbed.png" },
    { name: "Low Bed Trailers", desc: "Designed for oversized equipment and abnormal load transportation.", img: "/images/fleet_lowbed.png" },
    { name: "Hydraulic Modular Trailers", desc: "Multi-axle transport systems suitable for exceptionally heavy cargo.", img: "/images/fleet_hydraulic.png" },
    { name: "Goldhofer Modular Systems", desc: "Specialized transport equipment for complex heavy haulage operations.", img: "/images/fleet_goldhofer.png" },
    { name: "Mobile Cranes", desc: "Reliable lifting equipment supporting industrial, construction and infrastructure projects.", img: "/images/crane.png" },
    { name: "Forklifts", desc: "Diesel forklifts available in multiple lifting capacities.", img: "/images/forklift.png" },
    { name: "Self Loaders", desc: "Integrated loading and transportation equipment.", img: "/images/Foto6.webp" },
    { name: "Skidding Equipment", desc: "Heavy-duty skidding systems for industrial relocation and specialized transport.", img: "/images/Foto7.webp" },
    { name: "Generator Sets", desc: "Reliable diesel generators available in different power capacities.", img: "/images/fleet_generator.jpg" },
    { name: "Light Vehicles", desc: "Supporting logistics and field operations.", img: "/images/fleet_light_vehicle.jpeg" },
  ];

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
            preload="auto"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="/fleet_banner.mp4" type="video/mp4" />
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
                EQUIPMENT FLEET
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
            >
              <TypewriterText text="Modern Machinery for" /><br className="hidden lg:block"/>
              <TypewriterText text="Industrial Demands." delay={1000} />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-body"
            >
              Our fleet includes a diversified range of heavy equipment suitable for industrial applications throughout construction, logistics, infrastructure and energy sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <div className="w-full pb-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 relative z-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipment.map((item, i) => (
          <div key={i} className="group overflow-hidden bg-white rounded-3xl shadow-sm border border-outline-variant/30 hover:shadow-xl hover:border-primary/20 transition-all flex flex-col h-full reveal-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="h-56 overflow-hidden relative">
              <img src={item.img} alt={item.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold font-headline text-primary mb-4 group-hover:text-secondary-container transition-colors">{item.name}</h3>
              <p className="text-on-surface/70 font-body leading-relaxed flex-grow">{item.desc}</p>
              
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-outline-variant/30">
                <a 
                  href={`https://wa.me/971555853160?text=${encodeURIComponent(`Hello, I am interested in renting: ${item.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center h-12 px-4 rounded-xl bg-primary text-white font-bold font-headline text-sm transition-colors hover:bg-[#142a4f]"
                >
                  Get Quote
                </a>
                <a 
                  href={`https://wa.me/971555853160?text=${encodeURIComponent(`Hello, I am interested in renting: ${item.name}`)}`}
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
      </div>
      </div>
    </div>
  );
};
