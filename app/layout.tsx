import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyOrderButton } from "@/components/layout/StickyOrderButton";
import { RESTAURANT } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Iman West African Restaurant | Atlanta, GA",
    template: "%s | Iman West African Restaurant",
  },
  description:
    "Authentic West African cuisine in Norcross, GA. Jollof rice, egusi soup, suya, fufu and more — made fresh daily. Dine in, carry out, or book catering.",
  keywords: ["West African restaurant", "Atlanta", "Norcross", "Jollof rice", "African food", "catering", "Georgia", "Nigerian food"],
  openGraph: {
    type: "website",
    siteName: "Iman West African Restaurant",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: RESTAURANT.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: "4920 Snapfinger Woods Dr",
                addressLocality: "Norcross",
                addressRegion: "GA",
                postalCode: "30035",
                addressCountry: "US",
              },
              telephone: RESTAURANT.phone,
              servesCuisine: "West African",
              priceRange: "$$",
              url: "https://www.imanwestafrican.com",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyOrderButton />
      </body>
    </html>
  );
}
