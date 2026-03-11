import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { RESTAURANT } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Iman West African Restaurant. Address, hours, and contact info in Norcross, GA.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#2a1a10] px-4 py-16 text-center">
        <h1 className="font-serif text-5xl font-bold text-white">Contact Us</h1>
        <p className="mt-3 text-white/65">We&apos;d love to hear from you.</p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2a1a10]">Find Us</h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faefd9]">
                  <MapPin size={17} className="text-[#c97f1e]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2a1a10]">Address</div>
                  <p className="mt-0.5 text-sm text-[#845235]">{RESTAURANT.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faefd9]">
                  <Phone size={17} className="text-[#c97f1e]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2a1a10]">Phone</div>
                  <a href={`tel:${RESTAURANT.phoneRaw}`} className="mt-0.5 text-sm text-[#c97f1e] hover:underline">
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faefd9]">
                  <Mail size={17} className="text-[#c97f1e]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2a1a10]">Email</div>
                  <a href={`mailto:${RESTAURANT.email}`} className="mt-0.5 text-sm text-[#c97f1e] hover:underline">
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faefd9]">
                  <Clock size={17} className="text-[#c97f1e]" />
                </div>
                <div>
                  <div className="mb-3 font-semibold text-[#2a1a10]">Hours</div>
                  <div className="space-y-1.5">
                    {RESTAURANT.hours.map((h) => (
                      <div key={h.day} className="flex gap-4 text-sm">
                        <span className="w-28 text-[#2a1a10]">{h.day}</span>
                        <span className="text-[#845235]">
                          {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-64 overflow-hidden rounded-2xl shadow-md">
              <iframe
                src={RESTAURANT.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant map"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2a1a10]">Send a Message</h2>
            <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
