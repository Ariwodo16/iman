"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { RESTAURANT } from "@/lib/utils";

const LINKS = [
  { label: "Menu",        href: "/menu" },
  { label: "Catering",   href: "/catering" },
  { label: "Promotions", href: "/promotions" },
  { label: "Contact",    href: "/contact" },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-[#2a1a10]/95 backdrop-blur-md shadow-lg"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold text-white">Iman</span>
          <span className="text-[10px] uppercase tracking-widest text-[#dd9b3c]">
            West African Restaurant
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10",
                pathname === l.href && "bg-white/10"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Phone size={13} />
            {RESTAURANT.phone}
          </a>
          <a
            href={RESTAURANT.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#c97f1e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a96315]"
          >
            Order Online
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-[#2a1a10] px-4 py-4 md:hidden">
          <div className="space-y-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white/60"
            >
              <Phone size={13} /> {RESTAURANT.phone}
            </a>
            <a
              href={RESTAURANT.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-[#c97f1e] px-4 py-3 text-center font-semibold text-white"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
