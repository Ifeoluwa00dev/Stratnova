const brands = ['Cudium', 'CardVest', 'Atorm', 'Rocktea', 'Salt', 'Tadego'];

export default function LogoScroller() {
  return (
    <section className="py-20 bg-transparent flex flex-col items-center">
      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-10">
        We are Trusted by Industry Leaders
      </p>

      {/* Constrained width container */}
      <div className="relative w-full max-w-2xl overflow-hidden">
        {/* Left fade edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent" />

        {/* Right fade edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent" />

        {/* Scrolling track */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] py-6">
          {/* Original set */}
          {brands.map((brand) => (
            <LogoItem key={`orig-${brand}`} brand={brand} />
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand) => (
            <LogoItem key={`clone-${brand}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoItem({ brand }: { brand: string }) {
  return (
    <span className="flex-shrink-0 px-10 text-4xl font-display font-bold text-white grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 select-none">
      {brand}
    </span>
  );
}