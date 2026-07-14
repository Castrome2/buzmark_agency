import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Buzmark Agency — Our Story & Team" },
      { name: "description", content: "Learn about Buzmark Agency — mission, vision, values, and the team building brands that grow." },
      { property: "og:title", content: "About Buzmark Agency" },
      { property: "og:description", content: "Our story, our team, and how we build brands that grow." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Results-Obsessed", desc: "Every deliverable ties to a business number." },
  { icon: Heart, title: "Craft Matters", desc: "We refuse to ship work we wouldn't sign our name to." },
  { icon: Users, title: "Long-Term Partners", desc: "We invest in relationships, not transactions." },
  { icon: Award, title: "Continuous Learning", desc: "Weekly reviews, quarterly upskilling, always evolving." },
];

const team = [
  { name: "Castro Fidel", role: "Founder & Managing Director" },
  { name: "Jane Wanjiku", role: "Head of Brand" },
  { name: "Mudachi Joseph", role: "Head of Marketing" },
  { name: "Mercy Achieng", role: "Lead Consultant" },
  { name: "Juma Winstone", role: "Creative Director" },
  { name: "Caleb Odinga", role: "Growth Manager" },
];

const timeline = [
  { year: "2024", event: "Buzmark founded in Nairobi with 3 founders." },
  { year: "2025", event: "First 10 client brands onboarded. Studio opens." },
  { year: "2025", event: "Expanded to marketing, video and consulting divisions." },
  { year: "2025", event: "5+ industries served, 10+ projects delivered." },
  { year: "2026", event: "Launched Buzmark client portal and consulting platform." },
];

function About() {
  return (
    <>
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">About Us</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Building Brands.<br /><span className="text-orange">Growing Businesses.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Buzmark is a Nairobi-based agency for founders and executives who want serious growth.
            We combine strategy, creative and data to build brands people remember and businesses that scale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", body: "To help ambitious African businesses build world-class brands and unlock durable growth." },
            { icon: Eye, title: "Our Vision", body: "A continent of confident brands competing and winning on the global stage." },
            { icon: Heart, title: "Our Promise", body: "Craft, clarity and accountability on every project. No fluff, just measurable outcomes." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border-t-4 border-orange bg-card p-8 shadow-sm">
              <b.icon className="h-8 w-8 text-orange" />
              <h3 className="mt-4 font-display text-2xl font-bold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-orange">Core Values</p>
          <h2 className="mt-2 text-center font-display text-4xl font-bold">What we live by</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-background p-6 text-center transition-all hover:shadow-elegant">
                <div className="mx-auto inline-flex rounded-xl bg-orange/10 p-4 text-orange">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-orange">Meet the Team</p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold">The people behind Buzmark</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex h-56 items-center justify-center hero-gradient">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange font-display text-3xl font-bold text-white">
                  {m.name.split(" ").map((w) => w[0]).join("")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-orange">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-orange">Timeline</p>
          <h2 className="mt-2 text-center font-display text-4xl font-bold">Our journey so far</h2>
          <ol className="mt-12 space-y-6 border-l-2 border-orange/40 pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[35px] flex h-6 w-6 items-center justify-center rounded-full bg-orange text-xs font-bold">•</span>
                <div className="font-display text-xl font-bold text-orange">{t.year}</div>
                <p className="mt-1 text-white/80">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
