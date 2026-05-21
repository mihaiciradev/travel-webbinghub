"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { routing } from "@/i18n/routing";

const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  ro: "Română",
};

const LANGUAGE_SHORT: Record<string, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  de: "DE",
  ro: "RO",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(next: string) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-[0.65rem] sm:text-[0.7rem] tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-none ${
          isPending ? "opacity-50 pointer-events-none" : ""
        } ${isOpen ? "text-gold" : "text-cream/60 hover:text-cream"}`}
        aria-label={`Language: ${LANGUAGE_NAMES[locale]}. Change language`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {/* Globe icon */}
        <svg
          className="w-3.5 h-3.5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>

        <span>{LANGUAGE_SHORT[locale]}</span>

        {/* Chevron */}
        <svg
          className={`w-2.5 h-2.5 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2.5 min-w-[148px] bg-green-dark border border-white/[0.1] shadow-2xl shadow-black/40 py-1 z-50"
          role="listbox"
          aria-label="Select language"
        >
          {routing.locales.map((loc) => {
            const active = loc === locale;
            return (
              <button
                key={loc}
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(loc)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-[0.68rem] tracking-[0.12em] uppercase transition-colors duration-150 ${
                  active
                    ? "text-gold bg-white/[0.05]"
                    : "text-cream/50 hover:text-cream hover:bg-white/[0.04]"
                }`}
              >
                <span>{LANGUAGE_NAMES[loc]}</span>

                {active && (
                  <svg
                    className="w-3 h-3 text-gold flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
