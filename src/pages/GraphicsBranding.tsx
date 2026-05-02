import React from 'react';
import { Link } from "react-router-dom"
import { Sparkles, ImagePlay, Layers, RectangleHorizontal, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Logo & Brand Design",
    desc: "We create distinctive logos and cohesive brand identities that communicate who you are at a glance — built to leave a lasting impression across every touchpoint."
  },
  {
    icon: ImagePlay,
    title: "Social Media Content Design",
    desc: "We design scroll-stopping social media visuals that align with your brand and drive engagement — consistently on-brand, always on point."
  },
  {
    icon: Layers,
    title: "Adobe Creative Suite",
    desc: "We leverage the full power of Adobe's creative tools to produce professional-grade design work — from Illustrator and Photoshop to InDesign and beyond."
  },
  {
    icon: RectangleHorizontal,
    title: "Flyer, Banner & Billboard Design",
    desc: "We design bold, attention-grabbing print and digital marketing materials — flyers, brand banners, and billboard visuals that make your message impossible to miss."
  }
]

const GraphicsBranding = () => {
  return (
    <div>
      <div className="pt-20">
        {/* Header */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
            Graphics & Branding
          </h1>
          <p className="text-brand-grey text-lg max-w-2xl relative z-10">
            We shape how your brand looks, feels, and speaks — delivering design work that builds recognition, trust, and a visual identity worth remembering.
          </p>
        </section>

        {/* Subcategories section */}
        <section className="py-24 container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-brand-card p-12 rounded-[40px] border border-white/5 flex flex-col items-center text-center group hover:border-brand-gold/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-6">{service.title}</h3>
                <p className="text-brand-grey mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                  Contact Us <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default GraphicsBranding