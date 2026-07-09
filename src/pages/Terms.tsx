import { useEffect } from "react";

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
      <div className="reveal-on-scroll">
        <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-8 tracking-tight">Terms and Conditions</h1>
        <p className="text-lg text-on-surface/70 mb-8 font-body">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-8 font-body text-lg text-on-surface/80 leading-relaxed reveal-on-scroll" style={{ animationDelay: '100ms' }}>
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">1. Agreement to Terms</h2>
          <p>By accessing our website and utilizing our equipment rental services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">2. Rental Agreements</h2>
          <p>All equipment rentals are subject to a formal commercial agreement outlining specific operational requirements, rental periods, and technical obligations. Website quotations are estimates and do not constitute a binding contract until signed by both parties.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">3. Equipment Use and Liability</h2>
          <p>Clients are responsible for ensuring that all equipment is operated by certified professionals and in accordance with local safety regulations. Renvik guarantees the mechanical integrity of the equipment at the time of delivery; however, operational liability during the rental period falls to the client.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">4. Intellectual Property</h2>
          <p>The content, organization, graphics, design, compilation, and other matters related to our website are protected under applicable copyrights and intellectual property rights. The copying, redistribution, or publication of any such matters is strictly prohibited.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">5. Governing Law</h2>
          <p>These terms shall be governed and construed in accordance with the laws of the United Arab Emirates. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>
        </section>
      </div>
    </div>
  );
};
