import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import { CateringForm } from "@/components/forms/CateringForm";
import { RESTAURANT } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Book Iman West African Restaurant for your next event. Weddings, birthdays, corporate events — authentic West African catering in the Atlanta area.",
};

const PACKAGES = [
  {
    name: "The Gathering",
    guests: "20–50 guests",
    price: "Starting at $18/person",
    description: "Perfect for intimate celebrations and family events.",
    popular: false,
    includes: [
      "Choice of 2 rice dishes",
      "Choice of 2 soups or stews",
      "Assorted proteins",
      "Sides & fried plantains",
      "Soft drinks included",
    ],
  },
  {
    name: "The Celebration",
    guests: "50–150 guests",
    price: "Starting at $22/person",
    description: "Our most popular package for weddings and large parties.",
    popular: true,
    includes: [
      "3 rice dish options",
      "3 soups or stews",
      "Full protein spread",
      "All sides & desserts",
      "Drinks station",
      "Serving staff included",
    ],
  },
  {
    name: "Corporate & Custom",
    guests: "Any size",
    price: "Custom pricing",
    description: "Fully customized for corporate events and unique occasions.",
    popular: false,
    includes: [
      "Custom menu planning",
      "Dietary accommodations",
      "Setup & breakdown",
      "Branded serving options",
      "Dedicated event coordinator",
    ],
  },
];

export default function CateringPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative flex h-80 items-center justify-center md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80"
          alt="Catering event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#2a1a10]/75" />
        <div className="relative z-10 px-4 text-center text-white">
          <p className="font-serif italic text-[#dd9b3c]">Serve Big</p>
          <h1 className="mt-1 font-serif text-5xl font-bold">Catering Services</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Bringing authentic West African flavors to your most important gatherings.
          </p>
        </div>
      </div>

      {/* Why us */}
      <section className="bg-[#fdf6ec] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-serif italic text-[#c97f1e]">Why Choose Us</p>
              <h2 className="mt-2 font-serif text-4xl font-bold text-[#2a1a10]">
                Events Remembered<br />
                <span className="italic text-[#c97f1e]">Through Food</span>
              </h2>
              <p className="mt-5 leading-relaxed text-[#845235]">
                We&apos;ve catered over 200 events in the Atlanta area — from intimate family dinners
                to 300-person weddings. Our team handles every detail so you can enjoy your celebration.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Fresh ingredients, cooked the day of your event",
                  "Fully customizable menus for all dietary needs",
                  "Professional setup and breakdown included",
                  "Experienced catering staff available",
                  "Serving warmers & presentation equipment provided",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#845235]">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#c97f1e]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=700&q=80"
                alt="Catering spread"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-serif italic text-[#c97f1e]">— Packages —</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#2a1a10]">Catering Packages</h2>
            <p className="mt-3 text-sm text-[#9a6640]">All packages are customizable. Contact us for a personalized quote.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl bg-white p-7 shadow-sm ${
                  pkg.popular ? "ring-2 ring-[#c97f1e]" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c97f1e] px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-xl font-bold text-[#2a1a10]">{pkg.name}</h3>
                <p className="mt-1 font-semibold text-[#c97f1e]">{pkg.price}</p>
                <p className="mt-1 text-xs text-[#9a6640]">{pkg.guests}</p>
                <p className="mt-3 text-sm text-[#845235]">{pkg.description}</p>
                <ul className="mt-5 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#845235]">
                      <CheckCircle size={13} className="mt-0.5 shrink-0 text-[#c97f1e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#fdf6ec] px-4 py-20 sm:px-6 lg:px-8" id="inquiry">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="font-serif italic text-[#c97f1e]">Get a Quote</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#2a1a10]">Request Catering</h2>
            <p className="mt-3 text-sm text-[#9a6640]">
              We&apos;ll follow up within 24 hours. Prefer to talk?{" "}
              <a href={`tel:${RESTAURANT.phoneRaw}`} className="font-semibold text-[#c97f1e] hover:underline inline-flex items-center gap-1">
                <Phone size={12} /> Call us
              </a>
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <CateringForm />
          </div>
        </div>
      </section>
    </div>
  );
}
