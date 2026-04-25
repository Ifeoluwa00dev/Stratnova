import { useState } from "react";

interface WhatsAppWidgetProps {
  /** Your WhatsApp phone number in international format, no spaces or symbols e.g. "2348012345678" */
  phoneNumber: string;
  /** Pre-filled message the user will see in WhatsApp */
  prefilledMessage?: string;
}

export default function WhatsAppWidget({
  phoneNumber,
  prefilledMessage = "Hi! I'd like to get in touch.",
}: WhatsAppWidgetProps) {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span
        className={`
          whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium
          text-gray-700 shadow-lg border border-gray-100
          transition-all duration-300 ease-out
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Chat with us
      </span>

      {/* Bubble button */}
      <div className="relative flex items-center justify-center">
        {/* Ping animation ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />

        {/* Main bubble */}
        <div
          className={`
            relative flex h-14 w-14 items-center justify-center rounded-full
            bg-[#25D366] shadow-xl
            transition-transform duration-200 ease-out
            ${hovered ? "scale-110" : "scale-100"}
          `}
        >
          <WhatsAppIcon />
        </div>
      </div>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-7 w-7 fill-white"
      aria-hidden="true"
    >
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.829 1.782 6.858L2 30l7.338-1.762A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 2c6.627 0 12 5.373 12 12S22.627 28 16 28a11.93 11.93 0 0 1-6.179-1.723l-.443-.27-4.588 1.104 1.125-4.474-.285-.457A11.93 11.93 0 0 1 4 16C4 9.373 9.373 4 16 4zm-3.707 6.5c-.22 0-.576.083-.878.41-.302.328-1.153 1.126-1.153 2.746s1.18 3.187 1.344 3.408c.165.22 2.31 3.683 5.682 5.016 2.811 1.109 3.382.888 3.993.832.61-.055 1.97-.805 2.248-1.583.278-.778.278-1.445.194-1.584-.083-.138-.303-.22-.633-.386-.33-.165-1.97-.972-2.275-1.082-.303-.11-.524-.165-.744.165-.22.33-.853 1.082-1.045 1.302-.193.22-.386.248-.716.083-.33-.165-1.393-.514-2.654-1.638-.981-.875-1.643-1.956-1.836-2.286-.193-.33-.02-.508.145-.672.149-.148.33-.386.495-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.579-.083-.165-.737-1.793-1.022-2.45-.262-.614-.534-.529-.744-.54l-.633-.01z" />
    </svg>
  );
}