import React from 'react';
import { Link } from "react-router-dom"
import { Bot, HeadphonesIcon, FileText, Workflow, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbot",
    desc: "We build intelligent chatbots that engage your visitors 24/7 — answering questions, qualifying leads, and guiding users through your funnel without human intervention."
  },
  {
    icon: HeadphonesIcon,
    title: "AI Customer Support",
    desc: "We deploy AI-powered support systems that handle customer queries instantly and accurately — reducing response times, cutting costs, and keeping customers satisfied around the clock."
  },
  {
    icon: FileText,
    title: "AI Content Generation System",
    desc: "We build custom AI content pipelines that produce on-brand copy, product descriptions, social posts, and more — at scale, consistently, and faster than any manual process."
  },
  {
    icon: Workflow,
    title: "Workflow Automation (Zapier, n8n)",
    desc: "We automate your repetitive business processes using Zapier and n8n — connecting your tools, eliminating manual tasks, and freeing your team to focus on what actually matters."
  }
]

const ArtificialIntelligence = () => {
  return (
    <div>
      <div className="pt-20">
        {/* Header */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
            Artificial Intelligence
          </h1>
          <p className="text-brand-grey text-lg max-w-2xl relative z-10">
            We integrate intelligent AI solutions into your business — from chatbots and automated support to content systems and workflow automation that work while you sleep.
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

export default ArtificialIntelligence