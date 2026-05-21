import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Nav } from "@/app/components/Nav";
import { RevealObserver } from "@/app/components/RevealObserver";
import { StatCounter } from "@/app/components/StatCounter";
import heroBg from "@/app/assets/hero_bg.png";
import hotelImg from "@/app/assets/hotel.png";
import travelAgencyImg from "@/app/assets/travelagency.png";
import beyondLaunchImg from "@/app/assets/beyond_launch.png";

/* ─── SHARED STYLE TOKENS ───────────────────────────────────── */
const eyebrow =
  "text-[0.68rem] tracking-[0.26em] uppercase text-gold/70 block mb-5";

/* ─── PAGE ──────────────────────────────────────────────────── */
export default async function LocalePage() {
  const [tHero, tStats, tProblems, tSolutions, tWho, tProcess, tBeyond, tCta, tFooter] =
    await Promise.all([
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
    { endNum: 25, startNum: 15, prefix: "15–", suffix: "%", label: tStats("label0") },
    { endNum: 72, startNum: 0,  prefix: "",    suffix: "%", label: tStats("label1") },
    { endNum: 8,  startNum: 0,  prefix: "< ",  suffix: "s", label: tStats("label2") },
  ];

  const problems = [
    { number: "01", title: tProblems("item0title"), desc: tProblems("item0desc") },
    { number: "02", title: tProblems("item1title"), desc: tProblems("item1desc") },
    { number: "03", title: tProblems("item2title"), desc: tProblems("item2desc") },
    { number: "04", title: tProblems("item3title"), desc: tProblems("item3desc") },
  ];

  const solutions = [
    { title: tSolutions("item0title"), desc: tSolutions("item0desc") },
    { title: tSolutions("item1title"), desc: tSolutions("item1desc") },
    { title: tSolutions("item2title"), desc: tSolutions("item2desc") },
    { title: tSolutions("item3title"), desc: tSolutions("item3desc") },
    { title: tSolutions("item4title"), desc: tSolutions("item4desc") },
  ];

  const hotelFeatures = [
    tWho("hotelF0"), tWho("hotelF1"), tWho("hotelF2"), tWho("hotelF3"), tWho("hotelF4"),
  ];

  const agencyFeatures = [
    tWho("agencyF0"), tWho("agencyF1"), tWho("agencyF2"), tWho("agencyF3"), tWho("agencyF4"),
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
        <section
          id="hero"
          aria-label="Hero"
          className="relative min-h-svh flex flex-col items-center justify-center text-center px-6 overflow-hidden"
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
            className="absolute inset-0 bg-gradient-to-b from-green-dark/80 via-green-dark/55 to-green-dark/85"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(46,82,57,0.55) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Eyebrow — anchored near top, not in the centered flow */}
          <p
            className={`${eyebrow} absolute top-[18%] left-1/2 -translate-x-1/2 whitespace-nowrap z-10 mb-0`}
            style={{ animation: "fadeUp 0.8s 0.2s both" }}
          >
            {tHero("eyebrow")}
          </p>

          {/* Main content — vertically centered with bottom clearance for SCROLL */}
          <div className="relative z-10 max-w-4xl mx-auto pb-32">
            <h1
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.93] tracking-[-0.02em] text-cream mb-6"
              style={{ animation: "fadeUp 0.8s 0.4s both" }}
            >
              {tHero("title1")}
              <br />
              {tHero("title2")}{" "}
              <em className="italic text-gold-light">{tHero("titleEm")}</em>
            </h1>
            <p
              className="font-display italic text-[clamp(1rem,2.2vw,1.35rem)] font-light text-cream/75 max-w-lg mx-auto mb-12 leading-[1.8]"
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
                className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-[0.75rem] tracking-[0.15em] uppercase hover:bg-gold hover:text-green-dark transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Start a conversation with WebbingHUB TRAVEL"
              >
                {tHero("cta1")}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#what-we-build"
                className="inline-flex items-center gap-3 px-8 py-4 border border-cream/30 text-cream/80 text-[0.75rem] tracking-[0.15em] uppercase hover:border-cream/55 hover:text-cream transition-all duration-300"
              >
                {tHero("cta2")}
              </a>
            </div>
          </div>

          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            style={{ animation: "fadeUp 0.8s 1.2s both" }}
            aria-hidden="true"
          >
            <span className="text-[0.58rem] tracking-[0.22em] uppercase text-cream/40 mb-1">
              {tHero("scroll")}
            </span>
            <div
              className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
              style={{ animation: "scrollDrop 2s 1.6s infinite" }}
            />
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────── */}
        <div
          className="bg-green-dark border-y border-gold/[0.15] py-10 px-6 md:px-16"
          aria-label="Key statistics"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-gold/20 sm:divide-y-0 sm:divide-x sm:divide-gold/30">
              {stats.map((s) => (
                <div
                  key={s.endNum + s.prefix}
                  className="py-8 sm:py-0 sm:px-10 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0"
                >
                  <StatCounter
                    endNum={s.endNum}
                    startNum={s.startNum}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    duration={1200}
                    className="font-display text-4xl md:text-5xl font-light text-gold block leading-none mb-2"
                  />
                  <p className="text-[0.72rem] tracking-[0.1em] uppercase text-cream/60 leading-[1.6]">
                    {s.label}
                  </p>
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
                  <p className="text-sm text-ink-mid leading-[1.75]">{p.desc}</p>
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
              <span className={`reveal ${eyebrow}`}>{tSolutions("eyebrow")}</span>
              <h2
                id="solutions-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream mb-8"
              >
                {tSolutions("heading")}
                <br />
                <em className="italic text-gold-light">{tSolutions("headingEm")}</em>
              </h2>
              <p className="reveal text-[0.93rem] text-cream/72 leading-[1.8] max-w-sm">
                {tSolutions("body")}
              </p>
            </div>

            <ul className="flex flex-col gap-0" role="list" aria-label="Services">
              {solutions.map((s, i) => (
                <li
                  key={s.title}
                  className="reveal flex gap-5 items-start py-7 border-b border-white/[0.07] last:border-0"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="block text-[0.93rem] font-medium text-cream mb-1">
                      {s.title}
                    </strong>
                    <span className="text-[0.84rem] text-cream/65 leading-[1.8]">
                      {s.desc}
                    </span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hotels card */}
              <article className="reveal group relative bg-cream border border-cream-dark hover:border-green overflow-hidden transition-colors duration-300">
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={hotelImg}
                    alt={tWho("hotelImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="relative p-10">
                  <span
                    className="absolute font-display text-[7rem] font-light text-green/[0.05] bottom-0 right-4 leading-none pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    H
                  </span>

                  <div className="w-10 h-10 border border-green rounded-full flex items-center justify-center mb-8">
                    <svg
                      className="w-[18px] h-[18px] stroke-green"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                    {tWho("hotelTitle")}
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.8] mb-7 relative z-10">
                    {tWho("hotelBody")}
                  </p>

                  <ul className="flex flex-col gap-2" role="list">
                    {hotelFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-[0.82rem] text-green"
                      >
                        <span
                          className="w-3 h-px bg-green flex-shrink-0"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Travel agencies card */}
              <article className="reveal group relative bg-cream border border-cream-dark hover:border-green overflow-hidden transition-colors duration-300">
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={travelAgencyImg}
                    alt={tWho("agencyImageAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="relative p-10">
                  <span
                    className="absolute font-display text-[7rem] font-light text-green/[0.05] bottom-0 right-4 leading-none pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    T
                  </span>

                  <div className="w-10 h-10 border border-green rounded-full flex items-center justify-center mb-8">
                    <svg
                      className="w-[18px] h-[18px] stroke-green"
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

                  <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                    {tWho("agencyTitle")}
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.8] mb-7 relative z-10">
                    {tWho("agencyBody")}
                  </p>

                  <ul className="flex flex-col gap-2" role="list">
                    {agencyFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-[0.82rem] text-green"
                      >
                        <span
                          className="w-3 h-px bg-green flex-shrink-0"
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
                <em className="italic text-gold-light">{tProcess("headingEm")}</em>
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
                  <p className="text-sm text-cream/75 leading-[1.8]">{step.desc}</p>
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
                      <p className="text-sm text-cream/72 leading-relaxed">{p.desc}</p>
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
          className="bg-green-dark py-44 px-6 md:px-16 text-center relative overflow-hidden"
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none"
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
            <div className="w-[500px] h-[500px] rounded-full border border-white/[0.05] absolute" />
            <div className="w-[780px] h-[780px] rounded-full border border-white/[0.03] absolute" />
            <div className="w-[1060px] h-[1060px] rounded-full border border-white/[0.018] absolute" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className={`reveal ${eyebrow}`}>{tCta("eyebrow")}</span>
            <h2
              id="cta-heading"
              className="reveal font-display text-[clamp(2.2rem,6vw,4rem)] font-light leading-[1.08] text-cream mb-6"
            >
              {tCta("heading")}
              <br />
              <em className="italic text-gold-light">{tCta("headingEm")}</em>
            </h2>
            <p className="reveal text-[0.93rem] text-cream/70 max-w-md mx-auto mb-14 leading-[1.8]">
              {tCta("body")}
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@webbinghub.io"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-green-dark text-[0.78rem] font-medium tracking-[0.12em] uppercase hover:bg-gold-light transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Send an email to WebbingHUB TRAVEL"
              >
                {tCta("cta1")}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://webbinghub.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-cream/25 text-cream/70 text-[0.78rem] tracking-[0.12em] uppercase hover:border-cream/50 hover:text-cream transition-all duration-300"
                aria-label="Visit WebbingHUB main website (opens in new tab)"
              >
                {tCta("cta2")}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="bg-green-dark border-t border-white/[0.06] px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        role="contentinfo"
      >
        <span className="font-display text-[0.88rem] tracking-[0.15em] uppercase text-cream/45">
          Travel{" "}
          <span className="text-gold" aria-hidden="true">
            |
          </span>{" "}
          by Webbing<span className="text-gold">HUB</span>
        </span>

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
