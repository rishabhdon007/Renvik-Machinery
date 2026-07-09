import { Link } from "react-router-dom";

export const Industries = () => {
  const industries = [
    { name: "Oil & Gas", img: "/images/Foto1.webp" },
    { name: "Construction", img: "/images/Foto2.webp" },
    { name: "Infrastructure", img: "/images/Foto3.webp" },
    { name: "Logistics", img: "/images/Foto4.webp" },
    { name: "Heavy Transportation", img: "/images/Foto6.webp" },
    { name: "Mining", img: "/images/Foto7.webp" },
    { name: "Marine & Ports", img: "/images/ourbanner.webp" },
    { name: "Power Generation", img: "/images/customer_support.webp" },
    { name: "Renewable Energy", img: "/images/Foto1.webp" },
    { name: "Industrial Plants", img: "/images/Foto2.webp" },
    { name: "Government Projects", img: "/images/Foto3.webp" },
    { name: "EPC Contractors", img: "/images/Foto4.webp" },
    { name: "Manufacturing", img: "/images/Foto6.webp" },
    { name: "Engineering Companies", img: "/images/Foto7.webp" }
  ];

  return (
    <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
        <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-6 tracking-tight">Industries We Serve</h1>
        <p className="text-xl font-body text-on-surface/80">Renvik provides equipment rental solutions for customers operating in:</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl shadow-sm border border-outline-variant/30 text-center flex items-center justify-center min-h-[160px] reveal-on-scroll" style={{ animationDelay: `${(i % 4) * 100}ms` }}>
            <img src={ind.img} alt={ind.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/80 transition-colors" />
            <span className="relative z-10 font-headline font-bold text-lg text-white px-4">{ind.name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center reveal-on-scroll">
        <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-secondary-container px-8 font-headline font-bold text-white transition-colors hover:bg-[#e08310]">
          Discuss Your Industry Needs
        </Link>
      </div>
    </div>
  );
};
