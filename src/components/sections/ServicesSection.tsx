import { motion, AnimatePresence } from "motion/react";
import {
  Monitor,
  TrendingUp,
  Zap,
  LayoutGrid,
  Sparkles,
  PenTool,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: <Monitor className="w-6 h-6" style={{ color: "#3B6D11" }} />,
    title: "Build and launch your web",
    desc: "We design and ship modern, fast websites — from landing pages to full platforms — that look great and go live fast.",
    tag: "Ready in days",
    tagBg: "#D4EDBA",
    tagColor: "#3B6D11",
    accentColor: "#3B6D11",
    mockup: "https://picsum.photos/seed/web-build/800/500",
    features: ["Custom design & development", "Mobile responsive", "Fast load times", "SEO ready from day one"],
  },
  {
    number: "02",
    icon: <TrendingUp className="w-6 h-6" style={{ color: "#185FA5" }} />,
    title: "Get more leads",
    desc: "Targeted funnels and campaigns that turn the right visitors into real paying customers.",
    tag: "Growth",
    tagBg: "#C8E1F8",
    tagColor: "#185FA5",
    accentColor: "#185FA5",
    mockup: "https://picsum.photos/seed/leads/800/500",
    features: ["Audience targeting", "Conversion optimized funnels", "A/B testing", "Lead tracking & reporting"],
  },
  {
  number: "03",
  icon: <PenTool className="w-6 h-6" style={{ color: "#854F0B" }} />,
  title: "Graphics & Branding",
  desc: "We craft visual identities and design assets that make your brand instantly recognizable and memorable.",
  tag: "Stand out",
  tagBg: "#F8DEB8",
  tagColor: "#854F0B",
  accentColor: "#854F0B",
  mockup: "https://picsum.photos/seed/branding/800/500",
  features: ["Logo & identity design", "Brand style guides", "Marketing creatives", "Social media graphics"],
},
  {
    number: "04",
    icon: <LayoutGrid className="w-6 h-6" style={{ color: "#534AB7" }} />,
    title: "Organize your operations",
    desc: "Structure your workflows, tools, and team processes so nothing falls through the cracks.",
    tag: "Structured",
    tagBg: "#DAD8FC",
    tagColor: "#534AB7",
    accentColor: "#534AB7",
    mockup: "https://picsum.photos/seed/operations/800/500",
    features: ["Process mapping", "Tool stack setup", "Team dashboards", "SOP documentation"],
  },
  {
    number: "05",
    icon: <Sparkles className="w-6 h-6" style={{ color: "#993556" }} />,
    title: "AI powered growth",
    desc: "Leverage AI tools and strategies to scale smarter, predict demand, and stay ahead.",
    tag: "AI first",
    tagBg: "#F7D0DF",
    tagColor: "#993556",
    accentColor: "#993556",
    mockup: "https://picsum.photos/seed/ai-growth/800/500",
    features: ["AI content generation", "Predictive analytics", "Smart segmentation", "Automated insights"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-0 px-0 max-w-full mx-auto space-y-6">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all shadow-2xl bg-white/5 backdrop-blur-sm group"
          >
            <div className={`flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>

              {/* Mockup side — 60% */}
              <div className="relative w-full lg:w-[60%] h-64 lg:h-auto overflow-hidden">
                <img
                  src={service.mockup}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 ${
                    isEven
                      ? "bg-gradient-to-r from-transparent to-brand-dark/80"
                      : "bg-gradient-to-l from-transparent to-brand-dark/80"
                  }`}
                />
                {/* Number badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {service.number}
                  </span>
                </div>
                {/* Tag badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{ background: service.tagBg, color: service.tagColor }}
                  >
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Content side — 40% */}
              <div className="w-full lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center gap-6">
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: service.tagBg }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-base leading-relaxed">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-3"
                    style={{ color: service.tagColor }}
                  >
                    What's included
                  </p>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <ChevronRight
                        size={14}
                        className="flex-shrink-0"
                        style={{ color: service.accentColor }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl text-sm font-bold border border-white/10 text-white hover:border-white/30 transition-all flex items-center justify-center gap-2 bg-white/5"
                >
                  Learn More
                  <ChevronRight size={16} />
                </motion.button>
              </div>

            </div>
          </motion.div>
        );
      })}
    </section>
  );
}