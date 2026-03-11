import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";
import { RESTAURANT, REVIEWS } from "@/lib/utils";

/* ─── Local image paths ───────────────────────────────────── */
const IMAGES = {
  hero: "/images/hero-west-african-platter.jpg",
  aboutKitchen: "/images/kitchen.jpg",
  aboutIngredients: "/images/ingredients.jpg",
  catering: "/images/catering-setup.jpg",
};

const FEATURED = [
  {
    name: "Jollof Rice",
    tagline: "The quintessential West African dish",
    description:
      "Fragrant tomato-based rice slow-cooked with a blend of spices. Served with your choice of protein.",
    badge: "Most Popular",
    img: "/images/jollof-rice.jpg",
  },
  {
    name: "Egusi Soup",
    tagline: "Rich, hearty, deeply satisfying",
    description:
      "Ground melon seeds simmered with leafy greens, palm oil, and your choice of protein.",
    badge: "Chef's Pick",
    img: "/images/egusi-soup.jpg",
  },
  {
    name: "Suya Skewers",
    tagline: "Street food royalty",
    description:
      "Spiced grilled beef skewers with West African suya blend, served with onions and tomatoes.",
    badge: "Fan Favorite",
    img: "/images/suya-skewers.jpg",
  },
];

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="West African food spread"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1a10]/80 via-[#2a1a10]/60 to-[#2a1a10]/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-32 pt-24 text-center text-white sm:px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dd9b3c]/30 bg-[#c97f1e]/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#dd9b3c]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dd9b3c]" />
          Norcross, Georgia
        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          The Taste of
          <br />
          <span className="text-[#dd9b3c]">West Africa</span>,
          <br />
          Right Here in Georgia
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
          Slow-cooked stews, vibrant jollof rice, savory soups — made fresh daily
          with love and tradition.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={RESTAURANT.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#c97f1e] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#c97f1e]/40 transition-all hover:-translate-y-0.5 hover:bg-[#a96315] active:scale-95"
          >
            Order Online <ChevronRight size={18} />
          </a>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
          >
            View Full Menu
          </Link>

          <Link
            href="/catering"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Book Catering →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/40">
        <span>Scroll to explore</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

/* ─── Featured Dishes ─────────────────────────────────────── */
function FeaturedDishes() {
  return (
    <section className="bg-[#fdf6ec] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif italic text-[#c97f1e]">— Must Try —</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#2a1a10]">
              Dishes We&apos;re <span className="italic text-[#c97f1e]">Known For</span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#c97f1e] transition-all hover:gap-2.5"
          >
            View Full Menu{" "}
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#c97f1e] px-3 py-1 text-xs font-bold text-white">
                  {dish.badge}
                </span>
              </div>

              <div className="p-6">
                <p className="font-serif text-sm italic text-[#c97f1e]">
                  {dish.tagline}
                </p>
                <h3 className="mt-1 font-serif text-xl font-bold text-[#2a1a10]">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#845235]">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────── */
function About() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative h-[480px]">
            <div className="absolute left-0 top-0 h-3/4 w-3/4 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={IMAGES.aboutKitchen}
                alt="Iman West African Restaurant kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 35vw"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-2/3 w-1/2 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <Image
                src={IMAGES.aboutIngredients}
                alt="Fresh ingredients used in West African cooking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="absolute bottom-12 left-4 rounded-2xl bg-[#c97f1e] p-5 text-white shadow-xl">
              <div className="font-serif text-3xl font-bold">10+</div>
              <div className="mt-0.5 text-sm text-white/80">Years Serving Atlanta</div>
            </div>
          </div>

          <div>
            <p className="font-serif italic text-[#c97f1e]">— Our Story —</p>
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#2a1a10]">
              Bringing West Africa
              <br />
              <span className="italic text-[#c97f1e]">to Your Table</span>
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-[#845235]">
              <p>
                Iman West African Restaurant was born from a deep love of West
                African culinary tradition. Every recipe has been passed down
                through generations — refined, but never compromised.
              </p>
              <p>
                We source fresh ingredients daily and cook everything from scratch.
                No shortcuts. Just the honest, deeply satisfying flavors of home.
              </p>
              <p>
                Whether you&apos;re from West Africa seeking a taste of home, or
                discovering these flavors for the first time — you are welcome at
                our table.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "Menu Items", value: "40+" },
                { label: "5-Star Reviews", value: "500+" },
                { label: "Events Catered", value: "200+" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-[#fdf6ec] p-4 text-center">
                  <div className="font-serif text-2xl font-bold text-[#c97f1e]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-[#9a6640]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ─────────────────────────────────────────────── */
function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#2a1a10] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #c97f1e 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-serif italic text-[#dd9b3c]">— What People Say —</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-white">
            Loved By Our <span className="italic text-[#dd9b3c]">Community</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-[#dd9b3c] text-[#dd9b3c]" />
            ))}
            <span className="ml-1 text-sm text-white/50">
              4.9 average across 500+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[#dd9b3c] text-[#dd9b3c]" />
                ))}
              </div>

              <p className="my-4 text-sm italic leading-relaxed text-white/75">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-sm font-semibold text-white">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Catering CTA ────────────────────────────────────────── */
function CateringCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#2a1a10]">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.catering}
              alt="West African catering setup"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a1a10]/95 via-[#2a1a10]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl px-8 py-16 md:px-16">
            <span className="inline-block rounded-full bg-[#c97f1e]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#dd9b3c]">
              Catering Services
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
              Feed Your Guests <span className="text-[#dd9b3c]">Authentically</span>
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              From intimate family gatherings to large corporate events — we bring
              the vibrant flavors of West Africa to your celebration.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 rounded-full bg-[#c97f1e] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#a96315]"
              >
                Explore Catering <ChevronRight size={17} />
              </Link>

              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Or call us directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Location & Hours ────────────────────────────────────── */
function LocationHours() {
  return (
    <section className="bg-[#fdf6ec] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="font-serif italic text-[#c97f1e]">Find Us</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#2a1a10]">
              Location & <span className="italic text-[#c97f1e]">Hours</span>
            </h2>

            <div className="mt-6 h-72 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={RESTAURANT.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location"
              />
            </div>

            <div className="mt-5 space-y-3 text-sm text-[#845235]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#c97f1e]" />
                <span>{RESTAURANT.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#c97f1e]" />
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="transition-colors hover:text-[#c97f1e]"
                >
                  {RESTAURANT.phone}
                </a>
              </div>

              <a
                href={RESTAURANT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#c97f1e] transition-all hover:gap-2.5"
              >
                Get Directions <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:pt-14">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#2a1a10]">
              <Clock size={16} className="text-[#c97f1e]" />
              Business Hours
            </div>

            <div className="divide-y divide-[#ede3d8]">
              {RESTAURANT.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="w-32 font-medium text-[#2a1a10]">{h.day}</span>
                  <span className="text-[#845235]">
                    {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <About />
      <Reviews />
      <CateringCTA />
      <LocationHours />
    </>
  );
}