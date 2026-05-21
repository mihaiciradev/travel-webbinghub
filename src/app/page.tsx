import Image from "next/image";
import { Nav } from "@/app/components/Nav";
import { RevealObserver } from "@/app/components/RevealObserver";
import { StatCounter } from "@/app/components/StatCounter";
import heroBg from "@/app/assets/hero_bg.png";
import hotelImg from "@/app/assets/hotel.png";
import travelAgencyImg from "@/app/assets/travelagency.png";
import beyondLaunchImg from "@/app/assets/beyond_launch.png";

/* ─── DATA ─────────────────────────────────────────────────── */

const stats = [
  {
    endNum: 25,
    startNum: 15,
    prefix: "15–",
    suffix: "%",
    label: "average OTA commission lost per booking",
  },
  {
    endNum: 72,
    startNum: 0,
    prefix: "",
    suffix: "%",
    label: "of travel searches start on a phone",
  },
  {
    endNum: 8,
    startNum: 0,
    prefix: "< ",
    suffix: "s",
    label: "before a visitor leaves a slow website",
  },
];

const problems = [
  {
    number: "01",
    title: "Paying commission on bookings you could own directly",
    desc: "Every reservation through Booking.com or Expedia costs you 15–25%. A fast, professional website gives guests the confidence to book with you directly — and keeps that margin in your business.",
  },
  {
    number: "02",
    title: "Running operations through spreadsheets and email",
    desc: "Quotes in email threads, availability in Excel, client history scattered across inboxes. It holds together — until someone is unavailable or a detail slips through, and it costs you a client.",
  },
  {
    number: "03",
    title: "Losing mobile visitors before they even try to book",
    desc: "Over 70% of travel searches happen on a phone. If your booking flow isn't seamless on mobile, those visitors are gone within seconds — and booking with a competitor who made the experience easier.",
  },
  {
    number: "04",
    title: "No system to maintain relationships with past guests",
    desc: "Your most valuable future bookings come from people who already trust you. Without the right tools, those relationships fade after checkout — and so does the repeat business that comes with them.",
  },
];

const solutions = [
  {
    title: "High-converting booking websites",
    desc: "Fast, mobile-first sites built to earn guest trust and drive direct bookings — reducing your dependency on third-party platforms.",
  },
  {
    title: "Internal agent & operations dashboards",
    desc: "Purpose-built tools for managing quotes, reservations, availability, and client files — all in one place, built around how your team actually works.",
  },
  {
    title: "WhatsApp & messaging integrations",
    desc: "Let guests reach you the way they prefer, and automate the repetitive back-and-forth without losing the personal touch.",
  },
  {
    title: "Digital in-property tools",
    desc: "QR menus, guest portals, room service, local guides, and upsell offers — delivered straight to guests' phones, no app download required.",
  },
  {
    title: "Third-party & API integrations",
    desc: "Connect your website with booking engines, payment gateways, channel managers, and any platform already in your workflow.",
  },
];

const hotelFeatures = [
  "Direct booking engine",
  "Guest experience portal",
  "In-room digital tools",
  "Staff operations dashboard",
  "Channel manager integration",
];

const agencyFeatures = [
  "Quote & proposal builder",
  "Agent operations portal",
  "Client relationship tools",
  "Itinerary management",
  "WhatsApp & lead automation",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "We listen first. One conversation to understand your operation, your goals, and where the friction really is.",
  },
  {
    num: "02",
    title: "Scoped proposal",
    desc: "A clear plan — what we'll build, how long it takes, what it costs. No vague estimates, no hidden extras.",
  },
  {
    num: "03",
    title: "Build & launch",
    desc: "We design, develop, and hand over. You get a working product, a trained team, and ongoing support.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Monthly check-ins",
    desc: "A short, structured call every month to review what's working, what's changed in your business, and what should be adjusted on the site.",
  },
  {
    num: "02",
    title: "Performance monitoring",
    desc: "We track load times, booking funnel drop-offs, and mobile behaviour — and flag anything that needs attention before you even notice it.",
  },
  {
    num: "03",
    title: "Feedback loops",
    desc: "Your team and your guests use the site daily. We collect that signal and turn it into concrete improvements.",
  },
  {
    num: "04",
    title: "Rolling iterations",
    desc: "Small, continuous improvements shipped regularly — copy tweaks, speed optimisations, new features as your business evolves.",
  },
];

