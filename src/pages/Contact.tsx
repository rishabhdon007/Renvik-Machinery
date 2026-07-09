import { motion } from "framer-motion";
import { TypewriterText } from "../components/AnimatedElements";

export const Contact = () => {
  return (
    <div className="w-full bg-surface">
      {/* Hero Header */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center overflow-hidden bg-primary py-24 md:pt-20 md:pb-0">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="/Customer_support_team_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#02182b] via-[#02182b]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm font-bold tracking-widest uppercase">
              <span>HOME</span>
              <span>›</span>
              <span className="text-white">CONTACT</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-secondary-container font-bold tracking-widest text-sm uppercase mb-4 block">CONNECT WITH RENVIK</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight leading-[1.1] max-w-4xl">
              <TypewriterText text="GET IN TOUCH WITH OUR " /><span className="text-secondary-container"><TypewriterText text="RENTAL EXPERTS" delay={1200} /></span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-white/80 font-body text-lg leading-relaxed mb-8"
          >
            <p className="mb-4">
              Reach out for equipment availability, tailored fleet solutions, and project support — our commercial team is ready to prepare a customized rental proposal tailored to your operational requirements.
            </p>
            <p>
              Looking for a trusted heavy machinery partner? Reach out to Renvik Machinery Rental Services. Our specialists are ready to support your needs with reliable solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2.5 bg-white/5 backdrop-blur-sm">
               <span className="w-4 h-4 bg-secondary-container rounded-full flex items-center justify-center">
                 <span className="text-[10px] text-white">✓</span>
               </span>
               <span className="text-white text-xs font-bold tracking-widest uppercase">EXPERT SUPPORT &middot; DIRECT SALES LINE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full py-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 xl:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-outline-variant/30"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-surface px-5 py-4 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-surface px-5 py-4 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-primary">Mobile Number</label>
                <input type="tel" placeholder="+971 50 123 4567" className="w-full bg-surface px-5 py-4 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-primary">Your Message</label>
                <textarea rows={5} placeholder="Tell us a little about your project requirements and location..." className="w-full bg-surface px-5 py-4 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-on-surface-variant/50"></textarea>
              </div>
              
              <div className="pt-4 space-y-4">
                <button type="button" className="w-full bg-[#02182b] text-white py-4 rounded-xl font-bold font-headline text-lg hover:bg-[#032340] transition-colors shadow-lg">
                  Send Message
                </button>
                <div className="relative flex items-center justify-center my-6">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/50"></div></div>
                  <div className="relative bg-white px-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">OR</div>
                </div>
                <a href="https://wa.me/971555853160" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold font-headline text-lg hover:bg-[#20b858] transition-colors shadow-lg flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Consult via WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Cards & Maps */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-6 xl:col-span-5 space-y-4"
          >
            {/* Customer Support Image */}
            <div className="relative w-full h-56 rounded-[1.5rem] overflow-hidden border border-outline-variant/30 shadow-md group">
              <img src="/images/customer_support.webp" alt="Dedicated Customer Support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02182b]/80 via-[#02182b]/30 to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6">
                <div className="text-secondary-container text-xs font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 24/7 Availability
                </div>
                <div className="text-white font-headline font-bold text-xl">Dedicated Support Team</div>
              </div>
            </div>

            {/* Call Us Directly */}
            <a href="tel:+971555853160" className="group flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-[#02182b] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-secondary-container transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Call Us Directly</div>
                  <div className="text-xl font-headline font-bold text-primary group-hover:text-secondary-container transition-colors">+971 555853160</div>
                  <div className="text-sm font-body text-on-surface-variant mt-1">Claudio Necchi: 0563874519</div>
                </div>
              </div>
              <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
            </a>

            {/* Email Us */}
            <a href="mailto:info@renvikservices.com" className="group flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-[#02182b] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-secondary-container transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Email Our Team</div>
                  <div className="text-xl font-headline font-bold text-primary group-hover:text-secondary-container transition-colors">info@renvikservices.com</div>
                </div>
              </div>
              <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
            </a>

            {/* Visit HQ */}
            <a href="https://maps.google.com/?q=Iris+Bay+Tower,+Business+Bay,+Dubai" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-[#02182b] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-secondary-container transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Visit Headquarters</div>
                  <div className="text-xl font-headline font-bold text-primary group-hover:text-secondary-container transition-colors">Business Bay, Dubai</div>
                </div>
              </div>
              <div className="text-primary group-hover:translate-x-1 transition-transform">→</div>
            </a>
            
            {/* Google Maps Embed */}
            <div className="relative w-full h-80 rounded-[2.5rem] overflow-hidden border border-outline-variant/30 shadow-lg mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.6384877717017!2d55.2631522!3d25.1816738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f683416e788eb%3A0xc3c5d6e2e584fcd3!2sIris%20Bay%20Tower!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl border border-white/50 z-10 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-primary font-headline">HQ Main Office</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Office No. 903-94, Iris Bay Tower<br/>Business Bay, Dubai, UAE</p>
                </div>
                <a href="https://maps.google.com/?q=Iris+Bay+Tower,+Business+Bay,+Dubai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-secondary-container transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
