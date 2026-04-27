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
    icon: <Monitor className="w-6 h-6" style={{ color: "#3B6D11" }} />,
    title: "Build and launch your web",
    desc: "We design and ship modern, fast websites — from landing pages to full platforms — that look great and go live fast.",
    tag: "Ready in days",
    iconBg: "#EAF3DE",
    tagBg: "#EAF3DE",
    tagColor: "#3B6D11",
    accentBg: "#EAF3DE",
    big: true,
  },
  {
    number: "02",
    icon: <TrendingUp className="w-5 h-5" style={{ color: "#185FA5" }} />,
    title: "Get more leads",
    desc: "Targeted funnels that turn visitors into paying customers.",
    tag: "Growth",
    iconBg: "#E6F1FB",
    tagBg: "#E6F1FB",
    tagColor: "#185FA5",
  },
  {
    number: "03",
    icon: <Zap className="w-5 h-5" style={{ color: "#854F0B" }} />,
    title: "Automate your business",
    desc: "Cut manual work with smart automations that run 24/7.",
    tag: "Always on",
    iconBg: "#FAEEDA",
    tagBg: "#FAEEDA",
    tagColor: "#854F0B",
  },
  {
    number: "04",
    icon: <LayoutGrid className="w-5 h-5" style={{ color: "#534AB7" }} />,
    title: "Organize your operations",
    desc: "Structure workflows so nothing falls through the cracks.",
    tag: "Structured",
    iconBg: "#EEEDFE",
    tagBg: "#EEEDFE",
    tagColor: "#534AB7",
  },
  {
    number: "05",
    icon: <Sparkles className="w-5 h-5" style={{ color: "#993556" }} />,
    title: "AI powered growth",
    desc: "Scale smarter with AI tools that predict and accelerate.",
    tag: "AI first",
    iconBg: "#FBEAF0",
    tagBg: "#FBEAF0",
    tagColor: "#993556",
  },
];

function SmallServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 bg-white h-full">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: service.iconBg }}
      >
        {service.icon}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-[10px] tracking-widest uppercase text-gray-400">
          {service.number}
        </p>
        <h3 className="text-sm font-medium text-gray-900 leading-snug">
          {service.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
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
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Big card — left, spans 2 rows */}
        <div
          className="row-span-2 border border-gray-100 rounded-2xl p-8 flex flex-col justify-end bg-white relative overflow-hidden min-h-[260px] md:min-h-[320px]"
          style={{ minHeight: "320px" }}
        >
          {/* Decorative accent */}
          <div
            className="absolute top-0 right-0 w-36 h-36 rounded-bl-full opacity-40"
            style={{ background: big.accentBg }}
          />

          {/* Icon */}
          <div
            className="absolute top-7 left-7 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: big.iconBg }}
          >
            {big.icon}
          </div>

          {/* Content */}
          <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2">
            {big.number}
          </p>
          <h3 className="text-2xl font-medium text-gray-900 leading-snug mb-3">
            {big.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
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
        <div className="grid grid-cols-2 gap-3">
          {small.map((s) => (
            <SmallServiceCard key={s.number} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}