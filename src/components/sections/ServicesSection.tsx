import {
  Monitor,
  TrendingUp,
  Zap,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: <Monitor className="w-10 h-10" style={{ color: "#3B6D11" }} />,
    title: "Build and launch your web",
    desc: "We design and ship modern, fast websites — from landing pages to full platforms — that look great and go live fast.",
    tag: "Ready in days",
    iconBg: "#D4EDBA",
    tagBg: "#D4EDBA",
    tagColor: "#3B6D11",
    accentBg: "#D4EDBA",
    big: true,
  },
  {
    number: "02",
    icon: <TrendingUp className="w-6 h-6" style={{ color: "#185FA5" }} />,
    title: "Get more leads",
    desc: "Targeted funnels that turn visitors into paying customers.",
    tag: "Growth",
    iconBg: "#C8E1F8",
    tagBg: "#C8E1F8",
    tagColor: "#185FA5",
  },
  {
    number: "03",
    icon: <Zap className="w-6 h-6" style={{ color: "#854F0B" }} />,
    title: "Automate your business",
    desc: "Cut manual work with smart automations that run 24/7.",
    tag: "Always on",
    iconBg: "#F8DEB8",
    tagBg: "#F8DEB8",
    tagColor: "#854F0B",
  },
  {
    number: "04",
    icon: <LayoutGrid className="w-6 h-6" style={{ color: "#534AB7" }} />,
    title: "Organize your operations",
    desc: "Structure workflows so nothing falls through the cracks.",
    tag: "Structured",
    iconBg: "#DAD8FC",
    tagBg: "#DAD8FC",
    tagColor: "#534AB7",
  },
  {
    number: "05",
    icon: <Sparkles className="w-6 h-6" style={{ color: "#993556" }} />,
    title: "AI powered growth",
    desc: "Scale smarter with AI tools that predict and accelerate.",
    tag: "AI first",
    iconBg: "#F7D0DF",
    tagBg: "#F7D0DF",
    tagColor: "#993556",
  },
];

function SmallServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 bg-white h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: service.iconBg }}
      >
        {service.icon}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-[10px] tracking-widest uppercase text-gray-400">
          {service.number}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {service.title}
        </h3>
        <p className="text-base text-gray-500 leading-relaxed">{service.desc}</p>
      </div>
      <span
        className="text-[10px] font-medium tracking-wide uppercase px-3 py-1 rounded-full w-fit mt-auto"
        style={{ background: service.tagBg, color: service.tagColor }}
      >
        {service.tag}
      </span>
    </div>
  );
}

export default function ServicesSection() {
  const big = services[0];
  const small = services.slice(1);

  return (
    <section className="py-0 px-0 max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Big card — left, spans 2 rows */}
        <div className="row-span-2 border border-gray-200 rounded-2xl p-10 flex flex-col justify-end bg-white relative overflow-hidden min-h-[380px] md:min-h-[480px] shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Decorative accent */}
          <div
            className="absolute top-0 right-0 w-36 h-36 rounded-bl-full opacity-40"
            style={{ background: big.accentBg }}
          />

          {/* Icon */}
          <div
            className="absolute top-8 left-8 w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: big.iconBg }}
          >
            {big.icon}
          </div>

          {/* Content */}
          <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2">
            {big.number}
          </p>
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug mb-3">
            {big.title}
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            {big.desc}
          </p>
          <span
            className="text-[10px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full w-fit"
            style={{ background: big.tagBg, color: big.tagColor }}
          >
            {big.tag}
          </span>
        </div>

        {/* 4 small cards — right side, 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {small.map((s) => (
            <SmallServiceCard key={s.number} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}