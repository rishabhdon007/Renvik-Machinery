import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle2, PhoneCall, ArrowRight, ShieldCheck,
  Calendar, Zap, Wrench, TrendingUp,
  DollarSign, Wallet, Headphones, RefreshCw,
  Truck, Layers, Users, Briefcase,
  Settings, Handshake, Shield, Monitor,
  Lock, PenTool, BookOpen, Clock,
  Rocket, Activity, Cpu, AlertCircle,
  Map, Globe, Compass, Box
} from "lucide-react";
import { useEffect } from "react";

// The slugs here must match the generated slugs in Services.tsx
const servicesData: Record<string, any> = {
  "monthly-rental": {
    title: "Monthly Rental",
    subtitle: "Flexible month-to-month equipment rentals for short-term operational requirements.",
    img: "/images/Foto1.webp",
    description: "Our monthly rental solutions are designed for contractors and industrial operators who require high-quality heavy machinery without long-term commitments. Whether you need to cover a temporary spike in workload or replace a piece of equipment during repairs, our flexible monthly contracts give you the exact capacity you need, precisely when you need it.",
    whyChooseUs: [
      { title: "No Long-Term Commitment", desc: "Adapt your fleet size month by month based on active project demands.", icon: Calendar },
      { title: "Instant Availability", desc: "Rapid mobilization ensures you experience zero downtime waiting for equipment.", icon: Zap },
      { title: "All-Inclusive Maintenance", desc: "We handle all routine maintenance and servicing during your rental period.", icon: Wrench },
      { title: "Easy Scaling", desc: "Effortlessly add or return equipment as your operational needs change.", icon: TrendingUp }
    ]
  },
  "long-term-rental": {
    title: "Long-Term Rental",
    subtitle: "Cost-effective, reliable machinery leasing for extended durations.",
    img: "/images/Foto2.webp",
    description: "For extended projects and continuous operations, our long-term rental agreements offer the perfect balance of cost-efficiency and guaranteed reliability. Eliminate the massive capital expenditure of purchasing new assets while securing modern, perfectly maintained equipment for the entire duration of your project.",
    whyChooseUs: [
      { title: "Cost Predictability", desc: "Lock in fixed monthly rates to easily manage and forecast your operational budget.", icon: DollarSign },
      { title: "Zero Capital Expenditure", desc: "Conserve your capital for core business activities instead of depreciating assets.", icon: Wallet },
      { title: "Dedicated Support Team", desc: "Receive priority technical support and dedicated account management.", icon: Headphones },
      { title: "Fleet Upgrade Options", desc: "Swap equipment for newer models during contract renewals.", icon: RefreshCw }
    ]
  },
  "project-based-rental": {
    title: "Project-Based Rental",
    subtitle: "Complete fleet solutions specifically scaled to your project timeline.",
    img: "/images/Foto3.webp",
    description: "Every major industrial or infrastructure project has unique requirements. Our project-based rental solutions provide an entire, custom-curated fleet of heavy machinery aligned perfectly with your project phases. From ground-breaking to final handover, we supply the exact mix of equipment required at every stage.",
    whyChooseUs: [
      { title: "Phased Mobilization", desc: "Equipment is delivered exactly when required by your project schedule.", icon: Truck },
      { title: "Comprehensive Fleet Mix", desc: "From earthmoving to heavy haulage, we provide all necessary machinery.", icon: Layers },
      { title: "On-Site Support Teams", desc: "Option for dedicated on-site technicians for massive project fleets.", icon: Users },
      { title: "Single Supplier Simplicity", desc: "Streamline your procurement and operations with one trusted partner.", icon: Briefcase }
    ]
  },
  "fleet-rental-agreements": {
    title: "Fleet Rental Agreements",
    subtitle: "Comprehensive equipment supply contracts for major industrial operations.",
    img: "/images/Foto4.webp",
    description: "Designed for massive industrial facilities, mining operations, and logistics hubs, our Fleet Rental Agreements provide a turn-key machinery solution. We essentially act as your outsourced equipment department, supplying, maintaining, and managing your entire operational fleet so you can focus entirely on your core business.",
    whyChooseUs: [
      { title: "Total Fleet Management", desc: "We handle procurement, maintenance, compliance, and eventual disposal.", icon: Settings },
      { title: "Strategic Partnership", desc: "We align our fleet strategy with your long-term operational goals.", icon: Handshake },
      { title: "Maximum Uptime Guarantee", desc: "Strict SLAs ensure equipment is always ready for operation.", icon: Shield },
      { title: "Custom Branding", desc: "Option to brand the rental fleet in your company's corporate identity.", icon: Monitor }
    ]
  },
  "dedicated-equipment": {
    title: "Dedicated Equipment",
    subtitle: "Specialized machinery reserved entirely for your site's exclusive use.",
    img: "/images/Foto6.webp",
    description: "Certain industrial operations require highly specialized equipment that cannot be shared or rotated. Our Dedicated Equipment service procures and permanently assigns specific, heavy-duty assets exclusively to your site. This ensures that critical machinery is always available the moment you need it.",
    whyChooseUs: [
      { title: "Guaranteed Availability", desc: "The equipment never leaves your site and is always ready for use.", icon: Lock },
      { title: "Custom Modifications", desc: "Machinery can be modified to meet your specific site requirements.", icon: PenTool },
      { title: "Specialized Training", desc: "We provide in-depth operational training for your on-site teams.", icon: BookOpen },
      { title: "Preventative Maintenance", desc: "Scheduled servicing performed strictly during your operational downtime.", icon: Clock }
    ]
  },
  "fleet-expansion-programs": {
    title: "Fleet Expansion Programs",
    subtitle: "Scale your capacity without the capital expenditure of purchasing new assets.",
    img: "/images/Foto7.webp",
    description: "When your business is growing rapidly, you need machinery to match that growth without drowning in debt. Our Fleet Expansion Programs allow you to instantly scale your operational capacity through strategic, long-term rentals that act and feel like your own equipment, minus the financial burden of ownership.",
    whyChooseUs: [
      { title: "Rapid Growth Enablement", desc: "Take on larger contracts immediately by instantly expanding your fleet.", icon: Rocket },
      { title: "Financial Agility", desc: "Keep debt off your balance sheet while maximizing operational revenue.", icon: Activity },
      { title: "Modern Technology", desc: "Expand using the latest, most efficient, and safest equipment available.", icon: Cpu },
      { title: "Risk Mitigation", desc: "We carry the residual value risk and obsolescence risk of the machinery.", icon: AlertCircle }
    ]
  },
  "cross-border-support": {
    title: "Cross-Border Support",
    subtitle: "Reliable equipment mobilization across strategic markets in the Middle East and Africa.",
    img: "/images/ourbanner.webp",
    description: "Operating across international borders brings immense logistical challenges. Leveraging our strategic headquarters in Dubai, we provide seamless heavy equipment rental and mobilization across the Middle East and Africa. We handle the complex logistics so you can execute your international projects smoothly.",
    whyChooseUs: [
      { title: "Strategic Logistics Hub", desc: "Utilizing Dubai's world-class logistics infrastructure for rapid deployment.", icon: Map },
      { title: "Cross-Border Expertise", desc: "Deep understanding of regional customs, compliance, and transport regulations.", icon: Globe },
      { title: "International Standards", desc: "Maintaining global safety and quality standards regardless of the location.", icon: Compass },
      { title: "Unified Management", desc: "Manage your international equipment needs through a single, central point of contact.", icon: Box }
    ]
  }
};

