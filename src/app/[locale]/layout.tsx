import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

const BASE_URL = "https://travel.webbinghub.io";

const localeMetadata: Record<
  string,
  {
    title: string;
    description: string;
    locale: string;
  }
> = {
  en: {
    title: "TRAVEL by WebbingHUB — Websites & Digital Tools for Travel Agencies and Hotels",
    description:
      "Custom websites and digital tools for travel agencies and hotels. Direct booking engines, agent dashboards, WhatsApp integrations — built to grow direct bookings and simplify daily operations.",
    locale: "en_US",
  },
  fr: {
    title: "TRAVEL par WebbingHUB — Sites Web et Outils Numériques pour Agences de Voyage et Hôtels",
    description:
      "Sites web personnalisés et outils numériques pour les agences de voyage et les hôtels. Moteurs de réservation directs, tableaux de bord d'agents, intégrations WhatsApp.",
    locale: "fr_FR",
  },
  es: {
    title: "TRAVEL por WebbingHUB — Sitios Web y Herramientas Digitales para Agencias de Viajes y Hoteles",
    description:
      "Sitios web personalizados y herramientas digitales para agencias de viajes y hoteles. Motores de reserva directa, paneles de agentes, integraciones de WhatsApp.",
    locale: "es_ES",
  },
  de: {
    title: "TRAVEL von WebbingHUB — Websites und digitale Tools für Reisebüros und Hotels",
    description:
      "Maßgeschneiderte Websites und digitale Tools für Reisebüros und Hotels. Direktbuchungs-Engines, Agent-Dashboards, WhatsApp-Integrationen.",
    locale: "de_DE",
  },
  ro: {
    title: "TRAVEL de WebbingHUB — Site-uri Web și Instrumente Digitale pentru Agenții de Călătorii și Hoteluri",
    description:
      "Site-uri web personalizate și instrumente digitale pentru agenții de călătorii și hoteluri. Motoare de rezervare directă, panouri de agent, integrări WhatsApp.",
    locale: "ro_RO",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = localeMetadata[locale] || localeMetadata.en;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      locale: metadata.locale,
      alternateLocale: Object.values(localeMetadata)
        .map((m) => m.locale)
        .filter((l) => l !== metadata.locale),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
