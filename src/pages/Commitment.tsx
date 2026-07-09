import { Link } from "react-router-dom";

export const Commitment = () => {
  return (
    <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-8 tracking-tight reveal-on-scroll">Our Commitment</h1>
      
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30 text-left reveal-on-scroll" style={{ animationDelay: '100ms' }}>
        <p className="text-xl font-headline font-bold text-primary mb-6">
          At Renvik, we measure success through the long-term relationships we build with our customers.
        </p>
        <p className="text-lg font-body text-on-surface/80 leading-relaxed mb-6">
          Our commitment extends beyond equipment rental. We aim to become a reliable business partner by delivering flexible commercial solutions, professional support and dependable machinery that contributes directly to the successful completion of every project.
        </p>
        <p className="text-lg font-body text-on-surface/80 leading-relaxed mb-8">
          As our customers continue to grow, we are committed to expanding our fleet, strengthening our capabilities and investing in new equipment and technologies to meet the evolving needs of the industrial sector.
        </p>
        
        <div className="text-center pt-8 border-t border-outline-variant/30">
          <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-primary px-8 font-headline font-bold text-white transition-colors hover:bg-[#142a4f]">
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
};
