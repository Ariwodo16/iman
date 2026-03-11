import type { Metadata } from "next";
import { Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Promotions & Specials",
  description: "Weekly specials, seasonal promotions, and events at Iman West African Restaurant.",
};

const PROMOS = [
  {
    type: "Weekly Special",
    color: "bg-[#c97f1e]",
    title: "Friday Fish Fry",
    description: "Every Friday: Grilled or fried tilapia with jollof rice and fried plantains for $18.99. Dine in or carry out.",
    dates: "Every Friday",
  },
  {
    type: "Family Deal",
    color: "bg-[#593629]",
    title: "Family Feast Box",
    description: "Feed the whole family! Large jollof rice, choice of 2 soups, assorted proteins, and plantains — serves 4–6. $74.99.",
    dates: "Available daily",
  },
  {
    type: "Lunch Special",
    color: "bg-[#2d5a27]",
    title: "Weekday Lunch Special",
    description: "Monday–Friday 11am–3pm: Get any rice dish + side + drink for $12.99. A complete West African meal at a great price.",
    dates: "Mon–Fri, 11am–3pm",
  },
  {
    type: "Catering Offer",
    color: "bg-[#845235]",
    title: "Spring Catering Discount",
    description: "Book catering for 50+ guests and receive 10% off your total order. Valid for events booked this month.",
    dates: "Limited time",
  },
];

export default function PromotionsPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#2a1a10] px-4 py-16 text-center">
        <p className="font-serif italic text-[#dd9b3c]">— What&apos;s On —</p>
        <h1 className="mt-2 font-serif text-5xl font-bold text-white">Specials & Promotions</h1>
        <p className="mx-auto mt-3 max-w-xl text-white/65">
          Weekly specials, seasonal offerings, and exclusive deals — updated regularly.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROMOS.map((promo) => (
            <article key={promo.title} className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`${promo.color} px-6 py-4`}>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">{promo.type}</span>
                <h2 className="mt-1 font-serif text-2xl font-bold text-white">{promo.title}</h2>
              </div>
              <div className="p-6">
                <p className="leading-relaxed text-[#845235]">{promo.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#9a6640]">
                  <Tag size={13} />
                  {promo.dates}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#fdf6ec] p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-[#2a1a10]">Stay Updated</h3>
          <p className="mt-2 text-sm text-[#845235]">
            Follow us on Instagram and Facebook for daily specials and new menu items.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://instagram.com/imanwestafrican" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-[#c97f1e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a96315] transition-colors">
              Instagram
            </a>
            <a href="https://facebook.com/imanwestafrican" target="_blank" rel="noopener noreferrer"
              className="rounded-full border-2 border-[#c97f1e] px-5 py-2.5 text-sm font-semibold text-[#c97f1e] hover:bg-[#c97f1e] hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
