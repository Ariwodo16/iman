import type { Metadata } from "next";
import { ShoppingBag, AlertCircle } from "lucide-react";
import { MENU, RESTAURANT, formatPrice } from "@/lib/utils";
import { MenuNav } from "@/components/menu/MenuNav";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our full West African menu — jollof rice, egusi soup, suya, fufu, plantains and more. Fresh daily in Norcross, GA.",
};

export default function MenuPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative overflow-hidden bg-[#2a1a10] px-4 py-16 text-center">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 60%, #c97f1e 0%, transparent 50%)" }}
        />
        <div className="relative z-10">
          <p className="font-serif italic text-[#dd9b3c]">— Fresh Daily —</p>
          <h1 className="mt-2 font-serif text-5xl font-bold text-white">Our Menu</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/65">
            Everything made from scratch using authentic West African recipes and the finest ingredients.
          </p>
          <a
            href={RESTAURANT.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c97f1e] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#a96315]"
          >
            <ShoppingBag size={17} />
            Order Online
          </a>
        </div>
      </div>

      {/* Note */}
      <div className="bg-amber-50 border-b border-amber-100 px-4 py-3 text-center text-sm text-amber-800">
        <AlertCircle size={14} className="inline mr-1.5 -mt-0.5" />
        Prices and availability may vary. For the most up-to-date info, order online or call us.
      </div>

      {/* Sticky category nav */}
      <MenuNav categories={MENU.map((c) => c.category)} />

      {/* Menu content */}
      <div className="mx-auto max-w-4xl space-y-16 px-4 py-12 sm:px-6">
        {MENU.map((category) => (
          <section
            key={category.category}
            id={category.category.toLowerCase().replace(/\s+/g, "-")}
          >
            <div className="mb-6 flex items-center gap-4">
              <h2 className="font-serif text-2xl font-bold text-[#2a1a10]">{category.category}</h2>
              <div className="h-px flex-1 bg-[#ede3d8]" />
              <span className="text-sm text-[#9a6640]">{category.items.length} items</span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2a1a10]">{item.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#845235]">{item.description}</p>
                  </div>
                  <span className="shrink-0 font-bold text-[#c97f1e]">{formatPrice(item.price)}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-[#ede3d8] bg-[#fdf6ec] px-4 py-12 text-center">
        <p className="text-[#845235]">Ready to order? Place your order online for pickup or delivery.</p>
        <a
          href={RESTAURANT.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#c97f1e] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#a96315]"
        >
          <ShoppingBag size={17} />
          Order Now via Square
        </a>
        <p className="mt-3 text-xs text-[#9a6640]">Secure checkout powered by Square</p>
      </div>
    </div>
  );
}
