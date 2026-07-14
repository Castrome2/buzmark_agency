import { createFileRoute } from "@tanstack/react-router";

import Biz from "@/assets/Biz.png";
import School from "@/assets/School.png";
import Hospital from "@/assets/Hospital.png";
import NGO from "@/assets/NGO.png";
import Government from "@/assets/Government.png";
import Restaurant from "@/assets/Restaurant.png";
import Hotel from "@/assets/Hotel.png";
import Bank from "@/assets/Bank.png";
import Manufacturing from "@/assets/Manufacturing.png";
import RealEstate from "@/assets/RealEstate.png";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Buzmark Agency" },
      {
        name: "description",
        content:
          "Buzmark works across 20+ industries from fintech and schools to hospitality and manufacturing.",
      },
      { property: "og:title", content: "Industries — Buzmark" },
      {
        property: "og:description",
        content:
          "20+ industries served with brand, marketing and consulting.",
      },
    ],
  }),
  component: Industries,
});

const list = [
  {
    icon: Biz,
    name: "Businesses",
    desc: "SMEs, startups and scale-ups.",
  },
  {
    icon: School,
    name: "Schools",
    desc: "K-12, colleges and universities.",
  },
  {
    icon: Hospital,
    name: "Hospitals",
    desc: "Clinics, hospitals and health tech.",
  },
  {
    icon: NGO,
    name: "NGOs",
    desc: "Impact organisations and foundations.",
  },
  {
    icon: Government,
    name: "Government",
    desc: "Ministries, agencies and counties.",
  },
  {
    icon: Restaurant,
    name: "Restaurants",
    desc: "F&B brands and franchises.",
  },
  {
    icon: Hotel,
    name: "Hotels",
    desc: "Hotels, lodges and resorts.",
  },
  {
    icon: Bank,
    name: "Financial Institutions",
    desc: "Banks, SACCOs and fintech.",
  },
  {
    icon: Manufacturing,
    name: "Manufacturing",
    desc: "FMCG and industrial brands.",
  },
  {
    icon: RealEstate,
    name: "Real Estate",
    desc: "Developers, agents and REITs.",
  },
];

function Industries() {
  return (
    <>
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Industries
          </p>

          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Deep experience across{" "}
            <span className="text-orange">20+ industries</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Sector knowledge shortens the learning curve. We've helped brands
            compete and win in every category we serve.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        
                  <div  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {list.map((i) => (
            <div
              key={i.name}
              className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-orange hover:shadow-elegant"
            >
              <img src={i.icon} alt={i.name}/>
              <div className="mx-auto inline-flex rounded-lg bg-navy p-3">
                <img
                  src={i.icon}
                  alt={i.name}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold">
                {i.name}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      
      </section>
    </>
  );
}