"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function MenuNav({ categories }: { categories: string[] }) {
  const [active, setActive] = useState(categories[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const cat = categories.find(
              (c) => c.toLowerCase().replace(/\s+/g, "-") === id
            );
            if (cat) setActive(cat);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    categories.forEach((cat) => {
      const id = cat.toLowerCase().replace(/\s+/g, "-");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  function scrollTo(cat: string) {
    const id = cat.toLowerCase().replace(/\s+/g, "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="sticky top-16 z-30 border-b border-[#ede3d8] bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-4xl overflow-x-auto px-4">
        <div className="flex min-w-max gap-1 py-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollTo(cat)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === cat
                  ? "bg-[#c97f1e] text-white"
                  : "text-[#845235] hover:bg-[#fdf6ec]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
