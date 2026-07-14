import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Managed Brands — Buzmark Agency" },
      { name: "description", content: "The brands Buzmark manages end-to-end: marketing, brand, websites and consulting." },
      { property: "og:title", content: "Buzmark Managed Brands" },
      { property: "og:description", content: "Companies we manage — marketing, brand, websites and consulting." },
    ],
  }),
  component: Clients,
});

const clients = [
  { name: "Cerrari Fintech", industry: "Financial Intelligence", services: ["Marketing", "Website", "Social", "Consulting"] },
  { name: "ABC Holdings", industry: "Investment", services: ["Brand", "Website", "Investor Comms"] },
  { name: "XYZ Travels", industry: "Travel & Tourism", services: ["Social", "Campaigns", "Photography"] },
  { name: "TechNova", industry: "Software & AI", services: ["Brand", "Website", "Product Video"] },
  { name: "GreenFarm Ltd", industry: "Agri-business", services: ["Marketing", "Brand", "Training"] },
  { name: "Kilele Health", industry: "Healthcare", services: ["Consulting", "Marketing", "Website"] },
  { name: "Nyati Legal", industry: "Legal Services", services: ["Brand", "Website"] },
  { name: "Baraka Foods", industry: "FMCG", services: ["Packaging", "Marketing", "Video"] },
];

function Clients() {
  return (
    <>
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Our Clients</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Brands we <span className="text-orange">manage & grow.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Each client gets a dedicated team, monthly reports and a growth roadmap owned by Buzmark.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <div key={c.name} className="group rounded-2xl border border-border bg-card transition-all hover:border-orange hover:shadow-elegant">
              <div className="flex h-40 items-center justify-center rounded-t-2xl hero-gradient">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white font-display text-2xl font-bold text-navy">
                  {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                <p className="text-sm text-orange">{c.industry}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70">{s}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <a href="#" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-orange">
                    <Globe className="h-4 w-4" /> Website
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-orange">
                    View profile <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
