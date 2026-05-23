import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { getLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
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
  alternates: {
    canonical: "/",
    languages: {
      en: `${BASE_URL}`,
      fr: `${BASE_URL}/fr`,
      es: `${BASE_URL}/es`,
      de: `${BASE_URL}/de`,
      ro: `${BASE_URL}/ro`,
      "x-default": `${BASE_URL}`,
    },
  },
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
        type: "image/png",
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
        "Custom websites and digital tools for travel agencies and hotels. Booking engines, agent dashboards, and digital experiences built to grow direct bookings.",
      inLanguage: ["en", "fr", "es", "de", "ro"],
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "WebbingHUB",
      url: "https://webbinghub.io",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 250,
        height: 60,
      },
      description:
        "WebbingHUB creates custom websites and digital tools for travel agencies and hotels.",
      sameAs: ["https://webbinghub.io"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "sales@webbinghub.io",
        availableLanguage: ["en", "fr", "es", "de", "ro"],
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "TRAVEL by WebbingHUB",
      serviceType: "Web Design and Development",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Custom websites and digital tools for travel agencies and hotels — booking engines, agent dashboards, WhatsApp integrations, and digital experiences that grow direct bookings.",
      areaServed: { "@type": "Place", name: "Worldwide" },
      knowsLanguage: ["en", "fr", "es", "de", "ro"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Travel & Hospitality Web Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            name: "High-Converting Booking Websites",
            description:
              "Custom-built websites optimized for direct bookings with integrated payment systems and booking engines.",
            itemOffered: {
              "@type": "Service",
              name: "Booking Website Design & Development",
            },
          },
          {
            "@type": "Offer",
            name: "Internal Agent Dashboards",
            description:
              "Streamline operations with custom dashboards for travel agents and hotel staff.",
            itemOffered: {
              "@type": "Service",
              name: "Agent Management Dashboard",
            },
          },
          {
            "@type": "Offer",
            name: "WhatsApp & Messaging Integrations",
            description:
              "Connect with customers through WhatsApp and other messaging platforms.",
            itemOffered: {
              "@type": "Service",
              name: "Messaging & Communication Tools",
            },
          },
          {
            "@type": "Offer",
            name: "Digital In-Property Tools",
            description:
              "Enhance guest experience with digital solutions deployed in properties.",
            itemOffered: {
              "@type": "Service",
              name: "In-Property Digital Solutions",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE_URL}/#what-we-build`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Who We Serve",
          item: `${BASE_URL}/#who-we-work-with`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What web solutions does TRAVEL by WebbingHUB offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We create custom websites and digital tools specifically designed for travel agencies and hotels, including booking engines, agent dashboards, WhatsApp integrations, and digital in-property tools.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use TRAVEL by WebbingHUB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotels and travel agencies looking to increase direct bookings, reduce OTA commission fees, and improve their digital operations.",
          },
        },
        {
          "@type": "Question",
          name: "What languages are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We support English, French, Spanish, German, and Romanian to serve travel businesses worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact us at sales@webbinghub.io to discuss your project requirements and goals.",
          },
        },
      ],
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
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
