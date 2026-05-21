"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-green-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10"
          : "py-6 bg-transparent"
      }`}
    >
      <Link href="/" aria-label="TRAVEL by WebbingHUB — homepage">
        <span className="font-display text-base md:text-lg tracking-[0.15em] text-cream uppercase select-none">
          Travel{" "}
          <span className="text-gold font-semibold" aria-hidden="true">
            |
          </span>{" "}
          by Webbing
          <span className="text-gold font-semibold">HUB</span>
        </span>
      </Link>

      <a
        href="https://webbinghub.io"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-[0.72rem] tracking-[0.14em] uppercase text-cream/60 hover:text-cream transition-colors duration-200"
        aria-label="Visit WebbingHUB main website (opens in new tab)"
      >
        <span
          className="w-5 h-px bg-gold flex-shrink-0"
          aria-hidden="true"
        />
        Visit WebbingHUB
      </a>
    </header>
  );
}
