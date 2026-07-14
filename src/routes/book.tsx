import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Buzmark Agency" },
      { name: "description", content: "Book a free 30-minute discovery call with the Buzmark team." },
      { property: "og:title", content: "Book Buzmark Consultation" },
      { property: "og:description", content: "Free 30-minute discovery call with our strategists." },
    ],
  }),
  component: Book,
});

const services = [
  "Brand Strategy", "Logo & Identity", "Website Development", "Social Media",
  "Social Media Management", "Digital Marketing",
  "Content Creation", "Photography", "Videography", "Corporate Branding", "Business Consulting",
  "Training", "Events & Team Building",
];

const budgets = ["Under KES 50,000", "KES 50,000 – 150,000", "KES 150,000 – 500,000", "KES 500,000 – 1M+", "Not sure yet"];

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(100).optional(),
  service: z.string().trim().min(1),
  preferred_date: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

function Book() {
  const [f, setF] = useState({
    name: "", email: "", phone: "", company: "",
    service: services[0], preferred_date: "", budget: budgets[4], message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ ...f, preferred_date: f.preferred_date || undefined });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Check your inputs");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("bookings").insert(parsed.data);
    setLoading(false);
    if (error) return toast.error("Booking failed. Try again.");
    setDone(true);
    toast.success("Booking received! We'll confirm within 24 hours.");
  };

  if (done) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold">Booking received!</h1>
        <p className="mt-3 text-muted-foreground">
          Thanks {f.name.split(" ")[0]}. A Buzmark strategist will reach out to <b>{f.email}</b> within 24 hours to confirm your session.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="hero-gradient py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <Calendar className="h-3.5 w-3.5 text-orange" /> Free 30-minute discovery call
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Book your <span className="text-orange">consultation.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us about your business. We'll come prepared with insights and a growth plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-elegant">
          <div className="grid gap-4 sm:grid-cols-2">
            <Text label="Full name *" value={f.name} onChange={(v) => setF({ ...f, name: v })} required />
            <Text label="Email *" type="email" value={f.email} onChange={(v) => setF({ ...f, email: v })} required />
            <Text label="Phone" value={f.phone} onChange={(v) => setF({ ...f, phone: v })} />
            <Text label="Company" value={f.company} onChange={(v) => setF({ ...f, company: v })} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Service *</Label>
              <select value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })} className={inputCls}>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <Label>Preferred date</Label>
              <input type="date" value={f.preferred_date}
                onChange={(e) => setF({ ...f, preferred_date: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                className={inputCls} />
            </div>
          </div>

          <div>
            <Label>Estimated budget</Label>
            <select value={f.budget} onChange={(e) => setF({ ...f, budget: e.target.value })} className={inputCls}>
              {budgets.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <Label>Project description</Label>
            <textarea rows={5} maxLength={2000} value={f.message}
              onChange={(e) => setF({ ...f, message: e.target.value })}
              placeholder="What are you trying to achieve? Any current challenges?"
              className={inputCls} />
          </div>

          <button
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-orange transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Sending…" : <>Book my consultation <ArrowRight className="h-4 w-4" /></>}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            No payment required. We'll confirm your slot within 24 hours.
          </p>
        </form>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1 block text-sm font-medium">{children}</label>;
}
function Text({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} required={required} value={value} maxLength={255}
        onChange={(e) => onChange(e.target.value)} className={inputCls} />
    </div>
  );
}
