import { useEffect } from "react";

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
      <div className="reveal-on-scroll">
        <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-lg text-on-surface/70 mb-8 font-body">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-8 font-body text-lg text-on-surface/80 leading-relaxed reveal-on-scroll" style={{ animationDelay: '100ms' }}>
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">1. Introduction</h2>
          <p>At Renvik Machinery Rental Services, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">2. Information We Collect</h2>
          <p>We may collect personal identification information (Name, email address, phone number, etc.) when you request a quotation, contact us, or engage in business with us. We may also collect non-personal identification information about your browser and interaction with our website.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <p>Your information helps us to more effectively respond to your customer service requests and support needs. We use the information to prepare customized rental proposals, improve our website, and send periodic emails regarding your order or other products and services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">4. Data Protection</h2>
          <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-primary mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@renvikservices.com or visit our office in Business Bay, Dubai, United Arab Emirates.</p>
        </section>
      </div>
    </div>
  );
};
