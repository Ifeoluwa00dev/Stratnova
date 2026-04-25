import { Megaphone, Search, BarChart3, Globe, Code, PenTool, Hash, MessageSquare, Star, Database, ArrowUpRight } from "lucide-react";
import CTASection from "../components/sections/CTASection";
import EcosystemSection from "../components/sections/EcosystemSection";

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "At Startnova, we use the right digital channels to attract customers, grow visibility, and drive real results for your business." },
  { icon: MessageSquare, title: "Social Media Marketing", desc: "We help you show up consistently on social media, connect with your audience, and turn attention into customers." },
  { icon: BarChart3, title: "Ads Management", desc: "We build, plan and manage ad campaigns that target the right people, control costs, and bring in measurable results." },
  { icon: Search, title: "Search Engine Optimization", desc: "We help your business rank higher on Google, A.I and other search engines so the right customers can find you when they need you." },
  { icon: BarChart3, title: "PPC Marketing", desc: "We run targeted pay-per-click campaigns designed to bring qualified traffic, leads, and sales without wasting your marketing budget." },
  { icon: Globe, title: "Billboard Advertising", desc: "We place your brand on the busiest streets and highways in Nigeria, helping you build awareness, credibility, and market presence." },
  { icon: Code, title: "Website Development", desc: "We build modern conversion-focused websites that are professional, optimized, and guide visitors smoothly from interest to action." },
  { icon: PenTool, title: "Product Design (UI/UX)", desc: "We design user-friendly digital products (Apps and Web) that are simple to use, solve real problems, and keep users engaged." },
  { icon: Star, title: "Branding & Design", desc: "We create clean, unique, and consistent brand visuals, designs, and messaging that help your business stand out amidst competition." },
  { icon: Code, title: "Tech Solutions", desc: "We develop smart technology solutions that ease and streamline your operations to support the growth of your business." },
  { icon: MessageSquare, title: "Corporate Communications", desc: "We handle professional communication and strategy that connects with your customers, partners, stakeholders, and the public at every digital touchpoint." },
  { icon: Globe, title: "Digital PR", desc: "We position your brand in the right corners of the internet to boost credibility, visibility, and positive media attention." },
  { icon: Star, title: "Reputation Management", desc: "We help you monitor, protect, and improve how your brand is perceived digitally so customers feel confident choosing you." },
  { icon: BarChart3, title: "Brand Development", desc: "We help you shape a strong brand identity and strategy that connects with your audience and supports long-term growth." },
  { icon: Database, title: "A.I Solutions", desc: "We craft AI-powered solutions that automate processes, enhance marketing performance, and support business growth." }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-display font-medium mb-6 relative z-10">
          Services
        </h1>
        <p className="text-brand-grey text-lg max-w-2xl relative z-10">
          We help your business grow by building connected digital systems that turn marketing, ads, websites, and tech into a coordinated growth system that drive great results.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-brand-card p-12 rounded-[40px] border border-white/5 flex flex-col items-center text-center group hover:border-brand-gold/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-6">{service.title}</h3>
              <p className="text-brand-grey mb-8 flex-grow leading-relaxed">{service.desc}</p>
              <button className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                Learn More <ArrowUpRight className="w-4 h-4" />
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
