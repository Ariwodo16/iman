"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { RESTAURANT } from "@/lib/utils";

export function StickyOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-4 z-40 md:hidden transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <a
        href={RESTAURANT.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#c97f1e] px-5 py-3.5 font-semibold text-white shadow-xl shadow-[#c97f1e]/40 transition-all active:scale-95 hover:bg-[#a96315]"
      >
        <ShoppingBag size={17} />
        Order Online
      </a>
    </div>
  );
}
