export const Safety = () => {
  return (
    <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-8 tracking-tight reveal-on-scroll">Safety & Quality</h1>
      
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant/30 text-left reveal-on-scroll" style={{ animationDelay: '100ms' }}>
        <p className="text-xl font-headline font-bold text-secondary-container mb-6">
          Safety is one of the core principles of our business.
        </p>
        <p className="text-lg font-body text-on-surface/80 leading-relaxed mb-6">
          Every piece of equipment supplied by Renvik undergoes regular inspection, preventive maintenance and operational testing before delivery.
        </p>
        <p className="text-lg font-body text-on-surface/80 leading-relaxed mb-6">
          Our commitment to quality helps customers reduce downtime, improve operational efficiency and maintain the highest safety standards throughout the duration of every project.
        </p>
        <p className="text-lg font-headline font-bold text-primary italic">
          We believe equipment reliability is fundamental to project success.
        </p>
      </div>
    </div>
  );
};
