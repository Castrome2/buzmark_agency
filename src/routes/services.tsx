import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Palette, Megaphone, Globe, Target, GraduationCap, Camera, Video, ArrowRight,MessagesSquare
} from "lucide-react";
import imgBranding from "@/assets/svc-branding.jpg";
import imgMarketing from "@/assets/svc-marketing.jpg";
import imgWeb from "@/assets/svc-web.jpg";
import imgConsulting from "@/assets/svc-consulting.jpg";
import imgPhotography from "@/assets/svc-photography.jpg";
import imgVideo from "@/assets/svc-video.jpg";
import imgTraining from "@/assets/svc-training.jpg";
import imgSocial from "@/assets/social.png";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Buzmark Agency" },
      { name: "description", content: "Branding, marketing, websites, consulting, training and more. Full-service growth for ambitious businesses." },
      { property: "og:title", content: "Buzmark Services" },
      { property: "og:description", content: "Branding, marketing, websites, consulting and training." },
    ],
  }),
  component: Services,
});

const categories = [
  {
    icon: Palette, title: "Branding", image: imgBranding,
    items: ["Logo Design", "Brand Identity", "Brand Guidelines", "Rebranding", "Packaging", "Stationery"],
    from: "KES 45,000",
  },
  {
    icon: Megaphone, title: "Marketing", image: imgMarketing,
    items: ["SEO", "Google Ads", "Meta Ads", "TikTok Marketing", "LinkedIn Marketing", "Email Marketing", "Content Marketing", "Analytics"],
    from: "KES 60,000/mo",
  },
  {
    icon: Globe, title: "Website Development", image: imgWeb,
    items: ["Corporate Websites", "E-commerce", "Landing Pages", "School Systems", "Hospital Systems", "Booking Systems", "Maintenance"],
    from: "KES 80,000",
  },
  {
    icon: Target, title: "Consulting", image: imgConsulting,
    items: ["Business Strategy", "Marketing Strategy", "Sales Enablement", "Startup Advisory", "Digital Transformation"],
    from: "KES 25,000/session",
  },
  {
    icon: Camera, title: "Photography", image: imgPhotography,
    items: ["Product Shoots", "Brand Portraits", "Lifestyle", "Corporate Events"],
    from: "KES 35,000",
  },
  {
    icon: Video, title: "Videography", image: imgVideo,
    items: ["Brand Films", "TV & Social Ads", "Reels & Shorts", "Documentaries", "Corporate Videos"],
    from: "KES 55,000",
  },
  {
    icon: GraduationCap, title: "Training", image: imgTraining,
    items: ["Corporate Workshops", "Marketing Bootcamps", "Sales Training", "Brand Storytelling"],
    from: "KES 40,000/day",
  },
   {
    icon: MessagesSquare, title: "Social Media Management", image: imgSocial,
    items: ["Management of All Social Platforms", "Ads Management", "Monthly SEO Support", "Weekly Performance Reports"],
    from: "KES 80,000/Mo",
  },
];

function Services() {
  return (
    <>
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            One team. <span className="text-orange">Every capability.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            From logo to launch to lifetime growth,Buzmark covers the full brand and marketing stack.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((c) => (
            <div key={c.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-orange hover:shadow-elegant">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <img
                  src={c.image}
                  alt={`${c.title} services at Buzmark Agency`}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-navy p-2.5 text-orange shadow-elegant">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow">{c.title}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/80">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" /> {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Starts from</div>
                    <div className="font-display text-xl font-bold text-navy">{c.from}</div>
                  </div>
                  <Link to="/book" className="inline-flex items-center gap-2 rounded-md bg-orange px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-bright">
                    Book Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Need a custom scope?</h2>
          <p className="mt-3 text-muted-foreground">Talk to a strategist - we'll shape a plan around your budget and goals.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-deep">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
