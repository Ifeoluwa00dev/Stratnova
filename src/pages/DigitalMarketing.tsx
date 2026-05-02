import React from 'react';
import {Link} from "react-router-dom"
import { MailOpen, Mail,  ContactRound, Globe, ArrowUpRight, SearchCheck } from "lucide-react";


const services = [
  {
    icon: MailOpen,
    title: "Email Marketing",
    desc: "We craft and deliver targeted email campaigns that land in inboxes and drive action — from welcome sequences to re-engagement flows built to convert."
  },
  {
    icon: ContactRound,
    title: "Lead Generation",
    desc: "We identify and attract your ideal customers using data-driven outreach strategies that fill your pipeline with qualified prospects ready to buy."
  },
  {
    icon: Globe,
    title: "Social Media Ads",
    desc: "We design and manage paid ad campaigns across Facebook, Instagram, and beyond — built to maximise reach, lower cost-per-click, and turn scrollers into buyers."
  },
  {
    icon: Mail,
    title: "WhatsApp Marketing Automation",
    desc: "We set up smart WhatsApp flows that engage your audience instantly — from order updates and reminders to personalised promotions delivered right in their chat."
  },
  {
    icon: SearchCheck,
    title: "Search Engine Optimization",
    desc: "We optimise your online presence so the right people find you first — from on-page content and technical SEO to ranking strategies that compound over time."
  }
]

const DigitalMarketing = () => {
  return (
    <div>
        <div className="pt-20">
            {/*Header*/}

            <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
          Digital Marketing 
         </h1> 
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          Your competitors are showing up where your customers are — the question is whether you are too. We build and run data-driven digital marketing systems that grow your visibility, attract the right audience, and turn attention into measurable revenue.
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
              <Link to="/contact"  className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
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

export default DigitalMarketing
