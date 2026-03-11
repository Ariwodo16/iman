import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { RESTAURANT } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#2a1a10] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">Iman</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#dd9b3c]">
              West African Restaurant
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Authentic West African flavors crafted with love, tradition, and the finest ingredients.
            </p>

            <div className="mt-6 flex gap-3">
              {RESTAURANT.instagram && (
                <a
                  href={RESTAURANT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#c97f1e]"
                >
                  <Instagram size={15} />
                </a>
              )}

              {RESTAURANT.facebook && (
                <a
                  href={RESTAURANT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#c97f1e]"
                >
                  <Facebook size={15} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {[
                { label: "Our Menu", href: "/menu" },
                { label: "Catering Services", href: "/catering" },
                { label: "Promotions", href: "/promotions" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm transition-colors hover:text-[#dd9b3c]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Find Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#dd9b3c]" />
                <span>{RESTAURANT.address}</span>
              </div>

              <div className="flex gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#dd9b3c]" />
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="transition-colors hover:text-[#dd9b3c]"
                >
                  {RESTAURANT.phone}
                </a>
              </div>

              <div className="flex gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#dd9b3c]" />
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="transition-colors hover:text-[#dd9b3c]"
                >
                  {RESTAURANT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Iman West African Restaurant. All rights reserved.</p>
          <p>Checkout powered by Square</p>
        </div>
      </div>
    </footer>
  );
}