/* ─── SHARED STYLE TOKENS ───────────────────────────────────── */

const eyebrow =
  "text-[0.68rem] tracking-[0.26em] uppercase text-gold/70 block mb-5";

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function Home() {
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

          <div className="relative z-10 max-w-4xl mx-auto">
            <p
              className={`${eyebrow} mb-8`}
              style={{ animation: "fadeUp 0.8s 0.2s both" }}
            >
              Web solutions for travel &amp; hospitality
            </p>
            <h1
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.93] tracking-[-0.02em] text-cream mb-6"
              style={{ animation: "fadeUp 0.8s 0.4s both" }}
            >
              Websites that work
              <br />
              as hard as{" "}
              <em className="italic text-gold-light">your team does.</em>
            </h1>
            <p
              className="font-display italic text-[clamp(1rem,2.2vw,1.35rem)] font-light text-cream/60 max-w-lg mx-auto mb-12 leading-[1.8]"
              style={{ animation: "fadeUp 0.8s 0.6s both" }}
            >
              Custom booking sites and digital tools for travel agencies and
              hotels — built to convert visitors and simplify operations.
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
                Start a conversation
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#what-we-build"
                className="inline-flex items-center gap-3 px-8 py-4 border border-cream/25 text-cream/70 text-[0.75rem] tracking-[0.15em] uppercase hover:border-cream/50 hover:text-cream transition-all duration-300"
              >
                See what we build
              </a>
            </div>
          </div>

          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            style={{ animation: "fadeUp 0.8s 1.2s both" }}
            aria-hidden="true"
          >
            <div
              className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent"
              style={{ animation: "scrollDrop 2s 1.6s infinite" }}
            />
            <span className="text-[0.6rem] tracking-[0.22em] uppercase text-cream/35">
              Scroll
            </span>
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
                  <p className="text-[0.72rem] tracking-[0.1em] uppercase text-cream/45 leading-[1.6]">
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
            <span className={`reveal ${eyebrow}`}>
              The real cost of a bad website
            </span>
            <h2
              id="problems-heading"
              className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-ink max-w-lg mb-16"
            >
              Does any of this
              <br />
              <em className="italic text-green">sound familiar?</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-dark">
              {problems.map((p) => (
                <article
                  key={p.number}
                  className="group bg-cream hover:bg-green-dark/[0.06] border-l-2 border-gold/30 hover:border-gold p-10 relative transition-colors duration-300"
                >
                  <span
                    className="font-display text-[5rem] font-light text-cream-dark leading-none block mb-5"
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
              <span className={`reveal ${eyebrow}`}>What we build</span>
              <h2
                id="solutions-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream mb-8"
              >
                Technology that serves
                <br />
                <em className="italic text-gold-light">your business.</em>
              </h2>
              <p className="reveal text-[0.93rem] text-cream/60 leading-[1.8] max-w-sm">
                We build custom websites and internal tools for travel agencies
                and hotels — focused on two things: turning more visitors into
                bookings, and making your team&apos;s daily work faster and less
                manual.
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
                    <span className="text-[0.84rem] text-cream/50 leading-[1.8]">
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
              <span className={`reveal ${eyebrow}`}>Who we work with</span>
              <h2
                id="who-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-ink mx-auto max-w-md"
              >
                Built for two kinds of
                <br />
                <em className="italic text-green">hospitality business.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hotels card */}
              <article className="reveal group relative bg-cream border border-cream-dark hover:border-green overflow-hidden transition-colors duration-300">
                {/* Card image */}
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={hotelImg}
                    alt="Luxury boutique hotel exterior at golden hour"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card content */}
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
                    Hotels &amp; Resorts
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.8] mb-7 relative z-10">
                    Whether you run a boutique property or a multi-location
                    resort, we build the digital infrastructure that fills rooms
                    and keeps guests coming back.
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
                {/* Card image */}
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={travelAgencyImg}
                    alt="Modern travel agency office with world map and team at work"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card content */}
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
                    Travel Agencies
                  </h3>
                  <p className="text-sm text-ink-mid leading-[1.8] mb-7 relative z-10">
                    From boutique operators to mid-size agencies managing dozens
                    of agents — we build tools that make your team faster and
                    your clients more satisfied.
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
              <span className={`reveal ${eyebrow}`}>How we work together</span>
              <h2
                id="process-heading"
                className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream"
              >
                Simple process,
                <br />
                <em className="italic text-gold-light">clear outcomes.</em>
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
                  <p className="text-sm text-cream/55 leading-[1.8]">
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
          {/* Background image — very subtle texture */}
          <Image
            src={beyondLaunchImg}
            alt=""
            fill
            className="object-cover opacity-[0.07] mix-blend-multiply"
            aria-hidden="true"
            sizes="100vw"
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <span className={`reveal ${eyebrow}`}>Beyond launch</span>
            <h2
              id="beyond-launch-heading"
              className="reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] text-cream mb-6 max-w-xl"
            >
              We don&apos;t disappear
              <br />
              <em className="italic text-gold">after go-live.</em>
            </h2>
            <p className="reveal text-[0.93rem] text-cream/60 max-w-xl mb-20 leading-[1.8]">
              Most agencies hand over the keys and move on. We treat launch as
              the beginning of the work, not the end.
            </p>

            {/* 4-pillar layout */}
            <div className="relative">
              {/* Connecting line — desktop only */}
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
                    {/* Gold dot sitting on the line — desktop only */}
                    <div
                      className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-125 transition-all duration-300"
                      aria-hidden="true"
                    />

                    {/* Mobile: small top spacing instead of line */}
                    <div className="pt-8 md:pt-0">
                      {/* Decorative number */}
                      <span
                        className="font-display text-7xl md:text-8xl font-light text-gold/15 group-hover:text-gold/35 transition-all duration-300 leading-none block mb-3"
                        aria-hidden="true"
                      >
                        {p.num}
                      </span>

                      <h3 className="font-display text-xl font-semibold text-cream mb-3">
                        {p.title}
                      </h3>
                      <p className="text-sm text-cream/55 leading-relaxed">
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
          className="bg-green-dark py-44 px-6 md:px-16 text-center relative overflow-hidden"
        >
          {/* SVG dot-grid background pattern */}
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

          {/* Decorative rings */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[500px] h-[500px] rounded-full border border-white/[0.05] absolute" />
            <div className="w-[780px] h-[780px] rounded-full border border-white/[0.03] absolute" />
            <div className="w-[1060px] h-[1060px] rounded-full border border-white/[0.018] absolute" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className={`reveal ${eyebrow}`}>Let&apos;s work together</span>
            <h2
              id="cta-heading"
              className="reveal font-display text-[clamp(2.2rem,6vw,4rem)] font-light leading-[1.08] text-cream mb-6"
            >
              Not sure where to start?
              <br />
              <em className="italic text-gold-light">
                That&apos;s exactly why we talk first.
              </em>
            </h2>
            <p className="reveal text-[0.93rem] text-cream/55 max-w-md mx-auto mb-14 leading-[1.8]">
              No presentations, no off-the-shelf proposals. Just an honest
              conversation about your specific situation — and whether
              we&apos;re the right team to help.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@webbinghub.io"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-green-dark text-[0.78rem] font-medium tracking-[0.12em] uppercase hover:bg-gold-light transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Send an email to WebbingHUB TRAVEL"
              >
                Get in touch
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://webbinghub.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-cream/25 text-cream/70 text-[0.78rem] tracking-[0.12em] uppercase hover:border-cream/50 hover:text-cream transition-all duration-300"
                aria-label="Visit WebbingHUB main website (opens in new tab)"
              >
                Visit WebbingHUB
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
            webbinghub.io →
          </a>
        </nav>
      </footer>
    </>
  );
}
