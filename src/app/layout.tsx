import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const BASE_URL = "https://travel.webbinghub.io";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "TRAVEL by WebbingHUB — Websites & Digital Tools for Travel Agencies and Hotels",
    template: "%s | TRAVEL by WebbingHUB",
  },
  description:
    "Custom websites and digital tools for travel agencies and hotels. Direct booking engines, agent dashboards, WhatsApp integrations — built to grow direct bookings and simplify daily operations.",
  keywords: [
    "travel agency website design",
    "hotel booking website",
    "direct booking engine",
    "travel agency software",
    "hotel management dashboard",
    "hospitality web design",
    "travel tech solutions",
    "agent portal travel",
    "OTA commission reduction",
    "hotel digital tools",
  ],
  authors: [{ name: "WebbingHUB", url: "https://webbinghub.io" }],
  creator: "WebbingHUB",
  publisher: "WebbingHUB",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "TRAVEL by WebbingHUB",
    title:
      "TRAVEL by WebbingHUB — Websites & Digital Tools for Travel Agencies and Hotels",
    description:
      "Custom websites and digital tools for travel agencies and hotels. We build booking engines, agent dashboards, and digital experiences that grow your business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TRAVEL by WebbingHUB — Web Solutions for Travel & Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAVEL by WebbingHUB",
    description:
      "Custom websites and digital tools for travel agencies and hotels.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "TRAVEL by WebbingHUB",
      description:
        "Custom websites and digital tools for travel agencies and hotels",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "WebbingHUB",
      url: "https://webbinghub.io",
      sameAs: ["https://webbinghub.io"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "TRAVEL by WebbingHUB",
      serviceType: "Web Design and Development",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Custom websites and digital tools for travel agencies and hotels — booking engines, agent dashboards, WhatsApp integrations, and more.",
      areaServed: { "@type": "Place", name: "Worldwide" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Travel & Hospitality Web Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Converting Booking Websites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Internal Agent Dashboards",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WhatsApp & Messaging Integrations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital In-Property Tools",
            },
          },
        ],
      },
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