export const ServiceDetails = () => {
  const { id } = useParams();
  const service = id ? servicesData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="w-full bg-surface">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-48 md:pt-48 md:pb-60 bg-[#02182b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.title}
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02182b] via-[#02182b]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02182b] via-[#02182b]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide uppercase">Renvik Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-headline leading-tight mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-outline-variant max-w-2xl font-light">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative z-20 -mt-16 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-6">
              Overview
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-12">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section (Redesigned) */}
      <section className="py-24 bg-[#0a2540] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ourbanner.webp" 
            alt="Background" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#0a2540]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/80 to-transparent" />
        </div>
        
        {/* Subtle background texture/pattern */}
        <div className="absolute inset-0 opacity-20 z-0 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:flex justify-between items-end gap-8"
          >
            <div>
              <div className="text-blue-300 font-bold text-sm tracking-widest uppercase mb-3">Why Buy From Renvik</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-headline leading-tight">
                Why Businesses<br/><span className="text-[#6495ED]">Choose Us</span>
              </h2>
            </div>
            <p className="text-blue-100/80 text-lg max-w-md mt-6 md:mt-0">
              Partner with a trusted name in the equipment rental industry. We deliver quality, reliability, and value at every step of your project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.whyChooseUs.map((point: any, index: number) => {
              const IconComponent = point.icon || CheckCircle2;
              return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-white/20 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                    <p className="text-blue-100/90 text-base leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
          
          {/* Screenshot CTA Match */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
          >
            <div>
              <div className="text-blue-200/70 text-[10px] font-bold tracking-widest uppercase mb-2">Ready to move forward</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-headline mb-3">
                Ready to Experience the <span className="text-[#6495ED]">Renvik</span> Difference?
              </h3>
              <p className="text-blue-100/90 text-sm md:text-base">
                Get competitive pricing, expert support, and premium equipment solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href={`https://wa.me/971555853160?text=${encodeURIComponent(`Hello, I am interested in getting a quote for your ${service.title} services.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm tracking-wide"
              >
                GET QUOTE
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/971555853160?text=${encodeURIComponent(`Hello, I am interested in your ${service.title} services.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm tracking-wide border border-white/10"
              >
                <PhoneCall className="w-4 h-4" />
                CALL
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Renvik Guarantee Section (Moved to Bottom) */}
      <section className="py-16 bg-white relative z-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-10 md:p-12 rounded-[3rem] border border-outline-variant/30 text-center relative overflow-hidden shadow-sm"
          >
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-headline">
              The Renvik Guarantee
            </h3>
            <p className="text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              All our services are backed by our uncompromising commitment to safety, regular preventive maintenance, and 24/7 professional technical support.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
