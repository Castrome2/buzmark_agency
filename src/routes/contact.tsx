import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Buzmark Agency" },
      { name: "description", content: "Reach the Buzmark team — get a proposal, ask a question, or partner with us." },
      { property: "og:title", content: "Contact Buzmark" },
      { property: "og:description", content: "Get in touch with the Buzmark team." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(5).max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setLoading(false);
    if (error) return toast.error("Could not send. Try again.");
    toast.success("Message sent! We'll respond within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">
            Let's <span className="text-orange">talk.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Tell us about your business. We'll respond within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: "Head Office", value: "Ruiru, Nairobi, Kenya" },
              { icon: Phone, label: "Phone / WhatsApp", value: "+254 705 242 144" },
              { icon: Mail, label: "Email", value: "hello@buzmarkagency.com" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map"
                className="h-64 w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.79%2C-1.28%2C36.83%2C-1.25&layer=mapnik"
              />
            </div>
          </aside>

          <form onSubmit={submit} className="lg:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" required type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <div>
              <label className="mb-1 block text-sm font-medium">Message *</label>
              <textarea
                required rows={6} maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
              />
            </div>
            <button
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white shadow-orange transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Sending…" : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}{required && " *"}</label>
      <input
        type={type} required={required} value={value} maxLength={255}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
      />
    </div>
  );
}
