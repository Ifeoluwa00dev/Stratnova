import React from 'react';
import { Link } from "react-router-dom"
import { Globe, Palette, Settings, Code2, CreditCard, ShoppingCart, Layout, Megaphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website",
    desc: "We build professional, high-performing business websites that represent your brand with clarity and convert visitors into customers from day one."
  },
  {
    icon: Palette,
    title: "Website UI/UX Design",
    desc: "We design intuitive, visually compelling interfaces that guide users seamlessly — combining aesthetics with usability to elevate your digital experience."
  },
  {
    icon: Settings,
    title: "Website Management & Maintenance",
    desc: "We keep your website fast, secure, and up to date — handling updates, performance monitoring, and fixes so you can focus on running your business."
  },
  {
    icon: Code2,
    title: "Custom Website",
    desc: "We build fully custom websites tailored to your exact requirements — no templates, no compromises, just a solution built specifically for how you operate."
  },
  {
    icon: CreditCard,
    title: "Backend & Payment Integrations",
    desc: "We connect your website to the tools that power your business — payment gateways, APIs, databases, and third-party platforms, all integrated seamlessly."
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Setup (A-Z)",
    desc: "We build and launch your full ecommerce store from scratch — product pages, checkout, payments, shipping, and everything in between, ready to sell."
  },
  {
    icon: Layout,
    title: "Frontend Website",
    desc: "We craft pixel-perfect, responsive frontend experiences that look and perform beautifully across every device and screen size."
  },
  {
    icon: Megaphone,
    title: "Landing Page",
    desc: "We design high-converting campaign landing pages built with one goal in mind — turning traffic into leads, signups, or sales."
  }
]

const WebDevelopment = () => {
  return (
    <div>
      <div className="pt-20">
        {/* Header */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
            Web Development
          </h1>
          <p className="text-brand-grey text-lg max-w-2xl relative z-10">
            From sleek business websites to full-scale ecommerce platforms, we build fast, modern, and conversion-focused web solutions tailored to your goals.
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

export default WebDevelopment