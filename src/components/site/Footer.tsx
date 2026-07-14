import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    setLoading(false);
    if (error && !error.message.includes("duplicate")) {
      toast.error("Could not subscribe. Try again.");
    } else {
      toast.success("Subscribed! Welcome to Buzmark.");
      setEmail("");
    }
  };

  return (
    <footer className="mt-24 bg-navy-deep text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="rounded-lg bg-white p-3 inline-block">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="text-sm text-white/70">
            Building Brands. Driving Growth. Delivering Results.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"
                className="rounded-md border border-white/15 p-2 text-white/80 transition-colors hover:border-orange hover:text-orange">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/industries", "Industries"],
              ["/portfolio", "Portfolio"],
              ["/clients", "Clients"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-orange">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-orange" /> Ruiru,Nairobi, Kenya</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange" /> +254 705 242 144</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange" /> hello@buzmarkagency.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">Newsletter</h4>
          <p className="mb-3 text-sm text-white/70">Growth tips, monthly. No spam.</p>
          <form onSubmit={subscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-orange focus:outline-none"
            />
            <button
              disabled={loading}
              className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-bright disabled:opacity-60"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Buzmark Agency. All rights reserved.</p>
          <p>Building Brands · Driving Growth · Delivering Results</p>
        </div>
      </div>
    </footer>
  );
}
