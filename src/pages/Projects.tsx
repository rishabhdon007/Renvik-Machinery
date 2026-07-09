import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="w-full pt-28 pb-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="reveal-on-scroll">
        <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-8 tracking-tight">Projects</h1>
        <h2 className="text-2xl font-headline font-bold text-secondary-container mb-6">Supporting Complex Projects Across Strategic Markets</h2>
      </div>
      
      <div className="space-y-6 font-body text-lg text-on-surface/80 leading-relaxed mb-12 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
        <p>
          Renvik Machinery Rental Services supports industrial, logistics, infrastructure and energy projects requiring reliable heavy equipment and flexible rental solutions.
        </p>
        <p>
          Our equipment can be deployed for short-term site operations, long-term construction programs, heavy transportation assignments, industrial plant activities and cross-border project requirements.
        </p>
        <p>
          We understand that large-scale projects require much more than equipment availability. They require planning, reliability, coordination and the ability to respond quickly when operational conditions change.
        </p>
        <p>
          Renvik works closely with customers to provide equipment solutions aligned with project timelines, technical requirements and commercial objectives.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/30 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
        <h3 className="text-xl font-headline font-bold text-primary mb-6">Our project support includes:</h3>
        <ul className="space-y-4 font-body font-medium text-primary/70">
          {[
            "Heavy equipment rental for infrastructure projects",
            "Industrial and oil & gas project support",
            "Heavy transport and logistics equipment",
            "Lifting and handling equipment",
            "Temporary power solutions",
            "Site support vehicles",
            "Long-term fleet rental for international projects"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-12 text-center reveal-on-scroll" style={{ animationDelay: '300ms' }}>
        <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-primary px-8 font-headline font-bold text-white transition-colors hover:bg-[#142a4f]">
          Request Project Support
        </Link>
      </div>
    </div>
  );
};
