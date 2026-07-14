import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Buzmark Agency" },
      { name: "description", content: "Selected work across branding, marketing, websites, social, photography and video." },
      { property: "og:title", content: "Buzmark Portfolio" },
      { property: "og:description", content: "Case studies and creative work by Buzmark Agency." },
    ],
  }),
  component: Portfolio,
});

const filters = ["All", "Branding", "Marketing", "Websites", "Social Media", "Photography", "Video", "Campaigns"] as const;

const projects = [
  { title: "Cerrari Fintech - Rebrand & Web", tag: "Branding", client: "Cerrari Fintech", palette: ["#0f1b3d", "#e85d1a"] },
  { title: "GreenFarm National Campaign", tag: "Marketing", client: "GreenFarm Ltd", palette: ["#1b4332", "#e85d1a"] },
  { title: "XYZ Travels - E-commerce Site", tag: "Websites", client: "XYZ Travels", palette: ["#0c2340", "#f7931e"] },
  { title: "TechNova - Launch Film", tag: "Video", client: "TechNova", palette: ["#141432", "#4f46e5"] },
  { title: "ABC Holdings - Investor Deck", tag: "Branding", client: "ABC Holdings", palette: ["#0f1b3d", "#c9a84c"] },
  { title: "Kilele Health - Social Growth", tag: "Social Media", client: "Kilele Health", palette: ["#064e3b", "#5cbdb9"] },
  { title: "Retail Product Shoot", tag: "Photography", client: "Confidential", palette: ["#2d2d2d", "#e85d3a"] },
  { title: "Fintech Awareness Campaign", tag: "Campaigns", client: "Cerrari Fintech", palette: ["#0f1b3d", "#e85d1a"] },
  { title: "Corporate Website Refresh", tag: "Websites", client: "ABC Holdings", palette: ["#0d2340", "#e85d1a"] },
];

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.tag === active);

  return (
    <>
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Portfolio</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Work that <span className="text-orange">moves the needle.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            A selection of brands, campaigns and platforms we've shaped.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "border-orange bg-orange text-white"
                  : "border-border bg-background text-foreground/70 hover:border-orange hover:text-orange"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div
                className="relative h-56 w-full overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.palette[0]}, ${p.palette[1]})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-white/90">
                  {p.client.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
