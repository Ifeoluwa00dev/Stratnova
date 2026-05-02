import React from 'react';
import { Link } from "react-router-dom"
import { LayoutDashboard, Workflow, Briefcase, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Monday CRM & Workflow",
    desc: "We set up and customise Monday.com to match how your team works — building boards, automations, and dashboards that keep every project on track and every stakeholder aligned."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "We map and automate your internal workflows so your team spends less time on repetitive tasks and more time on work that actually moves the business forward."
  },
  {
    icon: Briefcase,
    title: "Business Operations Management",
    desc: "We audit and restructure your business operations — identifying inefficiencies, streamlining processes, and building systems that scale as your team grows."
  },
  {
    icon: Users,
    title: "CRM & Pipeline Setup",
    desc: "We configure your CRM and sales pipeline from the ground up — ensuring your leads, deals, and customer relationships are tracked, managed, and followed up without anything slipping through."
  }
]

const ProjectManagement = () => {
  return (
    <div>
      <div className="pt-20">
        {/* Header */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
            Project Management
          </h1>
          <p className="text-brand-grey text-lg max-w-2xl relative z-10">
            We build the systems, workflows, and operational infrastructure your business needs to run efficiently — so nothing falls through the cracks and every team member knows exactly what to do.
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

export default ProjectManagement