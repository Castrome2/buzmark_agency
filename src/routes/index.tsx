import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target, Megaphone, TrendingUp, Users, ArrowRight, Sparkles, Camera, Video,
  Palette, Globe, GraduationCap, Building2, PenTool, Star, Quote,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buzmark Agency" },
      { name: "description", content: "Your growth partner in branding, marketing, digital presence and business consulting." },
      { property: "og:title", content: "Buzmark Agency — Strategy. Growth. Results." },
      { property: "og:description", content: "Your growth partner in branding, marketing, digital presence and business consulting." },
    ],
  }),
  component: Home,
});

const stats = [
  { n: "50+", l: "Projects Delivered" },
  { n: "20+", l: "Industries Served" },
  { n: "95%", l: "Client Satisfaction" },
  { n: "15+", l: "Creative Experts" },
];

const services = [
  { icon: Palette, title: "Brand Strategy", desc: "Positioning, identity systems and brand guidelines that stick." },
  { icon: PenTool, title: "Logo & Identity", desc: "Distinctive marks and visual systems built for scale." },
  { icon: Globe, title: "Website Development", desc: "Fast, conversion-focused websites and web platforms." },
  { icon: Megaphone, title: "Social Media", desc: "Content, community and paid campaigns across every channel." },
  { icon: Sparkles, title: "Content Creation", desc: "Editorial, motion and copy that earns attention." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO, Google Ads, Meta, TikTok and LinkedIn performance." },
  { icon: Camera, title: "Photography", desc: "Product, brand and lifestyle shoots done in-house." },
  { icon: Video, title: "Videography", desc: "Ads, reels, documentaries and corporate video." },
  { icon: Building2, title: "Corporate Branding", desc: "Rebrands, rollouts and internal brand adoption." },
  { icon: Target, title: "Business Consulting", desc: "Strategy, growth and digital transformation advisory." },
  { icon: GraduationCap, title: "Training", desc: "Corporate workshops in branding, marketing and sales." },
  { icon: Users, title: "Events & Team Building", desc: "Launches, activations and team experiences." },
];

const managed = [
  { name: "Serrari Fintech", industry: "Financial Intelligence" },
  { name: "ABC Holdings", industry: "Investment" },
  { name: "XYZ Travels", industry: "Travel & Tourism" },
  { name: "TechNova", industry: "Software & AI" },
  { name: "GreenFarm Ltd", industry: "Agri-business" },
  { name: "Kilele Health", industry: "Healthcare" },
];

const testimonials = [
  { name: "Alex Mwangi", role: "CEO, Serrari Fintech", quote: "Buzmark rebuilt our brand and marketing engine in 90 days. Leads tripled, quality went up." },
  { name: "Priya Shah", role: "Founder, XYZ Travels", quote: "They think like operators, not just an agency. Every campaign has a hypothesis and a number." },
  { name: "Daniel Otieno", role: "COO, GreenFarm Ltd", quote: "From identity to web to social — one team, one vision. It just works." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        {/* Animated image slideshow background */}
        <div aria-hidden className="absolute inset-0">
          {[
            { src: hero1, kb: "hero-kb-a", delay: "0s" },
            { src: hero2, kb: "hero-kb-b", delay: "-8s" },
            { src: hero3, kb: "hero-kb-c", delay: "-16s" },
          ].map((s, i) => (
            <div
              key={i}
              className="hero-slide absolute inset-0 overflow-hidden"
              style={{ animationDelay: s.delay }}
            >
              <img
                src={s.src}
                alt=""
                className={`h-full w-full object-cover ${s.kb}`}
                style={{ animationDelay: s.delay }}
              />
            </div>
          ))}
          {/* Optional looping video layer — set src to your brand reel (mp4) */}
          {/* <video autoPlay muted loop playsInline
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-40"
            src="/hero-reel.mp4" /> */}

          {/* Dark & gradient overlays to keep text readable */}
          <div className="absolute inset-0 bg-navy-deep/75" />
          <div className="absolute inset-0 hero-gradient opacity-70" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange/30 blur-3xl float-blob" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-navy/40 blur-3xl float-blob" style={{ animationDelay: "-6s" }} />
        </div>

        <div className="pointer-events-none absolute right-10 top-10 z-10 hidden lg:block">
          <div className="rounded-2xl bg-white/95 p-6 shadow-elegant">
            <Logo className="h-20 w-auto" />
          </div>
        </div>


        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Marketing · Consulting · Growth
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Your growth partner in{" "}
            <span className="text-orange">Branding, Marketing</span> &amp; Business Consulting.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            We help businesses build memorable brands, execute winning marketing strategies,
            manage digital presence and accelerate growth through expert consulting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white shadow-orange transition-transform hover:-translate-y-0.5"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-2 border-l-4 border-orange pl-4 text-lg italic text-white/85 lg:hidden">
            <Quote className="h-5 w-5 shrink-0 text-orange" />
            Smart Strategies. Powerful Marketing. Measurable Impact.
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 bg-navy-deep/60 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.l} className="py-8 text-center">
                <div className="font-display text-4xl font-bold text-orange">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">Why Buzmark</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              We don't just run campaigns.<br />
              <span className="text-orange">We build growth systems.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Buzmark combines strategy, creativity and data. Every engagement starts with a
              business goal then we design brand, marketing and product experiences that move
              the numbers.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "End-to-end team: strategists, designers, marketers, developers.",
                "Data-first we measure what matters and iterate weekly.",
                "Sector expertise across 20+ industries.",
                "Long-term partnership model most clients stay 2+ years.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-foreground/85">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, l: "Strategy" },
              { icon: Megaphone, l: "Marketing" },
              { icon: TrendingUp, l: "Growth" },
              { icon: Users, l: "Consulting" },
            ].map((c) => (
              <div key={c.l} className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-orange hover:shadow-elegant">
                <div className="inline-flex rounded-xl border-2 border-orange p-3 text-orange">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-display text-xl font-semibold">{c.l}</div>
                <p className="mt-1 text-sm text-muted-foreground">Purpose-built to move your business forward.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">Services</p>
              <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Everything a modern brand needs.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-orange hover:shadow-elegant">
                <div className="inline-flex rounded-lg bg-navy/5 p-3 text-navy transition-colors group-hover:bg-orange group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGED BRANDS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Companies We Manage</p>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Brands under Buzmark care.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From fintech to farms we run the marketing, brand and growth engine for ambitious businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {managed.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-orange hover:shadow-elegant">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-navy font-display text-2xl font-bold text-orange">
                {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{c.name}</h3>
              <p className="text-sm text-orange">{c.industry}</p>
              <div className="mt-4 flex items-center justify-between">
                <Link to="/clients" className="text-sm font-semibold text-navy hover:text-orange">View profile →</Link>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-orange" />
                  <span className="h-2 w-2 rounded-full bg-navy" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/clients" className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep">
            See all managed brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">Testimonials</p>
            <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Trusted by growing businesses.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <Quote className="h-8 w-8 text-orange" />
                <p className="mt-4 text-white/85">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange font-display font-bold text-white">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-orange text-orange" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-cream py-24">
        <div className="absolute inset-0 bg-[radial-gradient(600px_at_80%_50%,color-mix(in_oklab,var(--orange)_20%,transparent),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Let's build something</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Ready to grow your business?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Book a free 30-minute discovery call. We'll audit your brand and marketing, and share a growth plan.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange px-8 py-4 text-base font-semibold text-white shadow-orange transition-transform hover:-translate-y-0.5"
          >
            Schedule Meeting <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
