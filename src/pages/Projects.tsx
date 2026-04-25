import { ArrowRight } from "lucide-react";
import EcosystemSection from "../components/sections/EcosystemSection";
import CTASection from "../components/sections/CTASection";

const projects = [
  { image: "https://picsum.photos/seed/proj1/800/600", title: "Establishing a Professional Digital Presence for Laide Gbadamosi & Co." },
  { image: "https://picsum.photos/seed/proj2/800/600", title: "How Strategic Marketing Fueled Cudium's Growth" },
  { image: "https://picsum.photos/seed/proj3/800/600", title: "Elevating MRS Oil's Brand Through Strategic Visual Storytelling" },
  { image: "https://picsum.photos/seed/proj4/800/600", title: "How We Launched Tursan Energy into the Nigerian Market" },
  { image: "https://picsum.photos/seed/proj5/800/600", title: "A Nigerian Sleepwear Brand That Made People Come Back: How Alayo Hit 500% ROAS" },
  { image: "https://picsum.photos/seed/proj6/800/600", title: "Bringing the Mega Growth Brand to Life Through Visual Storytelling" },
  { image: "https://picsum.photos/seed/proj7/800/600", title: "Renik Website Project" },
  { image: "https://picsum.photos/seed/proj8/800/600", title: "Renik Energy Branding" },
];

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 relative z-10 max-w-4xl leading-tight">
          Marketing, Advertising <br /> and Tech Projects
        </h1>
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          See how we've helped businesses grow through data-driven marketing, advertising, and tech solutions
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden border border-white/5 mb-6 relative">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-xl font-display font-medium mb-8 leading-tight flex-grow">{project.title}</h3>
              <button className="btn-outline w-full group hover:bg-brand-gold hover:text-black hover:border-brand-gold">
                View Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <EcosystemSection />
      <CTASection />
    </div>
  );
}
