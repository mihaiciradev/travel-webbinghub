import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Nav } from "@/app/components/Nav";
import { RevealObserver } from "@/app/components/RevealObserver";
import { StatCounter } from "@/app/components/StatCounter";
import heroBg from "@/app/assets/hero_bg.webp";
import hotelImg from "@/app/assets/hotel.webp";
import travelAgencyImg from "@/app/assets/travelagency.webp";
import beyondLaunchImg from "@/app/assets/beyond_launch.webp";
import logoWebbingHub from "@/app/assets/logo_webbinghub.svg";

/* ─── SHARED STYLE TOKENS ───────────────────────────────────── */
const eyebrow =
  "text-[0.68rem] tracking-[0.26em] uppercase text-gold/70 block mb-5";

/* ─── PAGE ──────────────────────────────────────────────────── */
export default async function LocalePage() {
  const [
    tHero,
    tStats,
    tProblems,
    tSolutions,
    tWho,
    tProcess,
    tBeyond,
    tCta,
    tFooter,
  ] = await Promise.all([
    getTranslations("Hero"),
    getTranslations("Stats"),
    getTranslations("Problems"),
    getTranslations("Solutions"),
    getTranslations("WhoWeServe"),
    getTranslations("Process"),
    getTranslations("BeyondLaunch"),
    getTranslations("CTA"),
    getTranslations("Footer"),
  ]);

  /* ─── DATA built from translations ─────────────────────── */
  const stats = [
    {
      endNum: 25,
      startNum: 15,
      prefix: "15–",
      suffix: "%",
      label: tStats("label0"),
    },
    {
      endNum: 72,
      startNum: 0,
      prefix: "",
      suffix: "%",
      label: tStats("label1"),
    },
    {
      endNum: 8,
      startNum: 0,
      prefix: "< ",
      suffix: "s",
      label: tStats("label2"),
    },
  ];

  const problems = [
    {
      number: "01",
      title: tProblems("item0title"),
      desc: tProblems("item0desc"),
    },
    {
      number: "02",
      title: tProblems("item1title"),
      desc: tProblems("item1desc"),
    },
    {
      number: "03",
      title: tProblems("item2title"),
      desc: tProblems("item2desc"),
    },
    {
      number: "04",
      title: tProblems("item3title"),
      desc: tProblems("item3desc"),
    },
  ];

  const solutions = [
    { title: tSolutions("item0title"), desc: tSolutions("item0desc") },
    { title: tSolutions("item1title"), desc: tSolutions("item1desc") },
    { title: tSolutions("item2title"), desc: tSolutions("item2desc") },
    { title: tSolutions("item3title"), desc: tSolutions("item3desc") },
    { title: tSolutions("item4title"), desc: tSolutions("item4desc") },
  ];

  const hotelFeatures = [
    tWho("hotelF0"),
    tWho("hotelF1"),
    tWho("hotelF2"),
    tWho("hotelF3"),
    tWho("hotelF4"),
  ];

  const agencyFeatures = [
    tWho("agencyF0"),
    tWho("agencyF1"),
    tWho("agencyF2"),
    tWho("agencyF3"),
    tWho("agencyF4"),
  ];

  const processSteps = [
    { num: "01", title: tProcess("item0title"), desc: tProcess("item0desc") },
    { num: "02", title: tProcess("item1title"), desc: tProcess("item1desc") },
    { num: "03", title: tProcess("item2title"), desc: tProcess("item2desc") },
  ];

  const pillars = [
    { num: "01", title: tBeyond("item0title"), desc: tBeyond("item0desc") },
    { num: "02", title: tBeyond("item1title"), desc: tBeyond("item1desc") },
    { num: "03", title: tBeyond("item2title"), desc: tBeyond("item2desc") },
    { num: "04", title: tBeyond("item3title"), desc: tBeyond("item3desc") },
  ];

  return (
    <>
      <RevealObserver />
      <Nav />

      <main id="main-content">
        {/* ── HERO ─────────────────────────────────────────── */}
        {/*
          Three-zone flex column:
            Zone 1 (flex-none) — eyebrow, sits just below the fixed nav
            Zone 2 (flex-1)    — h1 + subtitle + CTAs, vertically centered in
                                  all remaining space; never pushed by SCROLL
            Zone 3 (flex-none) — SCROLL indicator, always at the bottom edge
        */}
        <section
          id="hero"
          aria-label="Hero"
          className="relative min-h-svh flex flex-col overflow-hidden"
        >
          <Image
            src={heroBg}
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-green-dark/85 via-green-dark/60 to-green-dark/90"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, rgba(20,40,28,0.7) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Zone 1 — eyebrow, clears the fixed nav (~72 px) */}
          <div
            className="relative z-10 flex-none flex justify-center pt-[5.5rem] pb-0 px-6"
            style={{ animation: "fadeUp 0.8s 0.2s both" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gold/10 border border-gold/30 hover:border-gold/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold/80">{tHero("eyebrow")}</p>
            </div>
          </div>

          {/* Zone 2 — main content, centres itself in all remaining space */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
            <div className="max-w-4xl mx-auto w-full">
              <h1
                className="font-display text-[clamp(3.2rem,9vw,7rem)] font-light leading-[0.92] tracking-[-0.03em] text-cream mb-8"
                style={{ animation: "fadeUp 0.8s 0.4s both" }}
              >
                {tHero("title1")}
                <br />
                {tHero("title2")}{" "}
                <span className="relative whitespace-nowrap">
                  <em className="italic text-gold-light drop-shadow-lg">{tHero("titleEm")}</em>
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"
                    aria-hidden="true"
                  />
                </span>
              </h1>
              <p
                className="font-sans text-[clamp(1rem,2vw,1.15rem)] font-light text-cream/85 max-w-2xl mx-auto mb-12 leading-[1.8] tracking-[0.005em]"
                style={{ animation: "fadeUp 0.8s 0.6s both" }}
              >
                {tHero("subtitle")}
              </p>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                style={{ animation: "fadeUp 0.8s 0.8s both" }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-green-dark text-[0.8rem] font-semibold tracking-[0.1em] uppercase rounded-lg hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label="Start a conversation with WebbingHUB TRAVEL"
                >
                  {tHero("cta1")}
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </a>
                <a
                  href="#what-we-build"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-cream/40 text-cream/90 text-[0.8rem] font-semibold tracking-[0.1em] uppercase rounded-lg hover:border-gold hover:text-gold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                >
                  {tHero("cta2")}
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Zone 3 — SCROLL indicator, always pinned to the bottom */}
          <div
            className="relative z-10 flex-none flex flex-col items-center gap-2 pb-8"
            style={{ animation: "fadeUp 0.8s 1.2s both" }}
            aria-hidden="true"
          >
            <span className="text-[0.58rem] tracking-[0.22em] uppercase text-cream/50">
              {tHero("scroll")}
            </span>
            <div
              className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
              style={{ animation: "scrollDrop 2s 1.6s infinite" }}
            />
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────── */}
        <div
          className="bg-gradient-to-r from-green-dark via-green-dark/95 to-green-dark border-y border-gold/20 py-12 px-6 md:px-16 backdrop-blur-sm"
          aria-label="Key statistics"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-gold/20 sm:divide-y-0 sm:divide-x sm:divide-gold/25 gap-0">
              {stats.map((s, idx) => (
                <div
                  key={s.endNum + s.prefix}
                  className="group py-10 sm:py-0 sm:px-12 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="text-center">
                    <StatCounter
                      endNum={s.endNum}
                      startNum={s.startNum}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      duration={1200}
                      className="font-display text-5xl md:text-6xl font-light text-gold block leading-none mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-[0.75rem] tracking-[0.12em] uppercase text-cream/65 leading-relaxed font-medium">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROBLEMS ─────────────────────────────────────── */}
        <section
          id="why-it-matters"
          aria-labelledby="problems-heading"
          className="bg-cream py-28 px-6 md:px-16"
        >
          <div className="max-w-6xl mx-auto">
            <span className={`reveal ${eyebrow}`}>{tProblems("eyebrow")}</span>
            <h2
              id="problems-heading"
              className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-ink max-w-lg mb-16"
            >
              {tProblems("heading")}
              <br />
              <em className="italic text-green">{tProblems("headingEm")}</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-dark">
              {problems.map((p) => (
                <article
                  key={p.number}
                  className="group bg-cream hover:bg-green-dark/[0.06] border-l-2 border-gold/30 hover:border-gold p-10 relative transition-colors duration-300"
                >
                  <span
                    className="font-display text-[5rem] font-light text-gold/[0.28] group-hover:text-gold/40 transition-colors duration-300 leading-none block mb-5"
                    aria-hidden="true"
                  >
                    {p.number}
                  </span>
                  <h3 className="font-display text-[1.3rem] font-semibold text-ink mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.75]">
                    {p.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ────────────────────────────────────── */}
        <section
          id="what-we-build"
          aria-labelledby="solutions-heading"
          className="bg-green-dark py-28 px-6 md:px-16 relative overflow-hidden"
        >
          <span
            className="absolute font-display font-light text-white/[0.025] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none tracking-[0.08em] leading-none"
            style={{ fontSize: "clamp(8rem, 22vw, 20rem)" }}
            aria-hidden="true"
          >
            TRAVEL
          </span>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
            <div>
              <span className={`reveal ${eyebrow}`}>
                {tSolutions("eyebrow")}
              </span>
              <h2
                id="solutions-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream mb-8"
              >
                {tSolutions("heading")}
                <br />
                <em className="italic text-gold-light">
                  {tSolutions("headingEm")}
                </em>
              </h2>
              <p className="reveal text-[0.93rem] text-cream/72 leading-[1.8] max-w-sm">
                {tSolutions("body")}
              </p>
            </div>

            <ul
              className="flex flex-col gap-0"
              role="list"
              aria-label="Services"
            >
              {solutions.map((s, i) => (
                <li
                  key={s.title}
                  className="reveal group flex gap-5 items-start py-8 px-5 border-b border-white/10 last:border-0 hover:bg-white/[0.05] rounded-lg transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="w-2 h-2 rounded-full bg-gradient-to-b from-gold to-gold-light mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <strong className="block text-[0.95rem] font-semibold text-cream mb-2 group-hover:text-gold-light transition-colors">
                      {s.title}
                    </strong>
                    <span className="text-[0.85rem] text-cream/70 leading-[1.7] group-hover:text-cream/80 transition-colors">
                      {s.desc}
                    </span>
                  </div>
                  <div
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 flex items-center justify-center text-gold flex-shrink-0 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    →
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── WHO WE SERVE ─────────────────────────────────── */}
        <section
          id="who-we-work-with"
          aria-labelledby="who-heading"
          className="bg-cream-dark py-28 px-6 md:px-16"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className={`reveal ${eyebrow}`}>{tWho("eyebrow")}</span>
              <h2
                id="who-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-ink mx-auto max-w-md"
              >
                {tWho("heading")}
                <br />
                <em className="italic text-green">{tWho("headingEm")}</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hotels card */}
              <article className="reveal group relative bg-cream border border-cream-dark hover:border-gold/40 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105">
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={hotelImg}
                    alt={tWho("hotelImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <div className="relative p-10">
                  <span
                    className="absolute font-display text-[8rem] font-light text-green/[0.08] -bottom-4 -right-2 leading-none pointer-events-none select-none group-hover:text-gold/5 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    H
                  </span>

                  <div className="w-12 h-12 border-2 border-green rounded-full flex items-center justify-center mb-8 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                    <svg
                      className="w-[20px] h-[20px] stroke-green group-hover:stroke-gold transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-ink mb-3 group-hover:text-green transition-colors">
                    {tWho("hotelTitle")}
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.8] mb-7 relative z-10">
                    {tWho("hotelBody")}
                  </p>

                  <ul className="flex flex-col gap-3" role="list">
                    {hotelFeatures.map((f, idx) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-[0.85rem] text-green font-medium transition-all duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span
                          className="w-4 h-px bg-gradient-to-r from-green to-green/30 flex-shrink-0 group-hover:w-6 transition-all duration-300"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Travel agencies card */}
              <article className="reveal group relative bg-cream border border-cream-dark hover:border-gold/40 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105">
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={travelAgencyImg}
                    alt={tWho("agencyImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <div className="relative p-10">
                  <span
                    className="absolute font-display text-[8rem] font-light text-green/[0.08] -bottom-4 -right-2 leading-none pointer-events-none select-none group-hover:text-gold/5 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    T
                  </span>

                  <div className="w-12 h-12 border-2 border-green rounded-full flex items-center justify-center mb-8 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                    <svg
                      className="w-[20px] h-[20px] stroke-green group-hover:stroke-gold transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-ink mb-3 group-hover:text-green transition-colors">
                    {tWho("agencyTitle")}
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.8] mb-7 relative z-10">
                    {tWho("agencyBody")}
                  </p>

                  <ul className="flex flex-col gap-3" role="list">
                    {agencyFeatures.map((f, idx) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-[0.85rem] text-green font-medium transition-all duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span
                          className="w-4 h-px bg-gradient-to-r from-green to-green/30 flex-shrink-0 group-hover:w-6 transition-all duration-300"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section
          id="how-we-work"
          aria-labelledby="process-heading"
          className="bg-green py-28 px-6 md:px-16"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className={`reveal ${eyebrow}`}>{tProcess("eyebrow")}</span>
              <h2
                id="process-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream"
              >
                {tProcess("heading")}
                <br />
                <em className="italic text-gold-light">
                  {tProcess("headingEm")}
                </em>
              </h2>
            </div>

            <ol
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07]"
              role="list"
            >
              {processSteps.map((step, i) => (
                <li
                  key={step.num}
                  className="reveal bg-green px-10 py-10"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span
                    className="font-display text-[4rem] font-light text-white/10 leading-none block mb-5"
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cream/75 leading-[1.8]">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── BEYOND LAUNCH ────────────────────────────────── */}
        <section
          id="beyond-launch"
          aria-labelledby="beyond-launch-heading"
          className="bg-green-dark py-28 px-6 md:px-16 relative overflow-hidden"
        >
          <Image
            src={beyondLaunchImg}
            alt=""
            fill
            className="object-cover opacity-[0.07] mix-blend-multiply"
            aria-hidden="true"
            sizes="100vw"
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <span className={`reveal ${eyebrow}`}>{tBeyond("eyebrow")}</span>
            <h2
              id="beyond-launch-heading"
              className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream mb-6 max-w-xl"
            >
              {tBeyond("heading")}
              <br />
              <em className="italic text-gold">{tBeyond("headingEm")}</em>
            </h2>
            <p className="reveal text-[0.93rem] text-cream/72 max-w-xl mb-20 leading-[1.8]">
              {tBeyond("body")}
            </p>

            <div className="relative">
              <div
                className="hidden md:block absolute top-0 inset-x-0 h-px bg-gold/25"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
                {pillars.map((p, i) => (
                  <div
                    key={p.num}
                    className="reveal group relative pt-0 md:pt-10 md:px-8 first:md:pl-0 last:md:pr-0 border-t border-gold/20 md:border-0 first:border-0 md:first:border-0"
                    style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                  >
                    <div
                      className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-125 transition-all duration-300"
                      aria-hidden="true"
                    />

                    <div className="pt-8 md:pt-0">
                      <span
                        className="font-display text-7xl md:text-8xl font-light text-gold/25 group-hover:text-gold/45 transition-all duration-300 leading-none block mb-3"
                        aria-hidden="true"
                      >
                        {p.num}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-cream mb-3">
                        {p.title}
                      </h3>
                      <p className="text-sm text-cream/72 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          id="contact"
          aria-labelledby="cta-heading"
          className="bg-gradient-to-b from-green-dark via-green-dark to-green-dark/95 py-48 px-6 md:px-16 text-center relative overflow-hidden"
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="cta-dot-grid"
                x="0"
                y="0"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#f7f3ee" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dot-grid)" />
          </svg>

          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[500px] h-[500px] rounded-full border border-white/[0.06] absolute" />
            <div className="w-[780px] h-[780px] rounded-full border border-white/[0.04] absolute" />
            <div className="w-[1060px] h-[1060px] rounded-full border border-white/[0.02] absolute" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className={`reveal ${eyebrow}`}>{tCta("eyebrow")}</span>
            <h2
              id="cta-heading"
              className="reveal font-display text-[clamp(2.3rem,7vw,4.2rem)] font-light leading-[1.05] text-cream mb-8 drop-shadow-lg"
            >
              {tCta("heading")}
              <br />
              <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-light">{tCta("headingEm")}</em>
            </h2>
            <p className="reveal text-[0.96rem] text-cream/75 max-w-xl mx-auto mb-16 leading-[1.8] font-light">
              {tCta("body")}
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="mailto:sales@webbinghub.io"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold text-green-dark text-[0.8rem] font-bold tracking-[0.12em] uppercase rounded-lg hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)] hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Send an email to WebbingHUB TRAVEL"
              >
                {tCta("cta1")}
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
              <a
                href="https://webbinghub.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-cream/30 text-cream text-[0.8rem] font-bold tracking-[0.12em] uppercase rounded-lg hover:border-gold hover:text-gold hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm"
                aria-label="Visit WebbingHUB main website (opens in new tab)"
              >
                {tCta("cta2")}
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">↗</span>
              </a>
            </div>

            <p className="reveal text-[0.75rem] text-cream/50 mt-10 tracking-wider">
              ✓ Response within 24 hours
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="bg-green-dark border-t border-white/[0.06] px-6 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-8"
        role="contentinfo"
      >
        <a
          href="https://webbinghub.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-80 transition-opacity duration-200"
          aria-label="Visit WebbingHUB main website"
        >
          <Image
            src={logoWebbingHub}
            alt="WebbingHUB TRAVEL"
            width={200}
            height={40}
            className="h-10 w-auto filter brightness-90 hover:brightness-100 transition-all duration-200"
            priority
          />
        </a>

        <nav aria-label="Footer navigation">
          <a
            href="https://webbinghub.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] tracking-[0.14em] uppercase text-cream/35 hover:text-gold transition-colors duration-200"
            aria-label="Visit WebbingHUB main website"
          >
            {tFooter("link")}
          </a>
        </nav>
      </footer>
    </>
  );
}
