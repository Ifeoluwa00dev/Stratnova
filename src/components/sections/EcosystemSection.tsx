import { ArrowUpRight } from "lucide-react";

export default function EcosystemSection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Beyond Stratnova
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight">
            Explore Our Expanding <br /> Ecosystem
          </h2>
          <p className="text-brand-grey max-w-2xl mx-auto mb-16">
            As we continue to grow, we are building an ecosystem of solutions designed to support businesses, professionals, and the future of digital innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-card p-12 rounded-[40px] border border-white/5 text-left group relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-display font-medium mb-6">Oxtech Academy</h3>
                  <p className="text-brand-grey leading-relaxed mb-8">Oxtech Academy is a digital skills and technology education initiative focused on equipping individuals and organizations with practical knowledge for the modern digital economy.</p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-brand-gold group-hover:text-brand-gold">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
               </div>
            </div>
            <div className="bg-brand-card p-12 rounded-[40px] border border-white/5 text-left group relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-display font-medium mb-6">OxBillboards</h3>
                  <p className="text-brand-grey leading-relaxed mb-8">OxBillboards is our billboard & OOH advertising subsidiary that connects brands with over 10,000 billboard placements across major cities in Nigeria, to increase visibility and reach.</p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-brand-gold group-hover:text-brand-gold">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
