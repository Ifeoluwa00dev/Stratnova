import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with bull image placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://picsum.photos/seed/ox-bull/1920/1080?blur=10" 
          alt="Bull pattern" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="text-xl font-bold font-display tracking-tighter mb-4">
             STRAT<span className="text-brand-gold">NOVA</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight">
            Are You Ready to Grow Your Business?
          </h2>
          
          <p className="text-brand-grey text-lg mb-12">
            Tell Us About Your Project, And We'll Recommend The Right Approach.
          </p>
          
          <Link to="/contact" className="btn-outline group hover:border-brand-gold">
            <ExternalLink className="w-4 h-4 group-hover:text-brand-gold transition-colors" />
            <span className="group-hover:text-brand-gold transition-colors">Get In Touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
