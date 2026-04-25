import { useRef } from "react";

const images = [
  { id: 10, alt: "Mountain landscape" },
  { id: 20, alt: "Forest path" },
  { id: 30, alt: "Ocean waves" },
  { id: 40, alt: "Desert dunes" },
  { id: 50, alt: "City skyline" },
  { id: 60, alt: "Snowy peaks" },
  { id: 70, alt: "Green valley" },
  { id: 80, alt: "Sunset beach" },
];

export default function ImageAutoScroller() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Left fade edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-gray-950" />

      {/* Right fade edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-gray-950" />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex w-max gap-4 animate-scroll-left hover:[animation-play-state:paused]"
      >
        {/* Original set */}
        {images.map((img) => (
          <ImageCard key={`orig-${img.id}`} img={img} />
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((img) => (
          <ImageCard key={`clone-${img.id}`} img={img} />
        ))}
      </div>

      {/* Pause hint */}
      <p className="mt-3 text-center text-xs tracking-wide text-gray-400 dark:text-gray-600 select-none">
        hover to pause
      </p>
    </div>
  );
}

function ImageCard({ img }: { img: { id: number; alt: string } }) {
  return (
    <div className="h-[150px] w-[220px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <img
        src={`https://picsum.photos/id/${img.id}/400/300`}
        alt={img.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}