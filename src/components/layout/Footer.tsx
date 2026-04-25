import { Facebook, Instagram, Twitter, Linkedin, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Team", path: "/about#team" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Music2, href: "#" }, // Using music2 for TikTok
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="text-4xl font-bold font-display tracking-tighter mb-12">
            STRAT<span className="text-brand-gold">NOVA</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {footerLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-white/70 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4 mb-12">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-brand-grey text-center">
            Copyright © 2026 Stratnova Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}
